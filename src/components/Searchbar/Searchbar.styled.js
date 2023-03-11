import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { Form, Field } from "formik";

export const FormWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-bottom: 51px;
  }
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.searchText};
  border-radius: ${(p) => p.theme.radii.large};
`;

export const SearchButton = styled.button`
  display: inline-block;
  padding: 16px 8px 16px 16px;
  color: ${(p) => p.theme.colors.searchText};
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.large};
  transition: all ${(p) => p.theme.transition};
  &:hover {
    color: ${(p) => p.theme.colors.primary};
    transform: scale(0.9);
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  padding: 0;
  width: 100%;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  border: none;
  outline: none;
`;

export const Icon = styled(MdSearch)`
  margin: 0;
  width: 24px;
  height: 24px;
`;
