function modificarObjeto(parametro) {
  // MUTACIÓN: Usamos el puntero para ir al Heap y cambiar "Ford" por "Toyota".
  // (Si el código terminara aquí, el auto original de afuera sería un Toyota).

  // REASIGNACIÓN: Destruimos el puntero en el Stack local.
  // Ahora 'parametro' apunta a un objeto nuevo en otra parte del Heap.
  parametro = { marca: "Ferrari" };

  parametro.marca = "Toyota";
  // Imprime "Ferrari", porque estamos leyendo la casa nueva.
  console.log("Adentro: " + parametro.marca);
}

let auto = { marca: "Ford" };

modificarObjeto(auto);

// Imprime "Toyota".
// ¿Por qué? Porque el auto original fue mutado en la primera línea de la función,
// pero sobrevivió a la reasignación de la segunda línea porque la reasignación
// solo afectó al puntero local de la función.
console.log("Afuera: " + auto.marca);
