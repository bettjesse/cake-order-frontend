import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Header = ()=> {
    return (
        <div className=" border-b-2 border-b-yellow-500">
            <div className="container flex mx-auto justify-between py-6">
                <Link to = "/" className="text-3xl  font-bold tracking-tight text-yellow-500">
                MunchMate
                </Link>
                <div className="md:hidden">
                    <MobileNav/>

                </div>
                <div className="hidden md:block">
                    <MainNav/>

                </div>

            </div>

        </div>
    )
}
export default Header