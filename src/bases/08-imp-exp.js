// import { heroes } from './data/heroes'
import heroes,{owners } from '../data/heroes';

console.log(owners);

// const getHeroesById = (id) =>{
//     return heroes.find(( heroes ) => 
//         {
//             if (heroes.id === id ){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }
//     );
// }

export const getHeroesById = (id) => heroes.find(( heroe ) => heroe.id === id );


console.log(getHeroesById(2));

export const getHeroesByOwner = ( owner ) => heroes.filter(( heroe ) => heroe.owner === owner );

console.log(getHeroesByOwner('Marvel'));
