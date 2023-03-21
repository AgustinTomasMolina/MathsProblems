console.group("Triangulo Escaleno");

// Generar una funcion, para que el queryselector, no tome
// el unico valor que es vacio(si no esta dentro de una funcion), ya que lo toma del input.
// Al ponerlo en la funcion, al dispararse el evento click,se genera con el ultimo valor puesto en el input.
const buttonMacht = document.querySelector("#macht");

buttonMacht.addEventListener("click", () => capturaImputs());

const capturaImputs = () => {
    const inputNumber1 = document.querySelector("#iput-number1").value;
    const inputNumber2 = document.querySelector("#iput-number2").value;
    const inputNumber3 = document.querySelector("#iput-number3").value;
    return trianguloEscaleno(inputNumber1, inputNumber2, inputNumber3);
}

function trianguloEscaleno(lado1, lado2, lado3) {
    console.log(lado1, lado2, lado3)
    let a = lado1;      // declaramos variables de los lados.
    let b = lado2;
    let c = lado3;

    if (a == b || b == c || c == a) {
        return console.log("lados iguales")           // se genera la validacion
    }
    // ESTE CALCULO ES PARA SACAR EL AREA
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));


    let altura_a = Math.floor(2 * area / a);
    let altura_b = Math.floor(2 * area / b);
    let altura_c = Math.floor(2 * area / c);

    return console.log(altura_a)
}

console.groupEnd("Triangulo escaleno")

console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularCuadrado(lado) {   // Perimetro es solo lado, ya que esta conformado por 4 lados.
    return {
        perimetro: lado * 4,            // RETORNA EL PERIMETRO Y EL AREA DEL CUADRADO HACIENDO EL CALCULO ESCRITO.
        area: lado * lado,
    };
}

console.groupEnd('Cuadrado');

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;  // Primero se ejecuta lo que esta entre parentesis y luego lo demas.


function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,                  // base por altura divido 2.
    };
}


// TEOREMA DE PITAGORAS

// El cuadrado de la hipotenusa es igual a la suma de los catetos.

// Si tenemos un triangulo y queremos calcular la altura, es como que partieramos al triangulo a la mitad y sacaramos dos triangulos
// chiquito, y esos triangulos tienen el tamaño de la altura. Uno de estos triangulos ponerlos boca abajo, osea que uno de los lados
// quede como base, y la base/2. Se genera una posicion de 90 grados entre la altura del triangulo y la base/2. El lado que termina siendo
// la base, es la hipotenusa.

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn("Este no es un triangulo isoceles");
    } else {

        // h = raizcuadrada(lado1**2 - (b**2)/4)

        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4);  //sqrt RAIZ CUADRADA
    }
}

function calcularAlturaEscaleno(area, altura, base) {
    if (area != altura != base) {
        console.warn("No es un triangulo Escaleno");
    } else {
        return Math.sqrt(area = (base * altura) / 2);
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd('Triangulo');

console.group('Cricle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);  // Es un objeto donde se puede aplicar muchas operaciones matematica

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}

console.groupEnd('Circle');
