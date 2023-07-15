export const returnArrayReverse = (array) => {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  };

  // Faz com que a publicação mostrar seja a primeira a ser rederizada!
