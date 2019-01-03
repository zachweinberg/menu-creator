import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

const Content = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="mt-4">
      <TextFieldGroup
        type="number"
        name="application_fee"
        className="form-control form-control-md"
        info=""
        disabled={true}
        label="Application Fee"
        error={touched.application_fee && errors.application_fee}
      />
      <TextFieldGroup
        type="number"
        name="confirmation_method_raw"
        className="form-control form-control-md"
        info="If unknown, use 101"
        label="Confirmation Method Raw"
        error={
          touched.confirmation_method_raw && errors.confirmation_method_raw
        }
      />

      <h5>Delivery Methods:</h5>

      <div className="text-left mb-4">
        <Field
          type="checkbox"
          className="mr-2"
          checked={values.dm_catering}
          name="dm_catering"
        />
        Catering
        <br />
        <Field
          type="checkbox"
          className="mr-2"
          checked={values.dm_delivery}
          name="dm_delivery"
        />
        Delivery
        <br />
        <Field
          type="checkbox"
          className="mr-2"
          checked={values.dm_dine_in}
          name="dm_dine_in"
        />
        Dine In
        <br />
        <Field
          type="checkbox"
          className="mr-2"
          checked={values.dm_takeout}
          name="dm_takeout"
        />
        Takeout
        <br />
      </div>
      <TextFieldGroup
        type="email"
        name="email"
        className="form-control form-control-md"
        info=""
        label="Email"
        error={touched.email && errors.email}
      />
      <TextFieldGroup
        type="text"
        name="phone_number_cell"
        className="form-control form-control-md"
        info=""
        label="Cell Phone Number"
        error={touched.phone_number_cell && errors.phone_number_cell}
      />
      <TextFieldGroup
        type="text"
        name="state"
        className="form-control form-control-md"
        info=""
        label="State"
        error={touched.state && errors.state}
      />
      <TextFieldGroup
        type="text"
        name="tax_rate"
        className="form-control form-control-md"
        info=""
        label="Tax Rate (decimal)"
        error={touched.tax_rate && errors.tax_rate}
      />
      <TextFieldGroup
        type="number"
        disabled={true}
        name="write_to_firebase"
        className="form-control form-control-md"
        info=""
        label="Write To Firebase"
        error={touched.write_to_firebase && errors.write_to_firebase}
      />

      <div className="row justify-content-center">
        <button
          style={{ width: "40%", marginRight: "50px" }}
          className={classNames("btn btn-primary my-5", {
            disabled: isSubmitting
          })}
          type="button"
          onClick={values.prevPage}
        >
          Back
        </button>

        <button
          style={{ width: "40%" }}
          className={classNames("btn btn-primary my-5", {
            disabled: isSubmitting
          })}
          type="submit"
        >
          {isSubmitting ? "Loading..." : "Next"}
        </button>
      </div>
    </Form>
  );
};

const StepThree = withFormik({
  mapPropsToValues: props => {
    return {
      application_fee: 0.07,
      confirmation_method_raw: 101,
      dm_catering: 0,
      dm_delivery: 0,
      dm_dine_in: 0,
      dm_takeout: 0,
      email: "",
      phone_number_cell: "",
      state: "",
      tax_rate: 0,
      write_to_firebase: 1,
      prevPage: props.back,
      nextPage: props.next,
      save: props.save
    };
  },
  validationSchema: Yup.object().shape({
    application_fee: Yup.number()
      .min(0)
      .required(),
    confirmation_method_raw: Yup.number().required(
      "Please fill out confirmation method raw"
    ),
    email: Yup.string()
      .email()
      .required("Please enter email"),
    phone_number_cell: Yup.string(),
    state: Yup.string()
      .max(2)
      .required("Please enter state initials"),
    tax_rate: Yup.number()
      .min(0)
      .required("Please enter a tax rate"),
    write_to_firebase: Yup.number()
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    values.dm_catering = values.dm_catering === true ? 1 : 0;
    values.dm_delivery = values.dm_delivery === true ? 1 : 0;
    values.dm_dine_in = values.dm_dine_in === true ? 1 : 0;
    values.dm_takeout = values.dm_takeout === true ? 1 : 0;

    setTimeout(() => {
      setSubmitting(false);
      values.save("pageThree", values);
      values.nextPage();
    }, 1000);
  }
})(Content);

export default StepThree;
