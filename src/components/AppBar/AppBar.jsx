import Logo from "../Logo";
import Navigation from "../Navigation";
import { AppBarWrapper } from "./AppBar.styled";

const AppBar = () => {
  return (
    <>
      <AppBarWrapper>
        <Logo />
        <Navigation />
      </AppBarWrapper>
    </>
  );
};

export default AppBar;
