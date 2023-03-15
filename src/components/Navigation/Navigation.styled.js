import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 6px 12px;
  margin-right: 15px;
  color: ${(p) => p.theme.colors.primary};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radii.normal};
  box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
  &:not(:last-child) {
    margin-right: 15px;
  }
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

    font-size: ${(p) => p.theme.fontSizes.m};
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;
