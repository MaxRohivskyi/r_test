import { LogoWrapper, TextLogo, IconLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <IconLogo />
        <TextLogo>Rick & Morty</TextLogo>
      </LogoWrapper>
    </>
  );
};

export default Logo;
