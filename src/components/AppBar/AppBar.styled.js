import styled from "styled-components";

export const AppBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin: 0 auto;
  > nav {
    display: flex;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 24px 24px 0;
    width: 1068px;
  }
`;
