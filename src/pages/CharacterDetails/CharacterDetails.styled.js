import styled from "styled-components";

export const CharacterDetailsContainer = styled.main`
  padding: 32px 24px 85px;
  margin: 0 auto;
  @media ${(p) => p.theme.media.mobileMin} {
    width: 100%;
  }

  @media ${(p) => p.theme.media.tablet} {
    max-width: 767px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding: 32px 24px 142px;
    max-width: 1068px;
  }
`;
