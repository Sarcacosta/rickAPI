"use client";

import { useEffect, useState } from "react";
import EpisodeCard from "../../components/EpisodeCard";
import Pagination from "../../components/Pagination";
import { getEpisodes } from "../../services/api";

export default function EpisodesPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ results: [], info: { pages: 0, count: 0 } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function loadEpisodes() {
      setLoading(true);
      setError(false);
      try {
        const result = await getEpisodes(page, controller.signal);
        if (!controller.signal.aborted) setData(result);
      } catch (error) {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadEpisodes();
    return () => controller.abort();
  }, [page, retry]);

  return (
    <>
      <h1 className="text-3xl font-bold">Episodios</h1>
      <p className="mb-7 mt-2 text-slate-600">Explora los títulos, códigos y fechas de estreno de los episodios.</p>
      <div aria-live="polite" aria-busy={loading}>
        {loading ? <p className="py-10 text-center">Cargando episodios...</p> : error ? (
          <div role="alert" className="rounded border border-red-200 bg-red-50 p-5">
            <p>Ocurrió un error</p>
            <button onClick={() => setRetry((previous) => previous + 1)} className="mt-3 underline">Intentar de nuevo</button>
          </div>
        ) : data.results.length === 0 ? <p className="py-10 text-center">No se encontraron episodios</p> : (
          <>
            <p className="mb-4 text-sm text-slate-500">{data.info.count} episodios disponibles</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{data.results.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}</div>
            <Pagination page={page} totalPages={data.info.pages} onPageChange={setPage} loading={loading} />
          </>
        )}
      </div>
    </>
  );
}
