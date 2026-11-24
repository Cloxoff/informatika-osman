import { useCallback, useRef } from 'react';

export function GlassCard({
  as: Component = 'div',
  interactive = false,
  className = '',
  children,
  onPointerMove,
  ...props
}) {
  const cardRef = useRef(null);

  const handlePointerMove = useCallback(
    (e) => {
      if (interactive && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        cardRef.current.style.setProperty('--mx', `${x.toFixed(1)}%`);
        cardRef.current.style.setProperty('--my', `${y.toFixed(1)}%`);
      }
      if (onPointerMove) onPointerMove(e);
    },
    [interactive, onPointerMove]
  );

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`liquid-glass rounded-3xl ${interactive ? 'liquid-interactive' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
