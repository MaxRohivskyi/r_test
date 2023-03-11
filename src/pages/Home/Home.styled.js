import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 24px 223px;
  margin: 0 auto;
  @media ${(p) => p.theme.media.mobileMin} {
    width: 100%;
  }

  @media ${(p) => p.theme.media.tablet} {
    max-width: 767px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding: 0 24px 188px;
    max-width: 1068px;
  }
`;
