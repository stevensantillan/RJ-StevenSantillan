import {createContext, useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/config'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {

const [user, setUser] = useState({})
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
      const unsuscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
      })
    
      return () => {
        unsuscribe()
      }
    }, [])
    

    return (
        <UserContext.Provider value={ {createUser, signIn, user, logout} }>
            {children}
        </UserContext.Provider>
  )
}

export const UserAuth = () => {
    return useContext(UserContext)
}