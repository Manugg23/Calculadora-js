function sumar(){
    const forma = document.getElementById("forma");
    let num1 = forma[numero1];
    let num2 = forma[numero2];
    let resultado = parseInt(numero1.value) + parseInt(numero2.value);

    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros.";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma = document.getElementById("forma");
    let num1 = forma[numero1];
    let num2 = forma[numero2];
    let resultado = parseInt(numero1.value) - parseInt(numero2.value);

    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros.";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById("forma");
    let num1 = forma[numero1];
    let num2 = forma[numero2];
    let resultado = parseInt(numero1.value) * parseInt(numero2.value);

    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros.";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}


function dividir(){
    const forma = document.getElementById("forma");
    let num1 = forma[numero1];
    let num2 = forma[numero2];
    let resultado = parseInt(numero1.value) / parseInt(numero2.value);

    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros.";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}