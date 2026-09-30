const BASE_URL = "https://rickandmortyapi.com/api";

// Una sola función comparte el manejo de HTTP y la conversión de JSON.
async function request(endpoint, params, signal) {
  const query = new URLSearchParams(params);
  const response = await fetch(`${BASE_URL}/${endpoint}?${query}`, { signal });
  // La API responde 404 cuando un filtro no encuentra coincidencias.
  if (response.status === 404) return { info: { count: 0, pages: 0 }, results: [] };
  if (!response.ok) throw new Error(`Error de la API: ${response.status}`);
  return response.json();
}

export function getCharacters(name = "", page = 1, signal) {
  return request("character", { name, page }, signal);
}

export function getEpisodes(page = 1, signal) {
  return request("episode", { page }, signal);
}
