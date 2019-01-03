import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import NumberFieldGroup from "../common/NumberFieldGroup";

const Content = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="mt-4">
      <div className="form-row align-items-center">
        <NumberFieldGroup
          error={touched.delivery_charge && errors.delivery_charge}
          type="number"
          name="delivery_charge"
          label="Delivery Charge ($)"
        />
        <NumberFieldGroup
          error={touched.delivery_radius && errors.delivery_radius}
          type="number"
          name="delivery_radius"
          label="Delivery Radius"
        />
      </div>

      <TextFieldGroup
        type="text"
        name="estimated_delivery_time"
        className="form-control form-control-md"
        info=""
        label="Estimated Delivery Time"
        error={
          touched.estimated_delivery_time && errors.estimated_delivery_time
        }
      />
      <TextFieldGroup
        type="text"
        name="special_message"
        className="form-control form-control-md"
        info=""
        label="Special Message"
        disabled={true}
        error={touched.special_message && errors.special_message}
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

const StepTwo = withFormik({
  mapPropsToValues: props => {
    return {
      delivery_charge: 0,
      delivery_radius: 0,
      estimated_delivery_time: "",
      special_message: "",
      prevPage: props.back,
      nextPage: props.next,
      save: props.save
    };
  },
  validationSchema: Yup.object().shape({
    delivery_charge: Yup.number()
      .min(0)
      .required("Please fill in the delivery charge!"),
    delivery_radius: Yup.number()
      .min(0)
      .required("Please fill in the delivery radius"),
    estimated_delivery_time: Yup.string().required(
      "Please fill in the estimated delivery time"
    )
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      values.save("pageTwo", values);
      values.nextPage();
    }, 1000);
  }
})(Content);

export default StepTwo;
