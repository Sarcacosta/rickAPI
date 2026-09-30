export default function EpisodeCard({ episode }) {
  const meses = {
    January: "enero", February: "febrero", March: "marzo", April: "abril",
    May: "mayo", June: "junio", July: "julio", August: "agosto",
    September: "septiembre", October: "octubre", November: "noviembre", December: "diciembre",
  };
  // La API entrega la fecha con el formato "December 2, 2013".
  const [mes, dia, anio] = episode.air_date.replace(",", "").split(" ");
  const fecha = meses[mes] && dia && anio
    ? `${dia} de ${meses[mes]} de ${anio}`
    : episode.air_date;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-emerald-700">{episode.episode}</p>
      <h2 className="mt-2 text-lg font-bold">{episode.name}</h2>
      <p className="mt-4 text-sm text-slate-600">Fecha de estreno: {fecha}</p>
    </article>
  );
}
