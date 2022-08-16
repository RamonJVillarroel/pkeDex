import React from  'react';
import Iten from '../componentes/Iten'
const Item =({personaje})=>{
    return(
<>
<div>
    {personaje.map(personaje =>(<Iten key={personaje.id} personaje={personaje}/>))}
    </div></>
    )
        
        
    
}

export default Item