import React from "react"
import User from "./UserContext"
import { useState } from "react"

const UserContextProvider = ({ children }) => {
    const [user, setUser]= useState([])
    return(
        <User.Provider value={{user,setUser}}>
        {children}
        </User.Provider>
    )
}

export default UserContextProvider