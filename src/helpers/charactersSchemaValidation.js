import * as yup from "yup";
export const charactersSchemaValidation = yup.object().shape({
  inputParam: yup
    .string()
    .required("Search field is required")
    .matches(/^[A-Za-z]+$/, "Only English letters without symbols")
    .trim(),
});
