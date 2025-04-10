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

  > 💡 **Nota**:
  > 
  > Estoy pensando en usar para el dia actual tanto de la list como de located [app history](https://openweathermap.org/api/one-call-3#history) el enviar la fecha actual directamente, ya que la respuesta es mucho mas concisa y me da menos datos que la peticion de los datos de hoy.

  - **weather-list**:
      1. Necesito un **json** con todas las ciudades de españa.
      2. Usar [geocoding-api](https://openweathermap.org/api/geocoding-api) para obtener la **latitud** y **longitud** de cada una.
      3. Con esos dos datos obtener el tiempo antual de cada ciudad en [openweathermap](https://openweathermap.org/api/one-call-3#start).
  - **weather-located**:
      1. Recibe la longitud y latitud en la url.
      2. Carga a traves de [openweathermap](https://openweathermap.org/api/one-call-3#start) el tiempo actual.
      3. A traves de la lista de 4 dias (es lo maximo a la que llega la api) en el futuro cargaremos con esa date cad prevision en el componente de esa ciudad.

- Usar api:
  1. Registrarse en la api: https://home.openweathermap.org/users/sign_up
  2. Obtener la key de la api