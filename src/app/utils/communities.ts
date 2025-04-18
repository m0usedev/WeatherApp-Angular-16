import { weatherLocateTime } from "./interfaces";

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

export const comunidadesResponse: weatherLocateTime[] = [
  {
    "locate": "Andalucía",
    "datetime": "2025-04-17",
    "temp": 22,
    "conditions": "Rain, Partially cloudy",
    "icon": "rain"
  },
  {
    "locate": "Aragón",
    "datetime": "2025-04-17",
    "temp": 18,
    "conditions": "Clear",
    "icon": "clear-day"
  },
  {
    "locate": "Asturias",
    "datetime": "2025-04-17",
    "temp": 15,
    "conditions": "Overcast",
    "icon": "cloudy"
  },
  {
    "locate": "Islas Baleares",
    "datetime": "2025-04-17",
    "temp": 20,
    "conditions": "Partly cloudy",
    "icon": "partly-cloudy-day"
  },
  {
    "locate": "Canarias",
    "datetime": "2025-04-17",
    "temp": 24,
    "conditions": "Sunny",
    "icon": "clear-day"
  },
  {
    "locate": "Cantabria",
    "datetime": "2025-04-17",
    "temp": 16,
    "conditions": "Rain",
    "icon": "rain"
  },
  {
    "locate": "Castilla-La Mancha",
    "datetime": "2025-04-17",
    "temp": 21,
    "conditions": "Mostly sunny",
    "icon": "partly-cloudy-day"
  },
  {
    "locate": "Castilla y León",
    "datetime": "2025-04-17",
    "temp": 17,
    "conditions": "Fog",
    "icon": "fog"
  },
  {
    "locate": "Cataluña",
    "datetime": "2025-04-17",
    "temp": 19,
    "conditions": "Rain showers",
    "icon": "rain"
  },
  {
    "locate": "Comunidad Valenciana",
    "datetime": "2025-04-17",
    "temp": 23,
    "conditions": "Partly cloudy",
    "icon": "partly-cloudy-day"
  },
  {
    "locate": "Extremadura",
    "datetime": "2025-04-17",
    "temp": 20,
    "conditions": "Sunny",
    "icon": "clear-day"
  },
  {
    "locate": "Galicia",
    "datetime": "2025-04-17",
    "temp": 14,
    "conditions": "Rain",
    "icon": "rain"
  },
  {
    "locate": "Madrid",
    "datetime": "2025-04-17",
    "temp": 22,
    "conditions": "Mostly clear",
    "icon": "clear-day"
  },
  {
    "locate": "Región de Murcia",
    "datetime": "2025-04-17",
    "temp": 25,
    "conditions": "Sunny",
    "icon": "clear-day"
  },
  {
    "locate": "Navarra",
    "datetime": "2025-04-17",
    "temp": 18,
    "conditions": "Cloudy",
    "icon": "cloudy"
  },
  {
    "locate": "País Vasco",
    "datetime": "2025-04-17",
    "temp": 16,
    "conditions": "Rain",
    "icon": "rain"
  },
  {
    "locate": "La Rioja",
    "datetime": "2025-04-17",
    "temp": 17,
    "conditions": "Partly cloudy",
    "icon": "partly-cloudy-day"
  },
  {
    "locate": "Ceuta",
    "datetime": "2025-04-17",
    "temp": 21,
    "conditions": "Sunny",
    "icon": "clear-day"
  },
  {
    "locate": "Melilla",
    "datetime": "2025-04-17",
    "temp": 22,
    "conditions": "Sunny",
    "icon": "clear-day"
  }
]


/**
 * Devolver una lista con todas las comunidades que contienen la cadena pasada.
 * 
 * @param {string} text Es la cadena a encontrar dentro del nombre de todas las comunidades
 * @returns {string[]|undefined} Si `text` se encuentra dentro de al menos una comunidad devolvera una array de al menos el nombre de una comunidad, `string[]`, sino devolvera `undefined`, indicando que no esta en ninguna comunidad.
 */
export function findLocate(text: string) : string[] | undefined {
  if (text.length == 0)
    return ([...comunidadesAutonomas]);
  const findLoc = comunidadesAutonomas.filter((loc) => {
    if (loc.toLowerCase().includes(text.toLowerCase()))
      return loc;
    return false;
  })
  if (findLoc.length == 0)
    return undefined;
  return findLoc;
}