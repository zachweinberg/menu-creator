import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import NumberFieldGroup from "../common/NumberFieldGroup";

const Content = ({ values, errors, touched, isSubmitting }) => {
  return (
    <>
      <div className="col-md-8 m-auto">
        <h3 className="text-center">Create Restaurant</h3>
        <Form className="mt-4">
          <div className="form-control text-center mb-4">
            <Field
              type="checkbox"
              className="mr-2"
              checked={values.offline}
              name="offline"
            />
            This restaurant is offline
          </div>
          <TextFieldGroup
            type="text"
            name="restaurantName"
            className="form-control form-control-md"
            info=""
            label="Restaurant name"
            error={touched.restaurantName && errors.restaurantName}
          />
          <TextFieldGroup
            type="text"
            name="node"
            className="form-control form-control-md"
            info=""
            label="Node name"
            error={touched.node && errors.node}
          />
          <TextFieldGroup
            type="text"
            name="address"
            className="form-control form-control-md"
            info=""
            label="Address Line 1"
            error={touched.address && errors.address}
          />
          <TextFieldGroup
            type="text"
            name="city"
            className="form-control form-control-md"
            info=""
            label="City"
            error={touched.city && errors.city}
          />
          <TextFieldGroup
            type="text"
            name="description"
            className="form-control form-control-md"
            info=""
            label="Description"
            error={touched.description && errors.description}
          />
          <TextFieldGroup
            type="text"
            name="logo"
            className="form-control form-control-md"
            info=""
            label="Logo URL"
            error={touched.logo && errors.logo}
          />
          <TextFieldGroup
            type="text"
            name="phone"
            className="form-control form-control-md"
            info=""
            label="Phone"
            error={touched.phone && errors.phone}
          />
          <TextFieldGroup
            type="text"
            name="tap"
            className="form-control form-control-md"
            info=""
            label="Tap"
            error={touched.tap && errors.tap}
          />
          <TextFieldGroup
            type="text"
            name="zip"
            className="form-control form-control-md"
            info=""
            label="Zip Code"
            error={touched.zip && errors.zip}
          />

          <div className="form-row align-items-center">
            <NumberFieldGroup
              error={touched.dollars && errors.dollars}
              type="number"
              name="dollars"
              label="Dollars ($)"
            />
            <NumberFieldGroup
              error={touched.latitude && errors.latitude}
              type="text"
              name="latitude"
              label="Latitude"
            />
            <NumberFieldGroup
              error={touched.longitude && errors.longitude}
              type="text"
              name="longitude"
              label="Longitude"
            />
            <NumberFieldGroup
              error={touched.min_delivery && errors.min_delivery}
              type="number"
              name="min_delivery"
              label="Minimum Delivery"
            />
          </div>

          <div className="row justify-content-center">
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
      </div>
    </>
  );
};

const StepOne = withFormik({
  mapPropsToValues: props => {
    return {
      restaurantName: "",
      node: "",
      address: "",
      city: "",
      description: "",
      logo: "",
      dollars: 0,
      latitude: "0.0000",
      longitude: "0.0000",
      min_delivery: 0,
      offline: false,
      phone: "",
      tap: "",
      zip: "",
      nextPage: props.next,
      save: props.save
    };
  },
  validationSchema: Yup.object().shape({
    restaurantName: Yup.string().required(
      "Please fill in the restaurant name!"
    ),
    node: Yup.string().required("Please fill in the node name"),
    address: Yup.string().required("Please fill in the address"),
    city: Yup.string().required("Please fill in the city"),
    description: Yup.string().required("Please fill in the description"),
    logo: Yup.string().required("Please fill in the logo URL"),
    dollars: Yup.number()
      .min(0)
      .required("Please fill in the dollars amount"),
    latitude: Yup.string().required("Please fill in the latitude"),
    longitude: Yup.string().required("Please fill in the longitude"),
    min_delivery: Yup.number()
      .min(0)
      .required("Please fill in the minimum delivery amount"),
    phone: Yup.string().required("Please fill in the phone number"),
    tap: Yup.string().required("Please fill in the tap"),
    zip: Yup.number().required("Please fill in the zip code")
  }),
  handleSubmit(values, { resetForm }) {
    setTimeout(() => {
      values.save("pageOne", values);
      values.nextPage();
    }, 1000);
  }
})(Content);

export default StepOne;
