import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export const useSignOut = () => {
  const [user, loading] = useAuthState(auth);

  const handleOnClick = () => {
    localStorage.removeItem("USER");
    auth.signOut();
  };

  return { user, loading, handleOnClick };
};
