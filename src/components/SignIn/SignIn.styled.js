import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export const SignInWrapper = styled.div`
  padding: 20px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: ${(p) => p.theme.boxShadow.shadowPrimary};
  @media ${(p) => p.theme.media.tablet} {
    padding: 30px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 40px;
  }
`;

export const SignInTitle = styled.h2`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;

export const SignInSubTitle = styled.h3`
  margin: 10px 0;
  color: ${(p) => p.theme.colors.black};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};

  @media ${(p) => p.theme.media.tablet} {
    margin: 20px 0;
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin: 20px 0;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const ListBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;

  @media ${(p) => p.theme.media.tablet} {
    gap: 8px;
  }
  @media ${(p) => p.theme.media.desktop} {
    gap: 10px;
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 50px;
  color: ${(p) => p.theme.colors.black};
  font-family: ${(p) => p.theme.fonts.goBack};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: ${(p) => p.theme.lineHeights.goBack};
  background-color: ${(p) => p.theme.colors.primary};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.large};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
    transform: scale(1.1);
  }
  @media ${(p) => p.theme.media.tablet} {
    height: 60px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
  @media ${(p) => p.theme.media.desktop} {
    height: 70px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;

export const GoogleIcon = styled(FcGoogle)`
  margin: 0 5px 0 0;
`;
export const FacebookIcon = styled(AiFillFacebook)`
  margin: 0 5px 0 0;
  color: ${(p) => p.theme.colors.facebook}; ;
`;
