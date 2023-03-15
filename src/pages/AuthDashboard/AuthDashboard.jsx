import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import Loader from "../../components/Loader";
import {
  AuthDashboardContainer,
  AuthDashboardTitle,
  InfoWrapper,
  Title,
  TitleName,
  Text,
  Link,
  Btn,
  BtnIcon,
} from "./AuthDashboard.styled";

const AuthDashboard = () => {
  const [user, loading] = useAuthState(auth);

  const handleOnClick = () => {
    localStorage.removeItem("USER");
    auth.signOut();
  };

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <AuthDashboardContainer>
          <Btn onClick={handleOnClick}>
            <BtnIcon />
            SingOut
          </Btn>
          <AuthDashboardTitle>
            Welcome to your dashboard: <br />
            <TitleName>{user.displayName}</TitleName>
          </AuthDashboardTitle>
          <InfoWrapper>
            <div>
              <Title>Hooray, you are authorized</Title>
              <Text>Cucumber Rick gives you a reward:</Text>
              <Link href="https://youtu.be/3HIQx1eL6tU">Your reward</Link>
            </div>
            <div>
              <Title>Update your web development today</Title>
              <Text>Learn web development using the latest tech</Text>
              <Link href="https://youtu.be/zkz2HuNR_gk">My reward</Link>
            </div>
          </InfoWrapper>
        </AuthDashboardContainer>
      )}
    </main>
  );
};

export default AuthDashboard;
