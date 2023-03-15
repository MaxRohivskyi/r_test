import styled from "styled-components";

export const AuthContainer = styled.main`
  padding: 32px 24px 223px 24px;
  margin: 0 auto;
  @media ${(p) => p.theme.media.mobileMin} {
    width: 100%;
  }

  @media ${(p) => p.theme.media.tablet} {
    padding: 75px 150px;
    max-width: 767px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding: 100px 250px;
    max-width: 1068px;
  }
`;
