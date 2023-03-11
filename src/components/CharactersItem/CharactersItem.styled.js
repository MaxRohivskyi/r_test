import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardWrapper = styled.li`
  width: 312px;
  height: 308px;
  box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: ${(p) => p.theme.boxShadow.shadowPrimary};
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 240px;
    height: 244px;
  }
`;

export const CardLink = styled(NavLink)``;

export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 312px;
  height: 232px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  @media ${(p) => p.theme.media.desktop} {
    width: 240px;
    height: 168px;
  }
`;

export const CardInfo = styled.ul`
  padding: 12px 16px;
`;

export const Name = styled.p`
  color: ${(p) => p.theme.colors.cardTitle};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  margin-bottom: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Specie = styled.p`
  color: ${(p) => p.theme.colors.cardText};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  letter-spacing: ${(p) => p.theme.letterSpacing.cardText};
`;
