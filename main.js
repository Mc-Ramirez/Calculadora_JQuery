$(function () {
  //Constantes
  const suma = 1;
  const resta = 2;
  const multiplicacion = 3;
  const division = 4;
  const raiz = 5;
  const seno1 = 6;
  const coseno = 7;
  const tangente1 = 8;
  const cotangente = 9;
  var resultado;
  var operacion;

  // Determina segun el valor del boton la operacion a realizar
  $(".operacion").click(function (e) {
    operacion = Number(e.target.value);
  });

  /*
  - - - - -  BOTONES DE LAS OPERACIONES - - - - -
  */

  //Boton de sumar
  $("#btn-suma").click(function () {
    $("#num2").show(); //Mostramos el otro campo input
  });

  //Boton de restar
  $("#btn-restar").click(function () {
    $("#num2").show(); //Mostramos el otro campo input
  });

  //Boton de multiplicar
  $("#btn-multiplica").click(function () {
    $("#num2").show(); //Mostramos el otro campo input
  });

  //Boton de dividir
  $("#btn-divide").click(function () {
    $("#num2").show(); //Mostramos el otro campo input
  });

  //Boton de la raiz cuadrada
  $("#btn-raiz").click(function () {
    $("#num2").hide();
  });

  //Boton de seno
  $("#btn-seno").click(function () {
    $("#num2").hide();
  });

  //Boton de coseno
  $("#btn-coseno").click(function () {
    $("#num2").hide();
  });

  //Boton de tangente
  $("#btn-tangente").click(function () {
    $("#num2").hide();
  });

  //Boton de cotangente
  $("#btn-cotangente").click(function () {
    $("#num2").hide();
  });

  //Boton de resultado
  $("#btn-result").click(function () {
    $("#show-result").empty();
    var n1 = $(".num1").val(); //Recogemos el primer valor en formato número
    var n2 = $(".num2").val(); //Recogemos el segundo valor en formato número
    switch (operacion) {
      case suma:
        resultado = sumar(n1, n2);
        break;
      case resta:
        resultado = restar(n1, n2);
        break;
      case multiplicacion:
        resultado = multiplicar(n1, n2);
        break;
      case division:
        resultado = dividir(n1, n2);
        break;
      case raiz:
        resultado = raizCuadrada(n1);
        break;
      case seno1:
        resultado = seno(n1);
        break;
      case coseno:
        resultado = coSeno(n1);
        break;
      case tangente1:
        resultado = tangente(n1);
        break;
      case cotangente:
        resultado = coTangente(n1);
        break;
    }
    imprimeResultado(resultado);
  });

  /*
  - - - - - FUNCIONES - - - - - 
  */

  /**
   * Metodo que suma dos valores introducidos por parametro
   * @param {*} n1 Primer numero a sumar
   * @param {*} n2 Segundo numero a sumar
   * @returns El valor de la suma
   */
  function sumar(n1, n2) {
    return Number(n1) + Number(n2);
  }

  /**
   * Metodo que resta dos valores introducidos por parametro
   * @param {*} n1 Primer numero a restar
   * @param {*} n2 Segundo numero a restar
   * @returns El valor de la resta
   */
  function restar(n1, n2) {
    return Number(n1) - Number(n2);
  }

  /**
   * Metodo que multiplica dos valores introducidos por parametro
   * @param {*} n1 Primer numero a multiplicar
   * @param {*} n2 Segundo numero a multiplicar
   * @returns El valor de la multiplicacion
   */
  function multiplicar(n1, n2) {
    return Number(n1) * Number(n2);
  }

  /**
   * Metodo que divide dos valores introducidos por parametro
   * @param {*} n1 Primer numero a dividir
   * @param {*} n2 Segundo numero a dividir
   * @returns El valor de la division
   */
  function dividir(n1, n2) {
    return Number(n1) / Number(n2);
  }

  /**
   * Metodo que saca la raiz cuadra de un valor dado
   * @param {*} n1 Numero a calcular
   * @returns El valor de la raiz cuadrada
   */
  function raizCuadrada(n1) {
    return Math.sqrt(Number(n1));
  }

  /**
   * Metodo que calcula el seno de un valor dado
   * @param {*} n1 Numero a calcular
   * @returns El valor del seno
   */
  function seno(n1) {
    return Math.sin(Number(n1));
  }

  /**
   * Metodo que calcula el coseno de un valor dado
   * @param {*} n1 Numero a calcular
   * @returns El valor del coseno
   */
  function coSeno(n1) {
    return Math.cos(Number(n1));
  }

  /**
   * Metodo que calcula la tangente de un valor dado
   * @param {*} n1 Numero a calcular
   * @returns El valor de la tangente
   */
  function tangente(n1) {
    return Math.tan(Number(n1));
  }

  /**
   * Metodo que calcula la cotangente de un valor dado
   * @param {*} n1 Numero a calcular
   * @returns El valor de la cotangente
   */
  function coTangente(n1) {
    resultado = Math.atan(Number(n1));
  }

  /**
   * Función que imprime los resultados obtenidos por pantalla.
   * Resetea también los valores de los input
   * @param result Resultado a mostrar
   */
  function imprimeResultado(result) {
    $("#show-result").append(`<h2><strong>${result}</strong></h2>`);
    $(".num1").val("");
    $(".num2").val("");
  }
});
