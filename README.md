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

Hay que pasar a esta: https://www.visualcrossing.com/weather-api/

- Proceso API:

  - **weather-list**:

  - **weather-located**:
    Para esto tenemos el poder decir a cuantos [dias en el futuro queremos el tiempo de una zona](https://www.visualcrossing.com/resources/documentation/weather-api/using-the-time-period-parameter-to-specify-dynamic-dates-for-weather-api-requests/) 


- Usar api:
  - `next<value>days`
  - `unitGroup = metric` para tener unidades europeas en el resultado.
  - `lang = es` para tener la respuesta en español.
  - `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
  - `[location]/[today / next7days]?key=YOUR_API_KEY`