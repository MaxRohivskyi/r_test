import styled from "styled-components";
import banner from "../../img/Banner.png";
import banner2x from "../../img/Banner_2x.png";

export const BannerWrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  margin: 0 0 32px 0;
  width: 100%;
  height: 104px;
  background-image: url(${banner});
  @media ${(p) => p.theme.media.tablet} {
    margin: 0 0 16px 0;
    background-image: url(${banner2x});
    height: 200px;
  }
`;
