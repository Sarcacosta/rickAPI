"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import SearchBox from "../../components/SearchBox";
import Pagination from "../../components/Pagination";
import { getCharacters } from "../../services/api";

export default function CharactersPage() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ results: [], info: { pages: 0, count: 0 } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCharacters() {
      setLoading(true);
      setError(false);
      try {
        const result = await getCharacters(name, page, controller.signal);
        if (!controller.signal.aborted) setData(result);
      } catch (error) {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadCharacters();
    // Cancela la consulta anterior al cambiar de búsqueda o salir de la página.
    return () => controller.abort();
  }, [name, page, retry]);

  function handleSearch(value) {
    setName(value);
    setPage(1);
    setRetry((previous) => previous + 1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Personajes</h1>
      <p className="mb-7 mt-2 text-slate-600">Conoce a las personas y criaturas del universo de Rick y Morty.</p>
      <SearchBox onSearch={handleSearch} />
      <div aria-live="polite" aria-busy={loading}>
        {loading ? <p className="py-10 text-center">Cargando personajes...</p> : error ? (
          <div role="alert" className="rounded border border-red-200 bg-red-50 p-5">
            <p>Ocurrió un error</p>
            <button onClick={() => setRetry((previous) => previous + 1)} className="mt-3 underline">Intentar de nuevo</button>
          </div>
        ) : data.results.length === 0 ? <p className="py-10 text-center">No se encontraron personajes</p> : (
          <>
            <p className="mb-4 text-sm text-slate-500">{data.info.count} personajes{name ? ` que coinciden con «${name}»` : " disponibles"}</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{data.results.map((character) => <CharacterCard key={character.id} character={character} />)}</div>
            <Pagination page={page} totalPages={data.info.pages} onPageChange={setPage} loading={loading} />
          </>
        )}
      </div>
    </>
  );
}
