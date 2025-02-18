//Cálculo IMC
//Evento para ocultar las cartas informativas por defecto
let cards = document.querySelectorAll('.result-card');
cards.forEach(card => card.classList.add("d-none"));

document.getElementById('calcular').addEventListener("click", function(event) {
    event.preventDefault(); //Para evitar que el formulario recargue la página

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
        resultadoId = 'infoSobrepeso';
    } else if (imc > 30) {
        mensaje = 'Obesidad';
        resultadoId = 'infoObesidad';
    } else {
        mensaje = ' oops... introduce tu peso y altura y calcula tu IMC!';
    };

    alert(`Tu IMC es ${imc.toFixed(2)}: ${mensaje}`);
    
    //Evento para mostrar la carta resultante -> Tras resultado hacer match y mostrar tarjeta
    let resultadoCard = document.getElementById(resultadoId);
    if (resultadoCard) {
        resultadoCard.classList.remove("d-none");
    }
});

//Convertir libras a kg & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir (addEventListener) ->  kg - libras (1lb = 0,454kg / 1kg = 2,2lb)
document.getElementById('convertirPeso').addEventListener("click", function(event) {
    event.preventDefault();

    let selectedUnityW = document.getElementById('floatingSelect').value;
    let pesoConversor = parseFloat(document.getElementById('floatingInput').value);

    if (isNaN(pesoConversor) || pesoConversor <= 0) {
        alert("Por favor, introduce un número válido.");
        return;
    };

    if (selectedUnityW === "kg") {
        let convertirPesoBtn = pesoConversor * 2.2; // 1 kg = 2.2 lb
        alert(`${pesoConversor} kilos son ${convertirPesoBtn.toFixed(2)} libras`);
    } else if (selectedUnityW === "lb") {
        let convertirPesoBtn = pesoConversor * 0.454; // 1 lb = 0.454 kg
        alert(`${pesoConversor} libras son ${convertirPesoBtn.toFixed(2)} kilos`);
    } else {
        alert("Por favor, selecciona una unidad válida.");
    };
});

//Convertir pulgadas a cm & viceversa -> Introducir numero / Seleccionar unidad / Seleccionar unidad conversion / Submit convertir -> cm  - pulgadas (1 pie = 30,48cm / 1cm = 0,39 pulgadas -> 1 pie = 12 pulgadas)
document.getElementById('convertirAltura').addEventListener("click", function(event) {
    event.preventDefault();

    let selectedUnityH = document.getElementById('floatingSelectH').value;
    let alturaConversor = parseFloat(document.getElementById('floatingInputH').value);

    if (isNaN(alturaConversor) || alturaConversor <= 0) {
        alert("Por favor, introduce un número válido.");
        return;
    };

    if (selectedUnityH === "cm") {
        let convertirAlturaBtn = alturaConversor * 0.39; // 1 cm = 0.39 pulgadas
        alert(`${alturaConversor} centímetros son ${convertirAlturaBtn.toFixed(2)} pulgadas`);
    } else if (selectedUnityH === "pulgadas") {
        let convertirAlturaBtn = alturaConversor * (12 * 30.48); // 1 pie = 12 pulagas / 1 pie = 30.48cm / 1 pulgada = (12 * 30.48) cm
        alert(`${alturaConversor} pulgadas son ${convertirAlturaBtn.toFixed(2)} centímetros`);
    } else {
        alert("Por favor, selecciona una unidad válida.");
    };
});