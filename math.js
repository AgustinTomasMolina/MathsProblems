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

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo 
});

console.groupEnd('Triangulo');