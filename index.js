"use strict";
function esPar(a) {
    let isPar = a % 2 === 0;
    return isPar;
}
console.log(esPar(3));
console.log(esPar(4));
console.log(esPar(6));
console.log(esPar(7));
let num = 0;
if (num > 0) {
    console.log('es positivo');
}
else if (num < 0) {
    console.log('es negativo');
}
else {
    console.log('es cero');
}
;
switch (true) {
    case num < 0:
        console.log('es negativo');
        break;
    case num > 0:
        console.log('es positivo');
        break;
    case num === 0:
        console.log('es cero');
        break;
    default:
        break;
}
let coleccion = ['pepe sierra', "arturo benitez", "jeison aguirre", "angela aguilar"];
const recorrido = (coleccion) => {
    coleccion.forEach((element) => {
        console.log(element);
    });
    coleccion.map((element) => {
        console.log(element);
    });
};
recorrido(coleccion);
let initialValue = 0;
const numArray = [1, 5, 3, 4, 8, 6, 7];
const total = numArray.reduce((firstValue, currentValue) => {
    console.log(firstValue, currentValue);
    return firstValue += currentValue;
}, initialValue);
console.log(total);
const concatenando = (arr) => {
    let totalString = '';
    totalString = arr.join('');
    console.log(totalString);
    return totalString;
};
concatenando(['h', 'o', 'l', 'a', ' ', 'p', 'e', 'p', 'a', ' ', 'p', 'i', 'g']);
const arrayUsers = [
    {
        id: 1234,
        name: 'pacho'
    },
    {
        id: 4736,
        name: 'pablo'
    },
    {
        id: 3425,
        name: 'pedro'
    },
    {
        id: 5432,
        name: 'pipe'
    },
    {
        id: 7584,
        name: 'publio'
    }
];
arrayUsers.forEach((e) => console.log(e.name));
function maxValue(array) {
    let number = 0;
    array.forEach((e) => {
        if (e > number) {
            number = e;
        }
    });
    return number;
}
console.log(maxValue([1, 5, 8, 77, 4, 6, 45, 8, 14, 57]));
;
let miCarro = {
    brand: 'toyota',
    model: 'supra',
    year: 2024
};
console.log(miCarro);
class utils {
    constructor() { }
    static totalstring(argument) {
        let totalStr = "";
        for (const key in argument) {
            totalStr += argument[key] + " ";
        }
        return totalStr;
    }
    static stringCompleto(argument) {
        const arrayValues = Object.values(argument);
        return arrayValues.join(' ');
    }
}
console.log(utils.stringCompleto(miCarro), 'es acá');
console.log(utils.totalstring(miCarro));
function newObject(obj) {
    let newObj = Object.assign(Object.assign({}, obj), { year: obj.year + 1 });
    return newObj;
}
console.log(newObject(miCarro));
const tres = (a, b, c) => {
    try {
        if (typeof c === typeof a && typeof c === typeof b) {
            return 'nice, all three of them are the same type';
        }
        throw new Error('la concha se rompió');
    }
    catch (error) {
        console.log(error);
    }
};
tres(1, 2, 'hola');
const giroDeLaMatriz = (arg) => {
    let matriz = [[], []];
    for (let i = 0; i < arg.length; i++) {
        for (let j = 0; j < arg.length; j++) {
            matriz[i][j] = arg[arg.length - 1 - j][i];
        }
    }
    return matriz;
};
let matriz = [
    [1, 2],
    [8, 3]
];
console.log(giroDeLaMatriz(matriz));
;
