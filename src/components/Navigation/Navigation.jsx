import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import UserInfo from "../UserInfo";
import { Link } from "./Navigation.styled";

const Navigation = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      {!user && <Link to={"/auth"}>Join now</Link>}
      {user && (
        <>
          <Link to={"/dashboard"}>Hooray</Link>
          <UserInfo user={user} />
        </>
      )}
    </nav>
  );
};

export default Navigation;
