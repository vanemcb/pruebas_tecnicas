# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Lo que piden en este ejercicio es encontrar el número de combinaciones posibles de 1 y 2 hasta sumar N, por tal razón consideré que la solución más optima era utilizar una función recursiva, sin embargo, hay que contemplar que al generar el número de combinaciones posibles importa el orden en el que se suben los escalones y esto hace que al aumentar N, el resultado aumente exponencialmente. Todo lo anterior limita el algoritmo que implementé, ya que aproximadamente después de una N=40 se empieza a tomar demasiado tiempo en obtener un resultado y con N=100 no pude obtener un resultado porque son muchas combinaciones posibles que tiene que procesar el computador.

Investigando sobre recursión en Javascript encontré que para este tipo de problemas se pueden utilizar funciones trampolín, así que más adelante podría intentar implementar para ver si se puede resolver el problema.
