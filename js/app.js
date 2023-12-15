
class Socio {

    //static contadorId = 1;

    constructor(nombre, edad, peso, altura, cuotaAlDia) {
        this.id = this.calcularId();
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularImc();
        this.cuotaAlDia = cuotaAlDia;
    };

    calcularImc() {
        const imc = this.peso / (this.altura ** 2);
        return imc;
    };

    calcularId() {
        const id = contadorId++;
        return id;
    };


};
// variable contador usada para generar Id
let contadorId = 0;

// array con objeto socio instanciado
const socios = [
    new Socio("Franco Armani", 37, 87, 1.88, true),
    new Socio("Emiliano Martinez", 31, 87, 1.96, false),
    new Socio("Pipa Benedeto", 33, 75, 1.75, false),
    new Socio("Lionel Messi", 36, 72, 1.7, true),
];

// funcion  para evitar repetir codigo al preguntar datos
const preguntarDatos = () => {

    let datos = [];

    nombre = prompt("Ingrese el nombre");
    edad = parseInt(prompt("Ingrese edad"));
    peso = parseInt(prompt("Ingrese peso en Kilogramos"));
    altura = parseFloat(prompt("Ingrese altura en metros"));

    if (nombre.length === 0) {
        alert("escribe un nombre valido");
        nombre = prompt("Ingrese el nombre");
    }

    datos.push(nombre, edad, peso, altura);

    //otra forma seria desestructurar el obj y return {nombre, edad, peso, altura}
    return datos; //retorna un array 
};

// funcion para mostrar los socios por consola
const mostrarSocios = () => {
    const sociosNombre = socios.forEach(socio => console.log(`
    Nombre: ${socio.nombre}
    Cuota al Dia: ${socio.cuotaAlDia}
    `));
    return sociosNombre;
};

//funcion para agregar
const agregarSocio = () => {
    //otra forma de hacerlo seria:
    // funcion preguntarDatos() devuelve un objeto const { nombre, edad, altura, peso } = preguntarDatos();
    preguntarDatos();
    cuota = confirm("El cliente abona cuota?");
    socios.push(new Socio(nombre, edad, peso, altura, cuota));
    return socios;
};

//funcion para editar datos
const editarDatos = (nombreEncontrado) => {
    const nuevosDatos = preguntarDatos(); // almacena los datos devueltos por la func y se amlmacena en una variable
    nombreEncontrado.nombre = nuevosDatos[0];
    nombreEncontrado.edad = nuevosDatos[1];
    nombreEncontrado.peso = nuevosDatos[2];
    nombreEncontrado.altura = nuevosDatos[3];
    alert("datos editados correctamente");
    return nombreEncontrado;
}
//funcion para eliminar
const eliminarSocio = (nombreEncontrado) => {
    //buscamos el indice donde se encuentra el socio
    let indexSocio = socios.indexOf(nombreEncontrado)

    if (indexSocio !== -1) {
        //usamos splice para indicar que eliminar
        socios.splice(indexSocio, 1)
        alert(`Socio ${nombreEncontrado.nombre} Eliminado Correctamente`)
    }
    return socios;
};
// funcion para abonar ciota
const abonarCuota = (nombreEncontrado) => {
    const socioPaga = confirm("El cliente abona la cuota?");
    if (socioPaga) {
        nombreEncontrado.cuotaAlDia = socioPaga;
        return nombreEncontrado;
    }
    return "se cancelo el pago";
}

//funcion para buscar
const buscarSocio = () => {
    const nombreBuscado = prompt("Ingresa el nombre del socio que buscas");

    const nombreEncontrado = socios.find(socio => socio.nombre === nombreBuscado);
    console.log(nombreEncontrado);
    if (nombreEncontrado) {
        const opcion = prompt(`
        Socio: ${nombreEncontrado.nombre} encontrado!
        Que desea hacer: 
        1 - Abonar Cuota
        2 - Modificar Datos de Socio  
        3 - Eliminar Socio de la base
        `);

        switch (opcion) {
            case "1":
                console.log(abonarCuota(nombreEncontrado));
                break;
            case "2":
                console.log(editarDatos(nombreEncontrado));
                break;
            case "3":
                eliminarSocio(nombreEncontrado);
                console.log(socios);
                break;
            default:
                console.log("entrada no valida");
                break;
        }
    } else {
        alert(`Socio: ${nombreBuscado} no encontrado`);
        console.log("Socio no encontrado");
    }
}

const menu = () => {
    const inicioPrompt = prompt(`Bienvenido, seleccione una accion:
            1 - Mostrar Socios
            2 - Agregar Nuevo Socio
            3 - Buscar Socio
            4 - Salir
            `);
    switch (inicioPrompt) {
        case "1":
            mostrarSocios();
            break;
        case "2":
            console.log(agregarSocio());
            break;
        case "3":
            buscarSocio();
            break;
        case "4":
            return;
        default:
            console.log("opcion no encontrada");
            break;
    };
};

menu();
document.querySelector("#btn-menu").addEventListener("click", menu);