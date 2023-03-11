import styled from "styled-components";
import logo from "../../img/logo.png";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLogo = styled.p`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const IconLogo = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  margin: 0 5px 0 0;
  width: 16px;
  height: 16px;
  background-image: url(${logo});
  @media ${(p) => p.theme.media.tablet} {
    margin: 0 10px 0 0;
    width: 24px;
    height: 24px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 32px;
    height: 32px;
  }
`;
