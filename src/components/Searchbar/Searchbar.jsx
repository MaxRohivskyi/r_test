import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import { charactersSchemaValidation } from "../../helpers/charactersSchemaValidation";
import {
  FormWrapper,
  SearchForm,
  SearchButton,
  Input,
  Icon,
} from "./Searchbar.styled";

const Searchbar = ({ handleInputChange }) => {
  const [inputParam, setInputParam] = useState("");

  const handleSubmit = (values, { resetForm }) => {
    handleInputChange(values.inputParam);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ inputParam }}
      onSubmit={handleSubmit}
      validationSchema={charactersSchemaValidation}
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

export default Searchbar;

Searchbar.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
