import styled from "styled-components";

export const CharactersListWrapper = styled.ul`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 32px;
  @media ${(p) => p.theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px 20px;
  }
`;
