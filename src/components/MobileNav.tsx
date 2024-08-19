import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavUserMenu from "./MobileNavUserMenu";

const MobileNav = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-yellow-500" />
      </SheetTrigger>
      <SheetContent className=" space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className=" flex items-center gap-2 font-bold hover:text-yellow-600">
              <CircleUserRound />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to MunchMate</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className=" flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavUserMenu />
          ) : (
            <Button onClick={async()=> await loginWithRedirect() } className=" flex-1 font-bold bg-yellow-500">Login</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
