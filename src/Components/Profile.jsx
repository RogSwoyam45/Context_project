import React, { useContext } from 'react'
import User from '../context/UserContext'


function Profile() {
    const {user} = useContext(User)

    if (!user) return <div>Please login</div>

    return(    <div> Welcome {user.username} 
        {console.log(user)}
    </div>) 

}


export default Profile
