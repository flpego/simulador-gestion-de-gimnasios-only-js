

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
    new Socio("Esteban Sanchez", 40, 87, 1.78, true),
    new Socio("Ricado Perez", 30, 76, 1.82, false),
    new Socio("Juan Perez", 27, 80, 1.79, true),
];


// funcion  para evitar repetir codigo al preguntar datos
const preguntarDatos = () => {

    let datos = [];

    nombre = prompt("Ingrese el nombre");
    edad = parseInt(prompt("Ingrese edad"));
    peso = parseInt(prompt("Ingrese peso en Kilogramos"));
    altura = parseFloat(prompt("Ingrese altura en metros"));
    cuota = parseFloat(confirm("El cliente abona cuota?"));
 
    datos.push(nombre, edad, altura, peso, cuota);

    //otra forma seria desestructurar el obj y return {nombre, edad, peso, altura}
    return datos; //retorna un array 
}

// funcion para mostrar los socios por consola
const mostrarSocios = () => {
    console.log(socios);
};


//funcion para agregar
const agregarSocio = () => {
    //otra forma de hacerlo seria:
    // funcion preguntarDatos() devuelve un objeto const { nombre, edad, altura, peso } = preguntarDatos();
    preguntarDatos();
    socios.push(new Socio(nombre, edad, peso, altura, cuota));
    console.log(socios);
};

//funcion para editar datos
const editarDatos = (nombreEncontrado) => {
    const nuevosDatos = preguntarDatos(); // almacena los datos devueltos por la func y se amlmacena en una variable
    nombreEncontrado.nombre = nuevosDatos[0];
    nombreEncontrado.edad = nuevosDatos[1];
    nombreEncontrado.peso = nuevosDatos[2];
    nombreEncontrado.altura = nuevosDatos[3];
    alert("datos editados correctamente");
    console.log(nombreEncontrado);
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



//funcion para buscar
const buscarSocio = () => {
    const nombreBuscado = prompt("Ingresa el nombre del socio que buscas");

    const nombreEncontrado = socios.find(socio => socio.nombre === nombreBuscado);
    console.log(nombreEncontrado)
    if (nombreEncontrado) {
        const opcion = prompt(`Que desea hacer: 
        1 - Abonar Cuota
        2 - Modificar Datos de Socio  
        3 - Eliminar Socio de la base
        `);

        switch (opcion) {
            case "1":
                abonarCuota(nombreEncontrado);
                break;
            case "2":
                editarDatos(nombreEncontrado);

                break;
            case "3":
                eliminarSocio(nombreEncontrado);
                console.log(socios)
                break;
            default:
                console.log("entrada no valida")
                break;
        }
    } else {
        console.log("Socio no encontrado")
    }
}

const menu = () => {
    const inicioPrompt = prompt(`Bienvenido, seleccione una accion:
            1 - Mostrar Socios
            2 - Agregar Nuevo Socio
            3 - Buscar Socio
            4 - Modificar Datos`);
    switch (inicioPrompt) {
        case "1":
            mostrarSocios();
            break;
        case "2":
            agregarSocio();
            break;
        case "3":
            buscarSocio();
            break;
        case "4":
            console.log("opcion 4")
            break;
        default:
            console.log("opcion no encontrada");
            break;
    };
};


document.querySelector("#btn-menu").addEventListener("click", menu);

