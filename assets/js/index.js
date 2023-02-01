
console.log("Entro index.js");

let mascota = {
    color: "Cafe",
    edad: 4,
    nombre: "Chocolata",
    peso: 8,
    raza: "Labrador",
    vacunas: ["Vacuna 1", "Vacuna 2"]
};

// console.log(mascota);
// console.log(mascota.nombre);
// let nombre = mascota.nombre
// let raza = mascota.raza
// accediendo a propiedades de un objeto con destructuracion
let { nombre, raza } = mascota;
// console.log(nombre);
// console.log(raza);
// console.log(mascota.raza)
// console.log(mascota.vacunas[0]);
// console.log(mascota.vacunas);


let colors = [
    {
        name: 'Red',
        code: '#ff0000',
    },
    {
        name: 'Green',
        code: '#00ff00'
    },
    {
        name: 'Blue',
        code: '#0000ff'
    },
    {
        name: 'Yellow',
        code: '#ffff00'
    },
    {
        name: 'Purple',
        code: '#800080'
    }
];
colors[1].spanish = "Verde"
// console.log(colors[1].spanish);
// console.log(colors);


function filtrarColor(arreglo, color) {
    // Quiero una funcion que reciba un arreglo(?) e imprima el arreglo filtrando o buscando(?) el color mandado(?)
    let arregloFiltrado = arreglo.find(item => {
        return item.name == color;
        // blue !== Blue
    });

    return arregloFiltrado;
}

// console.log(filtrarColor(colors, "Blue"), "colores filtrados");



let employeesWithSalary = [
    {
        name: "Jesus Cardenas",
        age: 32,
        position: "Manager",
        salary: 500
    },
    {
        name: "Manuel Martinez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Carlos Perez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Arturo Lopez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Juan Hernandez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Bob Johnson",
        age: 35,
        position: "Designer",
        salary: 300
    },
    {
        name: "Emily Davis",
        age: 29,
        position: "QA Engineer",
        salary: 300
    },
    {
        name: "William Brown",
        age: 31,
        position: "Product Manager",
        salary: 300
    }
];

// Funcion(normal) que reciba un arreglo y busque los empleados con la posicion "Developer".

// for each o .filter

// Funcion tradicional o  "NORMAL"
// function filtrarTrabajo(empleados) {
//     let arregloFiltrado2 = empleados.filter(empleado => {
//         return empleado.position == "Developer";
//     });
//     return arregloFiltrado2;
// }

// Funcion de flecha

let filtrarTrabajo = (empleados) => {
    let arregloFiltrado2 = empleados.filter(empleado => {
        return empleado.position == "Developer";
    });
    return arregloFiltrado2;
};

// como obtengo la suma del salario de TODOS los empleados!!!
// Pueden usar: reduce y con for each!!

// Filtrar las personas mayores de 27 años!!!

console.log(filtrarTrabajo(employeesWithSalary));



