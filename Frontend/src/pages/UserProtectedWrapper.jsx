import React,{useContext,useEffect,useState} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({
 children
}) => {
    const navigate =  useNavigate()
    const {user, setUser} = useContext(UserDataContext)
     const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
           
    }
},[navigate]);

axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

}).then(response => {

    if(response.status === 200){
        setUser(response.data.user)
        setIsLoading(false)
    }
})

.catch(error => {
    console.log(error)
    localStorage.removeItem('token')
    navigate('/login')
})

if (isLoading) {
    return (
    <div>Loading...</div>
    )
    
}

    

    return (
        <>
        {children}
        </>
    )
}

export default UserProtectedWrapper
