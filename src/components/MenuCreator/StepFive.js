import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

const Content = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="mt-4">
      <div className="text-left mb-4">
        <TextFieldGroup
          type="text"
          name="sun"
          className="form-control form-control-md"
          info=""
          label="Sunday"
          placeholder="example: 11.5-21.5"
          error={touched.sun && errors.sun}
        />
        <TextFieldGroup
          type="text"
          name="mon"
          className="form-control form-control-md"
          info=""
          label="Monday"
          placeholder="example: 11.5-21.5"
          error={touched.mon && errors.mon}
        />
        <TextFieldGroup
          type="text"
          name="tues"
          className="form-control form-control-md"
          info=""
          label="Tuesday"
          placeholder="example: 11.5-21.5"
          error={touched.tues && errors.tues}
        />
        <TextFieldGroup
          type="text"
          name="wed"
          className="form-control form-control-md"
          info=""
          label="Wednesday"
          placeholder="example: 11.5-21.5"
          error={touched.wed && errors.wed}
        />
        <TextFieldGroup
          type="text"
          name="thurs"
          className="form-control form-control-md"
          info=""
          label="Thursday"
          placeholder="example: 11.5-21.5"
          error={touched.thurs && errors.thurs}
        />
        <TextFieldGroup
          type="text"
          name="fri"
          className="form-control form-control-md"
          info=""
          label="Friday"
          placeholder="example: 11.5-21.5"
          error={touched.fri && errors.fri}
        />
        <TextFieldGroup
          type="text"
          name="sat"
          className="form-control form-control-md"
          info=""
          label="Saturday"
          placeholder="example: 11.5-21.5"
          error={touched.sat && errors.sat}
        />
      </div>

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
          {isSubmitting ? "Loading..." : "Next (Save)"}
        </button>
      </div>
    </Form>
  );
};

const StepFive = withFormik({
  mapPropsToValues: props => {
    return {
      sun: "",
      mon: "",
      tues: "",
      wed: "",
      thurs: "",
      fri: "",
      sat: "",
      prevPage: props.back,
      nextPage: props.next,
      save: props.save
    };
  },
  validationSchema: Yup.object().shape({
    sun: Yup.string().required(),
    mon: Yup.string().required(),
    tues: Yup.string().required(),
    wed: Yup.string().required(),
    thurs: Yup.string().required(),
    fri: Yup.string().required(),
    sat: Yup.string().required()
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      values.save("pageFive", values);
      values.nextPage();
    }, 1000);
  }
})(Content);

export default StepFive;
