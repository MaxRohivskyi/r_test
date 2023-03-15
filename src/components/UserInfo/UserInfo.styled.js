import styled from "styled-components";

export const User = styled.div`
  display: none;
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    background-color: ${(p) => p.theme.colors.primary};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
    border-radius: ${(p) => p.theme.radii.normal};
    box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
    &.active {
      color: ${(p) => p.theme.colors.accent};
      background-color: ${(p) => p.theme.colors.primary};
      box-shadow: ${(p) => p.theme.boxShadow.shadowAccent};
    }
  }
`;

export const UserImg = styled.img`
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  color: ${(p) => p.theme.colors.accent};
  border: ${(p) => p.theme.borders.large};
  border-radius: ${(p) => p.theme.radii.round};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: ${(p) => p.theme.boxShadow.shadowPrimary};
  }
  @media ${(p) => p.theme.media.tablet} {
    margin: 0 10px 0 0;
    width: 30px;
    height: 30px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 40px;
    height: 40px;
  }
`;

export const UserText = styled.div`
  color: ${(p) => p.theme.colors.accent};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;
