import Input from '@mui/material/Input';
import React, {useState, useEffect} from 'react';
import Item from '../componentes/Item'
const ItemList=()=>{
   const[personajes, setPersonajes] = useState([])

  const personajesApi = async ()=>{
    try{
      const psa =  `https://pokeapi.co/api/v2/pokemon-species/132/`/* arreglar esto */
      const psa1 = await fetch(psa);
      const data = await psa1.json();
      setPersonajes(data)
     console.log(data)
    }
    catch{
      console.log("algo esta mal")
    }
  
  }
  useEffect(()=>{
    personajesApi();
  },([]));
    
  
 
    return(
      <>
      <Input/>
<Item personaje={personajes}/>
      </>
      
      
    )
}
export default ItemList