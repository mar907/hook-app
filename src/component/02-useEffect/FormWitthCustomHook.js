import React, { useState} from 'react';
import './Effects.css';


export const FormWithCustomHook = () => {

    const [formState, setformState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const  { name, email, password } = formState;

const handleImputChange = ({ target })=>{
    setformState({
        ...formState,
        [ target.name ]: target.value
    });
}


    return (
       
        <>
        <h1>FormWithCustomHook</h1>
        <hr />
        
       <div className= "form-group">
           <input 
           type ='text'
           name= 'name'
           className= 'form-control'
           placeholder= 'Tu nombre'
           autoComplete= 'off'
           value= { name }
           onChange= { handleImputChange }

           />
       </div>  
       <div className= "form-group">
           <input 
           type ='text'
           name= 'email'
           className= 'form-control'
           placeholder= 'email@gmail.com'
           autoComplete= 'off'
           value= { email  }
           onChange= { handleImputChange }

           />
       </div>  
       <div className= "form-group">
           <input 
           type ='password'
           name= 'password'
           className= 'form-control'
           placeholder= '*****'
           value= { password }
           onChange= { handleImputChange }

           />
       </div>  
       
       </> 
    )
}
