import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="grid items-center gap-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">Te damos la bienvenida</p>
          <h1 className="text-4xl font-bold leading-tight">Explorador de Rick y Morty</h1>
          <p className="mt-5 leading-7 text-slate-600">Explora los personajes y episodios del universo de Rick y Morty. Encuentra una cara conocida o descubre tu próximo episodio.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/characters" className="rounded bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">Ver personajes</Link>
            <Link href="/episodes" className="rounded border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100">Ver episodios</Link>
          </div>
        </div>
        <figure>
          <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-lg bg-emerald-50 p-3">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" width="300" height="300" className="h-auto w-full rounded" />
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" width="300" height="300" className="h-auto w-full rounded" />
          </div>
          <figcaption className="mt-3 text-center text-sm text-slate-500">Rick Sanchez y Morty Smith</figcaption>
        </figure>
      </section>
    </>
  );
}
