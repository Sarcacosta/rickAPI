"use client";

import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(name.trim());
  }
  return (
    <form onSubmit={handleSubmit} className="mb-7 rounded-lg border border-slate-200 bg-white p-5" role="search">
      <label htmlFor="character-search" className="mb-2 block text-sm font-semibold">Buscar por nombre</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input id="character-search" type="search" value={name} onChange={(event) => setName(event.target.value)} placeholder="Buscar personaje..." className="min-w-0 flex-1 rounded border border-slate-300 px-3 py-2" />
        <button type="submit" className="rounded bg-emerald-700 px-6 py-2 font-semibold text-white hover:bg-emerald-800">Buscar</button>
      </div>
      <p className="mt-2 text-sm text-slate-500">Deja la búsqueda vacía para ver todos los personajes.</p>
    </form>
  );
}
