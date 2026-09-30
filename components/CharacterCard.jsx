export default function CharacterCard({ character }) {
  const estado = { Alive: "Vivo", Dead: "Muerto", unknown: "Desconocido" }[character.status] || character.status;
  const genero = { Female: "Femenino", Male: "Masculino", Genderless: "Sin género", unknown: "Desconocido" }[character.gender] || character.gender;
  const especie = {
    Human: "Humano", Alien: "Alienígena", Humanoid: "Humanoide",
    Poopybutthole: "Señor Pantalones de Popó", Mythological: "Mitológico",
    "Mythological Creature": "Criatura mitológica", Animal: "Animal",
    Robot: "Robot", Cronenberg: "Cronenberg", Disease: "Enfermedad", unknown: "Desconocido",
  }[character.species] || character.species;

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <img src={character.image} alt={character.name} width="300" height="300" loading="lazy" className="aspect-square w-full object-cover" />
      <div className="p-5">
        <h2 className="text-lg font-bold">{character.name}</h2>
        <dl className="mt-3 space-y-2 text-sm">
          {[["Estado", estado], ["Especie", especie], ["Género", genero]].map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-2"><dt className="text-slate-500">{label}:</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>
    </article>
  );
}
