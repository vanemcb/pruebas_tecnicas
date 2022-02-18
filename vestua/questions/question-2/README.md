# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Consideré que el primer paso necesario era convertir el archivo CSV en datos manipulables para Javascript, entonces creé un array donde cada fila es un array que contiene los elementos de cada fila del archivo CSV. A continuación muestro un ejemplo de la estructura:

```
arrayData = [
	[ user_row1, entityId_row1, entityType_row1, eventType_row1]
	[ user_row2, entityId_row2, entityType_row2, eventType_row2]
	[ user_rowN, entityId_rowN, entityType_rowN, eventType_rowN]
]
```

Ya pudiendo manipular los datos creé un diccionario donde las keys son los IDs de cada usuario y los values son diccionarios que almacenan los productos a los cuales se les dio click y los productos que fueron visitados. La estructura se puede ver a contonuación:

```
generalDict = {
	user1: {clicks: [entityId1, entityId2, ...], visits: [entityId1, entityId2, ...]}
	user2: {clicks: [entityId1, entityId2, ...], visits: [entityId1, entityId2, ...]}
	userN: {clicks: [entityId1, entityId2, ...], visits: [entityId1, entityId2, ...]}
}
```
Para crear este diccionario primero se hizo una lista de usuarios únicos.

Ya teniendo este diccionario utilicé loops para recorrerlo y sumar la cantidad de clicks unícos y la cantidad de visitas únicas por cada producto.

Para calcular el CTR dividí la cantidad de clicks entre el número de visitas de cada producto, algunos resultados daban "Infinity", esto debido a que había productos con clicks pero con cero visitas, creo que esto puede ser un error en los datos de entrada del archivo CSV, ya que considero que para darle click al producto, primero se debió haber visitado, es decir, si un producto tiene 1 o mas clicks debe tener al menos 1 visita.

Por último creé el archivo de salida con los datos obtenidos anteriormente.
