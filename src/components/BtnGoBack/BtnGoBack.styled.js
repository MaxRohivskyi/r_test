import styled from "styled-components";
import { RiArrowLeftLine } from "react-icons/ri";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 108px;
  height: 24px;
  color: ${(p) => p.theme.colors.black};
  font-family: ${(p) => p.theme.fonts.goBack};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: ${(p) => p.theme.lineHeights.goBack};
  background-color: ${(p) => p.theme.colors.white};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.normal};
  transition: all ${(p) => p.theme.transition};
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.primary};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.boxShadow.shadowCard};
    transform: scale(1.1);
  }
`;

export const BtnIcon = styled(RiArrowLeftLine)``;
