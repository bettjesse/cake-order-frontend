
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MobileNavUserMenu = () => {
    const {logout} = useAuth0()
  return (
    <>
    <Link to = "/user-profile" className=' flex itesm-center hover:text-orange-500'>
        Account
    </Link>
    <Link to = "/manage-store" className=' flex itesm-center hover:text-orange-500'>
        Manage store
    </Link>
    <Button onClick={()=> logout()} className=' hover:bg-gray-500 font-bold px-4 items-center'>
    Log out
    </Button>
    
    </>
  )
}

export default MobileNavUserMenu