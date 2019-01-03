import React from "react";
import classnames from "classnames";
import { Field } from "formik";

const TextFieldGroup = ({
  name,
  label,
  placeholder,
  error,
  info,
  type,
  disabled
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
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
};

export default TextFieldGroup;
