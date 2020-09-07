

//Funciones en JS
// const saludar = function(nombre) {
//     return `Hola ${ nombre }`;
// } 

const saludar2 = ( nombre )=>{
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre )=> `Hola ${ nombre }`;
const saludar4 = ()=> `Hola Mundo`;

// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () =>(
    {
        uid:'ABCD123',
        username:'El?papi1502'
    }
)

const user = getUser();

console.log(user);

//Tarea
//1.- Transformen a una function de flecha
//2.- Tiene que retornar un objeto implicito
//3.- Pruebas

function getUserActivo(nombre){
    return {
        uid:'ABC567',
        username:nombre
    }
};
const getUserActivo2 = (nombre) => ({
    uid:'ABC567',
    username:nombre
});

const usuarioActivo = getUserActivo('Mauricio');
const usuarioActivo2 = getUserActivo2('Cartagena');

console.log(usuarioActivo);
console.log(usuarioActivo2);
