# WeatherApp-Angular-16

## Partes de la apliación

- Root:
  - **nav**:
    - **name-app**: si le cliceas te devuelve al elemenot **1 del cuerpo**.
    - **search-bar**: Puedes buscar una comunidad concreta de España y mostrara el resultado en el elemento **1 del cuerpo**.
      - Las opciones de autocompletado las saca de un JSON que tiene las ciudades de españa.
  - **body**:
    1. **weather-list**: Listado de comunidades España.
        - Cuando haces click en uno de los resultados te carga sus datos especificos en el componente **2 del cuerpo**.
    2. **weather-located**: Tiempo de una comunidad.
        - Muestra el tiempo de la comunidad ese dia y tiene una lista de opciones con el resto de dias disponibles a revisar.
        - En caso de que se busque en el **navegador** otra comunidad al realizar la busqueda se volvera a cargar el componente **1 del cuerpo**.

- Github en el que me baso: https://github.com/LauraBigoni/WeatherApp

- Recursos:

  - **Iconos del tiempo*:
    - [Post web](https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/)
    - Github svg icons: https://github.com/visualcrossing/WeatherIcons
    - icon id:
      | Icon ID              | Weather Conditions                                                                 |
      |----------------------|-------------------------------------------------------------------------------------|
      | `snow`               | Amount of snow is greater than zero                                                |
      | `rain`               | Amount of rainfall is greater than zero                                            |
      | `fog`                | Visibility is low (lower than one kilometer or mile)                               |
      | `wind`               | Wind speed is high (greater than 30 kph or mph)                                    |
      | `cloudy`             | Cloud cover is greater than 90% cover                                              |
      | `partly-cloudy-day`  | Cloud cover is greater than 20% cover during day time                              |
      | `partly-cloudy-night`| Cloud cover is greater than 20% cover during night time                            |
      | `clear-day`          | Cloud cover is less than 20% cover during day time                                 |
      | `clear-night`        | Cloud cover is less than 20% cover during night time                               |
    


- Proceso API:

  - **weather-list**:

    - **Obtener la temperatura de un dia especifico sin datos horas**: 
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Castilla-y-León/2025-04-16?key=CD7SWTWAXTL4TC4YV8XDV62P7&elements=temp,conditions,icon,datetime&include=day`

      `Castilla-y-León/2025-04-19`
      `&elements=temp,conditions,icon,datetime&include=day`

  - **weather-located**:
    Para esto tenemos el poder decir a cuantos [dias en el futuro queremos el tiempo de una zona](https://www.visualcrossing.com/resources/documentation/weather-api/using-the-time-period-parameter-to-specify-dynamic-dates-for-weather-api-requests/) 

    - **Obtener la temperatura de un dia especifico con datos horas**: 
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Castilla-y-León/2025-04-19?key=CD7SWTWAXTL4TC4YV8XDV62P7&elements=temp,conditions,icon,datetime`
      
      `Castilla-y-León/2025-04-19`
      `&elements=datetime,temp,conditions,icon`


- Usar api:
  - `next<value>days`
  - `unitGroup = metric` para tener unidades europeas en el resultado.
  - `lang = es` para tener la respuesta en español.
  - `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
  - `[location]/[today / next7days]?key=YOUR_API_KEY`



