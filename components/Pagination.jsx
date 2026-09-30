export default function Pagination({ page, totalPages, onPageChange, loading }) {
  if (totalPages <= 1) return null;
  const buttonClass = "rounded border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40";
  return (
    <nav aria-label="Paginación" className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <button className={buttonClass} disabled={loading || page <= 1} onClick={() => onPageChange(page - 1)}>Anterior</button>
      <span className="text-sm">Página {page} de {totalPages}</span>
      <button className={buttonClass} disabled={loading || page >= totalPages} onClick={() => onPageChange(page + 1)}>Siguiente</button>
    </nav>
  );
}
