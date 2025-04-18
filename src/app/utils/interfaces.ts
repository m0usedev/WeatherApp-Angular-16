export interface weatherLocateTime {
  "locate": string
  "datetime": string,
  "temp": number,
  "conditions": string,
  "icon": string
}

export interface weatherLocateTimeResponse {
  "queryCost": number,
  "latitude": number,
  "longitude": number,
  "resolvedAddress": string,
  "address": string,
  "timezone": string,
  "tzoffset": number,
  "days": [
    {
      "datetime": string,
      "temp": number,
      "conditions": string,
      "icon": string
    }
  ]
}

export type elementsApi = "temp" | "conditions" | "icon" | "datetime";

export type includesApi = "day";