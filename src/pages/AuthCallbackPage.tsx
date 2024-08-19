import { useAuth0 } from "@auth0/auth0-react"

import { useEffect, useRef } from "react"
import { useNavigate} from "react-router-dom"
import { useCreateMyUser } from "@/api/MyuserApi"


const AuthCallbackPage = () => {
    const navigate= useNavigate()
    const {user}= useAuth0()
    const {createUser} = useCreateMyUser()
  

// seting  has created user to false initially 
    const hasCreatedUser = useRef(false)
   
    useEffect(()=> {
        if(user?.sub && user?.email && !hasCreatedUser.current) {
            const auth0Id = user.sub || ""
            
        createUser({auth0Id, email: user.email })
            hasCreatedUser.current= true
           }
           navigate("/")

    },[createUser, navigate, user])

  return (
    <>Loading...</>
  )
}

export default AuthCallbackPage

