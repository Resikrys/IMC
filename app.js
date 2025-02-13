//Cálculo IMC
// document.getElementById('calcular').addEventListener("click", calcularIMC());

function calcularIMC() {
    let peso = document.getElementById('inputWeight').value;
    let altura = document.getElementById('inputHeight').value;
    let imc = peso / ((altura/100) * (altura/100)); //Altura/100 para pasar de cm a metros cuadrados (imc = peso (kg) / altura al cuadrado (m))
    let resultado = '';

    if (imc < 18) {
        resultado = imc + ' Vaya, peso bajo';
    } else if (imc < 25) {
        resultado = imc + ' Peso normal, buen trabajo!';
    } else if (imc < 30) {
        resultado = imc + ' Sobrepeso';
    } else if (imc > 30) {
        resultado = imc + ' Obesidad';
    } else {
        resultado = ' oops... introduce tu peso y altura y calcula tu IMC!';
    };

    alert("Este es tu IMC: " + '' + resultado);
};

//Evento para ocultar las cartas informativas por defecto
// document.querySelectorAll('.card').forEach(function(card) {
//     card.computedStyleMap.display = 'none';
// });

//Evento para mostrar la carta resultante -> Tras resultado hacer match y mostrar tarjeta

//Convertir pulgadas a cm & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir

//Convertir libras a kg & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir

