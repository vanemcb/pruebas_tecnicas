# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

Primero pensé en utilizar contadores para cada tipo de paréntesis y si la cantidad era igual significaba que cada paréntesis fue cerrado, pero me faltaba tener en cuenta el caso de que fuera correctamente cerrado (por ejemplo: `'([)]'`), por tal razón lo que hice fue utilizar un loop para recorrer el string de entrada y si encontraba un paréntesis abierto lo almacenaba en un array, después si encontraba un paréntesis cerrado lo comparaba con el último elemento almacenado en el array, y si correspondian al mismo tipo se eliminaba el elemento. Al finalizar el loop, si el array estaba vacío, significaba que todos los paréntesis fueron cerrados correctamente.