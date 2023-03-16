import { useSignIn } from "../../hooks/useSignIn";
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
  const { GoogleLogin, FaceBookLogin } = useSignIn();

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
