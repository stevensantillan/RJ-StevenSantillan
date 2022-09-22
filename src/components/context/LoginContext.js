import { createContext, useContext, useState, useEffect } from "react";

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

const init = JSON.parse(localStorage.getItem("inicio")) || {
    user: "",
    logged: false,
    error: ""
} 

    export const LoginProvider = ({children}) => {
        const [user, setUser] = useState(init)


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

    useEffect(() => {
        localStorage.setItem("inicio", JSON.stringify(user))
    }, [user])


return (
    <LoginContext.Provider value={{user, login, logout}}>
        {children}
    </LoginContext.Provider>
    )
}

export const UseLoginContext = () => {
    return useContext(LoginContext)
}


