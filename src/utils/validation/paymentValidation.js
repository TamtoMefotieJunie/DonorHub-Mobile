import * as Yup from "yup";
import { validateCamtel, validateMTN, validateOrange } from "./validatePhone";

export const validationSchema =  Yup.object().shape({
  
    quantity: Yup.number()
                .required("*")
                .positive("Quantity must be a positive number"),
  
    telephone: Yup.string()
                .required("*")
                .min(9, "Enter a Cameroonian Phone Number")
                .max(9, "Enter a Cameroonian Phone Number")
                .test("validate-phone", "Enter either MTN, Orange or CAMTEL", (tel) => (validateMTN(tel) && validateOrange(tel) && validateCamtel(tel)) == false),
   
 });

