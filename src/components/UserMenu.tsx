
import { DropdownMenu,DropdownMenuTrigger } from "./ui/dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenuContent, DropdownMenuItem} from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
const UserMenu = () => {
    const {user, logout} = useAuth0()
  return (
  <DropdownMenu >
    <DropdownMenuTrigger className=" flex px-3 items-center hover:text-[#5c8eb5] gap-2 font-bold">
      <CircleUserRound/>
      {user?.name}
    </DropdownMenuTrigger>
    <DropdownMenuContent className=" flex flex-col bg-gray-100 p-4 rounded-md gap-3">
       <DropdownMenuItem>
        <Link to = "/manage-store" className=" font-bold hover:text-[#5c8eb5]">
    Manage Store
</Link>
<Separator/>
</DropdownMenuItem>
       <DropdownMenuItem>
        <Link to = "/user-profile" className=" font-bold hover:text-[#5c8eb5]">
    User profile 
</Link>
<Separator/>
</DropdownMenuItem>
      <Button onClick={()=> logout()} className=" font-bold bg-[#5c8eb5]">Log out</Button>
       
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserMenu