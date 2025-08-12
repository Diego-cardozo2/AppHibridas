const { title } = require('process');
const Alumno =require('./Alumno.js');


let nombre = "Jonathan";

const Alumno1 = new Alumno ("Carlos", "Ruiz", 27, "DW" , ["apps Hibridas", "proyecto final"]);



 Alumno1.mostrarMaterias();
 Alumno1.agregarMateria("historia");
Alumno1.modificarEdad(55)


console.log(Alumno1.edad);