import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 4px 8px;
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: ${(p) => p.theme.boxShadow.shadowAccent};
  text-decoration: none;
  &:nth-child(2) {
    margin-left: 5px;
  }
  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.primary};
  }
  @media ${(p) => p.theme.media.tablet} {
    padding: 8px 16px;
    font-size: ${(p) => p.theme.fontSizes.s};
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.m};
    &:nth-child(2) {
      margin-left: 15px;
    }
  }
`;
