import { createContext, useContext, useState } from "react";


export const LoginContext = createContext()

const users = [
    {
        user: "usuario1",
        pass: "hola123"
    },
    {
        user: "usuario2",
        pass: "hola128"
    },
    {
        user: "usuario3",
        pass: "hola126"
    },
    {
        user: "usuario4",
        pass: "hola125"
    },
    {
        user: "admin",
        pass: "admin12"
    }
]

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        user: "",
        logged: false,
        error: ""
    })


const login = (values) => { 
    const match = users.find(users => users.user === values.user)
    if (match) {
        if (match.pass === values.pass){
            setUser({
                user: match.user,
                logged: true,
                error: ""
            })
        } else {
            setUser({
                user: "",
                logged: false,
                error: "Contraseña incorrecta"
            })
        }
    } else {
        setUser({
            user: "",
            logged: false,
            error: "El usuario no existe"
        })
    }
}

const logout = () => {
    setUser({
        user: "",
        logged: false,
        error: ""
    })
}

return (
    <LoginContext.Provider value={{user, login, logout}}>
        {children}
    </LoginContext.Provider>
    )
}

export const UseLoginContext = () => {
    return useContext(LoginContext)
}


