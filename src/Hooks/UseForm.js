import { useState } from "react"

export const UseForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const HandleImputChange = ({ target })=>{
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, HandleImputChange]
}
