import UserMenu from "./UserMenu";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex space-x-2 items-center p-2">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="ghost"
          className=" font-bold hover:text-white hover:bg-yellow-500"
          onClick={async () => await loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default MainNav;
