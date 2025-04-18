import { environment } from "src/environments/environments";
import { elementsApi, includesApi, weatherLocateTime, weatherLocateTimeResponse } from "./interfaces";

const BASE_URL_API = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

/**
 * Transforma una cadena de texto, cambiando sus espacios ' ' a '-', para poder usarlo en la API.
 * 
 * @param {string} text El texto que quieres convertir.
 * @return {string} El texto convertido.
 */
export function transformStringToApi (text: string) : string {
  return text.replace(' ', '-');
}

export function transformData (value: weatherLocateTimeResponse): weatherLocateTime {
  return {
    "locate": value.address,
    "datetime": value.days[0].datetime,
    "temp": value.days[0].temp,
    "conditions": value.days[0].conditions,
    "icon": value.days[0].icon
  };
}

export function getUrlApi (
  locate: string,
  date: string,
  elements?: elementsApi[],
  include?: includesApi[]
)
{
  let url = `${BASE_URL_API}${locate}/${date}?key=${environment.apiKey}`;
  if (elements != undefined)
    url += `&elements=${elements.join(",")}`
  if (include != undefined)
    url += `&include=${include.join(",")}`
  return (url);
}

/**
 * 
 * @param {number} numDays Es el numero de dias por delante que quieres la fecha respecto al dia actual. 0 si quieres el dia de hoy.
 * @returns {string} La fecha en formato yyyy-mm-dd
 */
export function getDateApi(numDays: number) : string
{
  const date = new Date();
  date.setDate(date.getDate() + numDays);
  return (date.toISOString().split('T')[0]);
}