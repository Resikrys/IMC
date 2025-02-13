//Cálculo IMC
// document.getElementById('calcular').addEventListener("click", calcularIMC());

function calcularIMC() {
    let peso = parseFloat(document.getElementById('inputWeight').value);
    let altura = parseFloat(document.getElementById('inputHeight').value);

    let imc = peso / ((altura/100) * (altura/100)); //Altura/100 para pasar de cm a metros cuadrados (imc = peso (kg) / altura al cuadrado (m))
    let mensaje = '';
    let resultadoId = '';

    if (imc < 18) {
        mensaje = 'Vaya, peso bajo';
        resultadoId = 'infoBajo';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = 'Peso normal, buen trabajo!';
        resultadoId = 'infoBien';
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = 'Sobrepeso';
        resultadoId = imc + 'infoSobrepeso';
    } else if (imc > 30) {
        mensaje = 'Obesidad';
        resultadoId = 'infoObesidad';
    } else {
        mensaje = ' oops... introduce tu peso y altura y calcula tu IMC!';
    };

    alert(`Tu IMC es ${imc.toFixed(2)}: ${mensaje}`);

    
    //Evento para ocultar las cartas informativas por defecto --> Corregir error! Se resetea y ejecuta y no se aprecia a leer la carta revelada
    let cards = document.querySelectorAll('.result-card');
    cards.forEach(card => card.style.display = "none");
    
    //Evento para mostrar la carta resultante -> Tras resultado hacer match y mostrar tarjeta
    document.getElementById(resultadoId).style.display = "block";

};

//Convertir pulgadas a cm & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir

//Convertir libras a kg & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir

