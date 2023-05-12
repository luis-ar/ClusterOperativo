const btnInicio = document.querySelector(".inicio");
const muestraTiempo = document.querySelector(".muestraTiempo");
const muestra = document.querySelector(".muestra");
const btnNuevo = document.querySelector(".cargarNuevo");
function multiplicarMatrices(matrizA, matrizB) {
  const filasA = matrizA.length;
  const columnasA = matrizA[0].length;
  const filasB = matrizB.length;
  const columnasB = matrizB[0].length;

  // Verificar si las dimensiones son válidas para la multiplicación
  if (columnasA !== filasB) {
    throw new Error(
      "No se pueden multiplicar las matrices. Las dimensiones no son válidas."
    );
  }

  // Crear una matriz resultado inicializada con ceros
  const matrizResultado = new Array(filasA);
  for (let i = 0; i < filasA; i++) {
    matrizResultado[i] = new Array(columnasB).fill(0);
  }

  // Realizar la multiplicación de matrices
  for (let i = 0; i < filasA; i++) {
    for (let j = 0; j < columnasB; j++) {
      for (let k = 0; k < columnasA; k++) {
        matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return matrizResultado;
}

// Función auxiliar para generar una matriz aleatoria de tamaño especificado con valores aleatorios en un rango
function generarMatrizAleatoria(filas, columnas, min, max) {
  const matriz = new Array(filas);
  for (let i = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  return matriz;
}

// Ejemplo de uso
// Crear dos matrices de tamaño 100x100 con valores aleatorios entre 1 y 10

btnInicio.addEventListener("click", () => {
  const eleccion = confirm("Desea comenzar la operacion de las matrices");
  if (eleccion) {
    //console.time("Tiempo de ejecución");
    const tamaño = prompt("Ingrese el tamaño de las matrices:");
    const tiempoInicial = performance.now();

    const matrizA = generarMatrizAleatoria(tamaño, tamaño, 1, 10);
    const matrizB = generarMatrizAleatoria(tamaño, tamaño, 1, 10);

    // Multiplicar las matrices
    const matrizResultado = multiplicarMatrices(matrizA, matrizB);

    // Imprimir el resultado en la consola
    for (const element of matrizResultado) {
      console.log(element);
    }
    //console.timeEnd("Tiempo de ejecución");
    const tiempoFinal = performance.now();
    const tiempoTranscurrido = tiempoFinal - tiempoInicial;
    console.log("Finalizado el proceso", tiempoTranscurrido);
    muestra.style.display = "block";
    btnNuevo.style.display = "block";
    btnInicio.style.display = "none";
    muestraTiempo.innerHTML = tiempoTranscurrido + " ms";
  } else {
    alert("Operacion cancelada");
  }
});
btnNuevo.addEventListener("click", () => {
  location.reload();
});
