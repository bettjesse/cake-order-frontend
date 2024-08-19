
import { DropdownMenu,DropdownMenuTrigger } from "./ui/dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenuContent} from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
const UserMenu = () => {
    const {user, logout} = useAuth0()
  return (
  <DropdownMenu >
    <DropdownMenuTrigger className=" flex px-3 items-center hover:text-orange-500 gap-2 font-bold">
      <CircleUserRound/>
      {user?.name}
    </DropdownMenuTrigger>
    <DropdownMenuContent className=" flex flex-col bg-gray-100 p-4 rounded-md gap-3">
       
        <Link to = "/user-profile" className=" font-bold hover:text-yellow-500">
    Account 
</Link>

      <Button onClick={()=> logout()} className=" font-bold bg-yellow-500">Log out</Button>
       
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserMenu