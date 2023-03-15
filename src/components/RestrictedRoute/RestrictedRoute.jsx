import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/dashboard",
}) => {
  const [user] = useAuthState(auth);

  return user ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
