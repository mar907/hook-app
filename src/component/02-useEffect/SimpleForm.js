import React, {useEffect, useState} from 'react';
import './Effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const  {name, email} = formState;

    useEffect(() => {
           
        }, []);

    useEffect (()=> {
    }, [formState] ) ;
    
    useEffect (()=>{

    }, [email])

const handleImputChange = ({ target })=>{
    setformState({
        ...formState,
        [ target.name ]: target.value
    });
}


    return (
       
        <>
        <h1>useEffect</h1>
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
       { (name == '123') && <Message/> }
       </> 
    )
}
