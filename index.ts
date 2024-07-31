type Producto = {
    id: number;
    name: string;
    price: number;
};

function esPar(a: number): boolean {
    let isPar: boolean = a % 2 === 0;
    return isPar
}

console.log(esPar(3));
console.log(esPar(4));
console.log(esPar(6));
console.log(esPar(7));

let num: number = 0

if (num > 0) {
    console.log('es positivo');
} else if (num < 0) {
    console.log('es negativo');
} else {
    console.log('es cero');
};


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

let coleccion: string[] = ['pepe sierra', "arturo benitez", "jeison aguirre", "angela aguilar"]

const recorrido = (coleccion: string[]) => {
    coleccion.forEach((element: string) => {
        console.log(element)
    })

    coleccion.map((element: string) => {
        console.log(element)
    })
}
recorrido(coleccion)

let initialValue: number = 0;
const numArray: number[] = [1, 5, 3, 4, 8, 6, 7]
const total: number = numArray.reduce((firstValue: number, currentValue: number) => {
    console.log(firstValue, currentValue);

    return firstValue += currentValue
}, initialValue)
console.log(total);

const concatenando = (arr: string[]): string => {
    let totalString: string = '';
    totalString = arr.join('');
    console.log(totalString);
    return totalString
}

concatenando(['h', 'o', 'l', 'a', ' ', 'p', 'e', 'p', 'a', ' ', 'p', 'i', 'g']);

type User = {
    id: number;
    name: string;
};

const arrayUsers: User[] = [
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
]

arrayUsers.forEach((e) => console.log(e.name));

function maxValue(array: number[]): number {
    let number: number = 0;
    array.forEach((e) => {
        if (e > number) {
            number = e
        }
    })
    return number
}

console.log(maxValue([1, 5, 8, 77, 4, 6, 45, 8, 14, 57]));


interface Car {
    brand: string;
    model: string;
    year: number;

    // [key:string]: string | number ;
};

let miCarro: Car = {
    brand: 'toyota',
    model: 'supra',
    year: 2024
}

console.log(miCarro);

class utils {
    constructor() { }

    static totalstring(argument: Car ): string {
        let totalStr:string = ""
        for (const key in argument) {
            totalStr += argument[key as keyof typeof argument] + " "
        }
        return totalStr
    }

    static stringCompleto(argument: Car):string {
        const arrayValues = Object.values(argument)
        return arrayValues.join(' ')
    }
}

console.log(utils.stringCompleto(miCarro), 'es acá')
;
console.log(utils.totalstring(miCarro));


function newObject(obj:Car) {
    let newObj:Car = {
        ...obj,
        year: obj.year + 1
    }
    return newObj
}

console.log(newObject(miCarro));


const tres = (a:number, b: number, c:any)=> {
    try {
        if(typeof c === typeof a && typeof c === typeof b) {
            return 'nice, all three of them are the same type'
        }
        throw new Error('la concha se rompió')
    } catch (error) {
        console.log(error);

    }

}

tres(1,2,'hola')

const giroDeLaMatriz = (arg: number[][]): number[][] => {
    let matriz: number[][]= [[],[]]
    for(let i = 0; i < arg.length; i++) {
        for(let j=0; j < arg.length; j++){
            matriz[i][j] = arg[arg.length - 1 - j][i]
        }
    }
    return matriz;
}

let matriz: number[][] =
[
    [1,2],
    [8,3]
]

giroDeLaMatriz(matriz)
