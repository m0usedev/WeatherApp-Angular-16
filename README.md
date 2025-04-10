# WeatherApp-Angular-16

## Partes de la apliación

- Root:
  - **nav**:
    - **name-app**: si le cliceas te devuelve al elemenot **1 del cuerpo**.
    - **search-bar**: Puedes buscar una comunidad concreta de España y mostrara el resultado en el elemento **1 del cuerpo**.
  - **body**:
    1. **weather-list**: Listado de comunidades España.
        - Cuando haces click en uno de los resultados te carga sus datos especificos en el componente **2 del cuerpo**.
    2. **weather-located**: Tiempo de una comunidad.
        - Muestra el tiempo de la comunidad ese dia y tiene una lista de opciones con el resto de dias disponibles a revisar.
        - En caso de que se busque en el **navegador** otra comunidad al realizar la busqueda se volvera a cargar el componente **1 del cuerpo**.