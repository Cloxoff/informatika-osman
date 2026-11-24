export function PageTransition({ children, className = '' }) {
  return (
    <main className={`mx-auto w-full max-w-7xl px-3 pt-5 pb-6 sm:px-6 sm:pt-10 ${className}`}>
      {children}
    </main>
  );
}
