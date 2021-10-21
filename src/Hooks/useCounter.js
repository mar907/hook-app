import { useState} from 'react';

export const useCounter = (inicialState = 100) => {
    
       const [state, setState]= useState ();

       const reset = ()=>{
           setState (inicialState);
       }

       const increment =(factor = 1) =>{
           setState (state + factor);
       }
       const decrement =(factor = 1) =>{
        setState (state - factor);
    }
    return {
        state,
        increment,
        decrement,
        reset

    };
    
}
