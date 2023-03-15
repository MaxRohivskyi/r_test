import styled from "styled-components";

export const CharacterInfoWrapper = styled.main`
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CharacterInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CharacterInfoImg = styled.img`
  margin: 73px 0 0 0;
  width: 150px;
  height: 148px;
  color: ${(p) => p.theme.colors.informationIcon};
  border: ${(p) => p.theme.borders.large};
  border-radius: ${(p) => p.theme.radii.round};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: ${(p) => p.theme.boxShadow.shadowPrimary};
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 240px;
    height: 238px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 300px;
    height: 300px;
  }
`;

export const CharacterTitle = styled.h2`
  margin: 34px 0 0 0;
  color: ${(p) => p.theme.colors.infoCharacterTitle};
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  line-height: ${(p) => p.theme.lineHeights.informationTitle};
  @media ${(p) => p.theme.media.tablet} {
    margin: 34px 0 0 0;
    font-size: ${(p) => p.theme.fontSizes.xxl};
    font-weight: ${(p) => p.theme.fontWeights.normal};
    line-height: ${(p) => p.theme.lineHeights.characterTitle};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin: 16px 0 0 0;
  }
`;

export const CharacterInfoTitle = styled.h3`
  margin: 34.37px 0 0 0;
  color: ${(p) => p.theme.colors.informationTitle};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.informationTitle};
  @media ${(p) => p.theme.media.tablet} {
    margin: 40px 0 0 0;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin: 48px 0 0 0;
  }
`;

export const CharacterInfoList = styled.ul`
  margin: 16px 0 0 0;
  width: 100%;
  @media ${(p) => p.theme.media.mobileMax} {
    margin: 40px 0 0 0;
    width: 312px;
  }
  @media ${(p) => p.theme.media.tablet} {
    margin: 40px 0 0 0;
    width: 367px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin: 48px 0 0 0;
    width: 413px;
  }
`;

export const CharacterInfoItem = styled.li`
  margin: 9px 0 0 16px;
`;

export const CharacterInfoItemTitle = styled.h4`
  color: ${(p) => p.theme.colors.infoCharacterTitle};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const CharacterInfoItemText = styled.p`
  margin: 9px 0 11px 0;
  color: ${(p) => p.theme.colors.informationText};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  line-height: ${(p) => p.theme.lineHeights.informationText};
  letter-spacing: ${(p) => p.theme.letterSpacing.cardText};
`;

export const CharacterInfoBorderLine = styled.div`
  width: 100%;
  color: ${(p) => p.theme.colors.informationBorderLine};
  border-bottom: ${(p) => p.theme.borders.normal};
`;
