import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const PrivateRoute = ({ component: Component, redirectTo = "/auth" }) => {
  const [user] = useAuthState(auth);
  const userLocal = localStorage.getItem("USER");

  return !userLocal ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
