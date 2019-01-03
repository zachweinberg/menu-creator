import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";

const Content = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="mt-4">
      <h3>Item Name Theme:</h3>
      <TextFieldGroup
        type="text"
        name="item_name_background_color"
        className="form-control form-control-md"
        info=""
        label="Background Color"
        error={
          touched.item_name_background_color &&
          errors.item_name_background_color
        }
      />
      <TextFieldGroup
        type="text"
        name="item_name_color"
        className="form-control form-control-md"
        info=""
        label="Color"
        error={touched.item_name_color && errors.item_name_color}
      />
      <TextFieldGroup
        type="text"
        name="item_name_item_description_color"
        className="form-control form-control-md"
        info=""
        label="Item Description Color"
        error={
          touched.item_name_item_description_color &&
          errors.item_name_item_description_color
        }
      />
      <TextFieldGroup
        type="text"
        name="item_name_name"
        className="form-control form-control-md"
        info=""
        label="Name"
        error={touched.item_name_name && errors.item_name_name}
      />
      <TextFieldGroup
        type="number"
        name="item_name_size"
        className="form-control form-control-md"
        info=""
        label="Size"
        error={touched.item_name_size && errors.item_name_size}
      />

      <h3>Menu Section Theme:</h3>

      <div className="text-left mb-4">
        <TextFieldGroup
          type="text"
          name="menu_section_background_color"
          className="form-control form-control-md"
          info=""
          label="Background Color"
          error={
            touched.menu_section_background_color &&
            errors.menu_section_background_color
          }
        />
        <TextFieldGroup
          type="text"
          name="menu_section_color"
          className="form-control form-control-md"
          info=""
          label="Color"
          error={touched.menu_section_color && errors.menu_section_color}
        />
        <TextFieldGroup
          type="text"
          name="menu_section_name"
          className="form-control form-control-md"
          info=""
          label="Name"
          error={touched.menu_section_name && errors.menu_section_name}
        />
        <TextFieldGroup
          type="number"
          name="menu_section_size"
          className="form-control form-control-md"
          info=""
          label="Size"
          error={touched.menu_section_size && errors.menu_section_size}
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

const StepFour = withFormik({
  mapPropsToValues: props => {
    return {
      item_name_background_color: "",
      item_name_color: "",
      item_name_item_description_color: "",
      item_name_name: "",
      item_name_size: 20,
      menu_section_background_color: "",
      menu_section_color: "",
      menu_section_name: "",
      menu_section_size: 20,
      prevPage: props.back,
      nextPage: props.next,
      save: props.save
    };
  },
  validationSchema: Yup.object().shape({
    item_name_background_color: Yup.string().required(),
    item_name_color: Yup.string().required(),
    item_name_item_description_color: Yup.string().required(),
    item_name_name: Yup.string().required(),
    item_name_size: Yup.number()
      .min(0)
      .required(),
    menu_section_background_color: Yup.string().required(),
    menu_section_color: Yup.string().required(),
    menu_section_name: Yup.string().required(),
    menu_section_size: Yup.number()
      .min(0)
      .required()
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      values.save("pageFour", values);
      values.nextPage();
    }, 1000);
  }
})(Content);

export default StepFour;
