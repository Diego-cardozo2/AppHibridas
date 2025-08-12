class Alumno {
    //atributos
 nombre = "";
 apellido = "" ;
 edad ;
 carrera = "";
 materias = [];

    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad= edad;
        this.carrera= carrera;
        this.materias= materias;
    }

    //metodos
obtenerCarrera( ){
    return this.carrera;
};
 obtenerDatos(){
    return `${this.nombre} ${this.apellido}`
 };
  modificarEdad(edad){
    this.edad = edad;
 };

agregarMateria(nombreMateria){
    this.materias.push(nombreMateria);
}

mostrarMaterias(){
    return this.materias;
    console.table(this.materias)
}

retornarEdad(){
    return this.edad;
}

}


module.exports = Alumno;

