export const comunidadesAutonomas: string[] = [
  "Andalucía",
  "Aragón",
  "Asturias",
  "Islas Baleares",
  "Canarias",
  "Cantabria",
  "Castilla-La Mancha",
  "Castilla y León",
  "Cataluña",
  "Comunidad Valenciana",
  "Extremadura",
  "Galicia",
  "Madrid",
  "Región de Murcia",
  "Navarra",
  "País Vasco",
  "La Rioja",
  "Ceuta",
  "Melilla"
];

/**
 * Devolver una lista con todas las comunidades que contienen la cadena pasada.
 * 
 * @param {string} text Es la cadena a encontrar dentro del nombre de todas las comunidades
 * @returns {string[]|undefined} Si `text` se encuentra dentro de al menos una comunidad devolvera una array de al menos el nombre de una comunidad, `string[]`, sino devolvera `undefined`, indicando que no esta en ninguna comunidad.
 */
export function findLocate(text: string) : string[] | undefined {
  const findLoc = comunidadesAutonomas.filter((loc) => {
    if (loc.toLowerCase().includes(text.toLowerCase()))
      return loc;
    return false;
  })
  if (findLoc.length == 0)
    return undefined;
  return findLoc;
}

/**
 * Transforma una cadena de texto, cambiando sus espacios ' ' a '-', para poder usarlo en la API.
 * 
 * @param {string} text El texto que quieres convertir.
 * @return {string} El texto convertido.
 */
export function transformStringToApi (text: string) : string {
  return text.replace(' ', '-');
}