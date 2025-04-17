import * as Yup from "yup";

const getLoginValidationSchema = (t?: (key: string) => string) => {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
};

export default getLoginValidationSchema;
