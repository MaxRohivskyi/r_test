import styled from "styled-components";
import { GoSignOut } from "react-icons/go";

export const AuthDashboardContainer = styled.main`
  padding: 0 24px;
  margin: 0 auto 20px;
  @media ${(p) => p.theme.media.tablet} {
    max-width: 767px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding: 120px 24px 188px;
    max-width: 1068px;
  }
`;

export const AuthDashboardTitle = styled.h1`
  margin: 40px auto;
  color: ${(p) => p.theme.colors.black};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }

  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;

export const InfoWrapper = styled.ul`
  margin: 0 auto 20px;
  gap: 5px;
  @media ${(p) => p.theme.media.mobileMin} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media ${(p) => p.theme.media.tablet} {
    max-width: 767px;
    gap: 60px;
  }

  @media ${(p) => p.theme.media.desktop} {
    margin: 120px 0 188px;
    max-width: 1068px;
  }
`;

export const Link = styled.a`
  display: inline-block;
  text-align: center;
  padding: 6px 12px;
  width: 100%;
  height: 35px;
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.boxShadow.shadowAccent};
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: ${(p) => p.theme.boxShadow.shadowPrimary};
  }
  @media ${(p) => p.theme.media.tablet} {
    padding: 12px 20px;
    height: 50px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: 15px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.black};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 15px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: 20px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;

export const TitleName = styled.span`
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 15px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: 20px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
export const Text = styled.p`
  margin-bottom: 30px;
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 35px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: 50px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 108px;
  height: 24px;
  color: ${(p) => p.theme.colors.black};
  font-family: ${(p) => p.theme.fonts.goBack};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: ${(p) => p.theme.lineHeights.goBack};
  background-color: ${(p) => p.theme.colors.white};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.primary};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
    transform: scale(1.1);
  }
`;

export const BtnIcon = styled(GoSignOut)``;
