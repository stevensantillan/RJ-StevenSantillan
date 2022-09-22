import { useState } from 'react'

export const UseForm = (init) => {
  
    const [values, setValues] = useState(init)

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    return ({
        values,
        handleImputChange
    })
}
