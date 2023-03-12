import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  FormWrapper,
  SearchForm,
  SearchButton,
  Input,
  Icon,
} from "./Searchbar.styled";

const Searchbar = ({ handleInputChange }) => {
  const [inputParam, setInputParam] = useState("");
  const schema = yup.object().shape({
    inputParam: yup
      .string()
      .required("Search field is required")
      .matches(/^[A-Za-z]+$/, "Only English letters without symbols")
      .trim(),
  });

  const handleSubmit = (values, { resetForm }) => {
    handleInputChange(values.inputParam);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ inputParam }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormWrapper>
        <SearchForm>
          <SearchButton type="submit">
            <Icon />
          </SearchButton>
          <Input
            type="text"
            name="inputParam"
            placeholder="Filter by name..."
            autoFocus
          />
          <ErrorMessage name="inputParam" />
        </SearchForm>
      </FormWrapper>
    </Formik>
  );
};

Searchbar.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default Searchbar;
