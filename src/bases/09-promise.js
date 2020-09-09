import { getHeroesById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve,reject) => {

//     setTimeout(() => {
      
//         const heroe = getHeroesById(2);
//         resolve( heroe );
//         // reject('Nose pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( ( heroe )=>{
//     console.log('heroe',heroe)
// }).catch((err)=>{
//     console.warn(err);
// });

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve,reject) => {

        setTimeout(() => {
          
            const heroe = getHeroesById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('Nose pudo encontrar el heroe');
            }
        }, 2000);
    });
}
getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);