import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import {
  SignInWrapper,
  SignInTitle,
  SignInSubTitle,
  ListBtn,
  Btn,
  GoogleIcon,
  FacebookIcon,
} from "./SignIn.styled";

const SignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const userId = result.user.uid;

      localStorage.setItem("USER", userId);
    } catch (error) {
      console.log(error);
    }
  };

  const fbProvider = new FacebookAuthProvider();
  const FaceBookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);

      const userId = result.user.uid;

      localStorage.setItem("USER", userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignInWrapper>
        <SignInTitle>Join Today</SignInTitle>
        <SignInSubTitle>Sing in with one of the providers</SignInSubTitle>
        <ListBtn>
          <Btn onClick={GoogleLogin}>
            <GoogleIcon />
            Sign in with Google
          </Btn>
          <Btn onClick={FaceBookLogin}>
            <FacebookIcon />
            Sign in with Facebook
          </Btn>
        </ListBtn>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
