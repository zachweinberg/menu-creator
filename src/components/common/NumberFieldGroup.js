import React from "react";
import classnames from "classnames";
import { Field } from "formik";

const NumberFieldGroup = ({
  name,
  label,
  placeholder,
  error,
  info,
  type,
  disabled
}) => (
  <>
    <div className="col-sm-3 my-1">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        className={classnames("form-control form-control-md", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  </>
);

export default NumberFieldGroup;
