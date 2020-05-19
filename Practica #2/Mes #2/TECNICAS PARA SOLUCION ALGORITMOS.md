# TECNICAS_PARA_SOLUCION_ALGORITMOS: Explicar en que consisten cada una de las siguientes t�cnicas comunes en la soluci�n de algoritmos.

## Sliding Window
La Ventana deslizante es un mecanismo dirigido al control de flujo de datos que existe entre un emisor y un receptor pertenecientes a una red inform�tica.
El Protocolo de Ventana Deslizante es un protocolo de transmisi�n de datos bidireccional de la capa del nivel de enlace (modelo OSI).
La ventana deslizante es un dispositivo de control de flujo de tipo software, es decir, el control del flujo se lleva a cabo mediante el intercambio espec�fico de caracteres o tramas de control, con los que el receptor indica al emisor cu�l es su estado de disponibilidad para recibir datos.
Este dispositivo es necesario para no inundar al receptor con env�os de tramas de datos. El receptor al recibir datos debe procesarlo, si no lo realiza a la misma velocidad que el transmisor los env�a se ver� saturado de datos, y parte de ellos se pueden perder. Para evitar tal situaci�n la ventana deslizante controla este ritmo de env�os del emisor al receptor.
Con este dispositivo se resuelven dos grandes problemas: el control de flujo de datos y la eficiencia en la transmisi�n.
## Two Pointers 
Dos punteros es realmente una t�cnica f�cil y efectiva que generalmente se usa para buscar pares en una matriz ordenada.
Dada una matriz ordenada A (ordenada en orden ascendente), con N enteros, encuentre si existe alg�n par de elementos (A [i], A [j]) de modo que su suma sea igual a X.
## Fast & Slow pointers 
Puntero lento y puntero r�pido son simplemente los nombres dados a dos variables de puntero. La �nica diferencia es que, el puntero lento recorre la lista vinculada un nodo a la vez, mientras que un puntero r�pido recorre la lista vinculada dos nodos a la vez.
A continuaci�n se muestra un fragmento de c�digo b�sico para mover punteros lentos y r�pidos.
## Merge Intervals
Dado un conjunto de intervalos de tiempo en cualquier orden, combine todos los intervalos superpuestos en uno y genere el resultado que solo debe tener intervalos mutuamente excluyentes. Deje que los intervalos se representen como pares de enteros para simplificar. Por ejemplo, deje que el conjunto de intervalos dado sea {{1,3}, {2,4}, {5,7}, {6,8}}. Los intervalos {1,3} y {2,4} se superponen entre s�, por lo que deben fusionarse y convertirse en {1, 4}. Del mismo modo, {5, 7} y {6, 8} deben fusionarse y convertirse en {5, 8},
## Cyclic Sort
La clasificaci�n por ciclos es un algoritmo de clasificaci�n inestable e inestable, una clasificaci�n de comparaci�n que es te�ricamente �ptima en t�rminos del n�mero total de escrituras en la matriz original , a diferencia de cualquier otro algoritmo de clasificaci�n en el lugar. Se basa en la idea de que la permutaci�n a clasificar puede factorizarse en ciclos, que pueden rotarse individualmente para dar un resultado ordenado.
A diferencia de casi cualquier otro tipo, los elementos nunca se escriben en otra parte de la matriz simplemente para apartarlos de la acci�n. Cada valor se escribe cero veces, si ya est� en su posici�n correcta, o se escribe una vez en su posici�n correcta. Esto coincide con el n�mero m�nimo de sobrescrituras requeridas para una ordenaci�n in situ completada
## In-place Reversal of a LinkedList
Dado el puntero al nodo principal de una lista vinculada, la tarea es invertir la lista vinculada. Necesitamos revertir la lista cambiando los enlaces entre nodos.
In-place Reversal of a LinkedList
Este cumple con una tarea de invierte la posici�n del, o los, valor introducido, por ejemplo, introduces 5, 4, 3, 2, 1.
Es te lo organizara de esta forma 1, 2, 3, 4, 5.
## Tree Breadth First Search
Cuando intrusismo un �rbol binario, devuelve el recorrido de orden de nivel de los valores de sus nodos. (de izquierda a derecha, nivel por nivel hasta terminar su funci�n). 
## Depth-first search
Es un algoritmo para buscar estructuras de datos de �rbol o gr�fico. El algoritmo comienza en el nodo ra�z este es como una versi�n de b�squeda en profundidad.
## Two Heaps
Cuando introducimos dos grupos m�ximos binarios como matrices, combine los grupos en uno solo. Ejemplo
Input: a = {10, 5, 6, 2}, 
            b = {12, 7, 9}
Output: {12, 10, 9, 2, 5, 7, 6}
## Sub set
El objeto Set permite almacenar valores �nicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
Si un objeto iterable es pasado, todos sus elementos ser�n a�adidos al nuevo set. Si no se especifica este par�metro, o si su valor es null, el nuevo Set estar� vac�o. Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserci�n. Un valor en un Set s�lo puede estar una vez; �ste es �nico en la colecci�n Set.
## Modified Binary Search
E un algoritmo de b�squeda que encuentra la posici�n de un valor en un array ordenado. Compara el valor con el elemento en el medio del array, si no son iguales, la mitad en la cual el valor no puede estar es eliminada y la b�squeda contin�a en la mitad restante hasta que el valor se encuentre.
## Bitwise XOR
Es una acci�n primitiva sustancialmente m�s r�pida que las que se llevan a cabo sobre el valor real de los operandos.
Un detalle a tener en cuenta es que estos Bitwise son, en Javascript, operadores de 32-bits, lo que significa que, en el manejo de valores binarios, un n�mero como 0101 se procesa internamente como 00000000000000000000000000000101. Sin embargo, todos los ceros de la izquierda pueden despreciarse ya que, como en el caso de los n�meros decimales, no tienen ning�n significado o valor.
## Top 'K' Elements
Encuentra el elemento k m�s grande en una matriz sin clasificar. Tenga en cuenta que es el k -�simo elemento m�s grande en el orden de clasificaci�n, no el k -�simo elemento distinto.
## Pattern: K-way merge
Estos son un tipo espec�fico de algoritmos de combinaci�n de secuencias que se especializan en tomar k listas ordenadas y fusionarlas en una sola lista ordenada. Estos algoritmos de fusi�n generalmente se refieren a algoritmos de fusi�n que incluyen varias listas ordenadas mayores de dos. Las fusiones bidireccionales tambi�n se denominan fusiones binarias.
## 0/1 Knapsack (Dynamic Programming)
Dados los pesos y valores de n elementos, coloque estos elementos en una mochila de capacidad W para obtener el valor total m�ximo en la mochila. En otras palabras, dados dos conjuntos enteros val [0.n-1] y wt [0..n-1] que representan valores y pesos asociados con n elementos respectivamente. Tambi�n dado un n�mero entero W que representa la capacidad de la mochila, descubra el subconjunto de valor m�ximo de val [] de modo que la suma de los pesos de este subconjunto sea menor o igual a W. No puede dividir un elemento, ya sea elegir el elemento completo o no lo elijas (propiedad 0-1).
## Topological Sort (Graph):
En el campo de la inform�tica, un ordenamiento topol�gico u ordenamiento topol�gico de un gr�fico dirigido es un ordenamiento lineal de sus v�rtices de tal manera que, para cada borde dirigido de un v�rtice, se representa antes ven el ordenamiento.
Es posible un ordenamiento topol�gico si y solo si el gr�fico no tiene ciclos dirigidos, es decir, si es un gr�fico ac�clico dirigido (DAG). Cualquier DAG tiene al menos un orden topol�gico, y se conocen algoritmos para construir un orden topol�gico de cualquier DAG en tiempo lineal.

