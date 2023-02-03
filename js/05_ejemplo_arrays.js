    let frutas = ["Manzana", "Banana"];
    console.log(frutas); // Manzana y Banana 
    console.log(frutas.length); // 2
    let primero = frutas[0] // Manzana
    let ultimo = frutas[frutas.length - 1];
    // La última posición de un array es el legth -1, de modo que saldrá Banana
    let penúltimo = frutas[frutas.length - 2]
    //la penúltima será -2, dado que hay 2-2=0 y 0 es la posición de Manzana
    let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
    // ["Manzana", "Banana", "Naranja"]
    //La respuesta de la consola será la longitud, que ahora será 3 (de tres elementos)
    //nombrearray.push('elementonuevo'); esto añade un nuevo elemento al array
    let quitamos = frutas.pop(); // Elimina "Naranja" del final
    // ["Manzana", "Banana"]
    //
    //nombrearray.pop(); esto quita un elemento al array
    console.log(quitamos);
    console.log(ultimo);
    console.log(penultimo)    
    console.log(nuevaLongitud);
