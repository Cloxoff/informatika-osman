import { useCallback, useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';

let cachedSupportsDisplayTransition;

function canTransitionDisplay() {
  if (cachedSupportsDisplayTransition !== undefined) return cachedSupportsDisplayTransition;
  if (typeof window === 'undefined' || !window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  cachedSupportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return cachedSupportsDisplayTransition;
}

function supportsTopLayerExit() {
  return (
    typeof window !== 'undefined' &&
    Boolean(window.CSS?.supports?.('overlay', 'auto')) &&
    canTransitionDisplay()
  );
}

export function GlassModal({ isOpen, onClose, title, closeLabel = 'Close', children }) {
  const dialogRef = useRef(null);
  const closingRef = useRef(false);
  const titleId = useId();

  const finishClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.returnValue = '';
    closingRef.current = false;
    onClose();
  }, [onClose]);

  const animateAndClose = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open || closingRef.current) return;
    closingRef.current = true;

    if (!supportsTopLayerExit()) {
      dialog.setAttribute('data-closing', '');
      const animations = dialog.getAnimations ? dialog.getAnimations({ subtree: true }) : [];
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 450)),
        ]);
      }
      dialog.removeAttribute('data-closing');
    }

    if (dialog.open) {
      dialog.close();
    }
    finishClose();
  }, [finishClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.removeAttribute('data-closing');
      closingRef.current = false;
      dialog.showModal();
    } else if (!isOpen && dialog.open && !closingRef.current) {
      animateAndClose();
    }
  }, [isOpen, animateAndClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e) => {
      e.preventDefault();
      animateAndClose();
    };

    const handleNativeClose = () => {
      if (!closingRef.current) {
        finishClose();
      }
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleNativeClose);

    // Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
    let cleanupOutside = () => {};
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = dialog.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      let pressedOutside = false;
      const onPointerDown = (e) => {
        pressedOutside = outside(e);
      };
      const onPointerUp = (e) => {
        if (pressedOutside && outside(e)) {
          animateAndClose();
        }
        pressedOutside = false;
      };
      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      cleanupOutside = () => {
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    } else {
      // Intercept backdrop click when closedby="any" so exit animation plays cleanly
      const onPointerUp = (e) => {
        if (e.target === dialog) {
          const r = dialog.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          ) {
            animateAndClose();
          }
        }
      };
      dialog.addEventListener('pointerup', onPointerUp);
      cleanupOutside = () => dialog.removeEventListener('pointerup', onPointerUp);
    }

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleNativeClose);
      cleanupOutside();
    };
  }, [animateAndClose, finishClose]);

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby={titleId}
      className="glass-dialog rounded-[2rem] outline-none"
    >
      <div className="liquid-glass-strong relative flex max-h-[calc(100dvh-2.5rem)] flex-col overflow-hidden rounded-[2rem]">
        <div className="flex items-center justify-between gap-4 border-b border-slate-900/10 px-6 py-4 dark:border-white/15">
          <h1
            id={titleId}
            className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white"
          >
            {title}
          </h1>
          <button
            type="button"
            onClick={animateAndClose}
            aria-label={closeLabel}
            className="liquid-pill inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:scale-105 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:text-slate-200 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-7">{children}</div>
      </div>
    </dialog>
  );
}
