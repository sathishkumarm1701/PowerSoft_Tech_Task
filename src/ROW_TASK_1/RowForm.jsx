import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RowForm.css";
import SavedValues from "./SavedValues";

const validationSchema = Yup.object({
  rows: Yup.array().of(
    Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid 10-digit mobile number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      pan: Yup.string()
        .max(15, "Must be 10 characters or less")
        .required("Required"),
    })
  ),
});

const RowForm = () => {
  const rows = [{ name: "", mobile: "", email: "", pan: "" }];
  const [submittedValues, setSubmittedValues] = useState([]);

  const formik = useFormik({
    initialValues: { rows },
    validationSchema,
    onSubmit: (values) => {
      setSubmittedValues(values.rows);
    },
  });

  const addRow = () => {
    formik.setValues({
      rows: [
        ...formik.values.rows,
        { name: "", mobile: "", email: "", pan: "" },
      ],
    });
  };

  return (
    <div>
      <h3> Row Form Task</h3>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.rows.map((row, index) => (
          <div key={index} className="row mb-3">
            <div className="d-flex custom_flex">
              <div className="col-2 col-md-3">
                <input
                  name={`rows[${index}].name`}
                  type="text"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={row.name}
                />
                {formik.errors.rows?.[index]?.name && (
                  <div className="error">{formik.errors.rows[index].name}</div>
                )}
              </div>
              <div className="col-2 col-md-3">
                <input
                  name={`rows[${index}].mobile`}
                  type="text"
                  placeholder="Mobile"
                  onChange={formik.handleChange}
                  value={row.mobile}
                />
                {formik.errors.rows?.[index]?.mobile && (
                  <div className="error">
                    {formik.errors.rows[index].mobile}
                  </div>
                )}
              </div>
              <div className="col-2 col-md-3">
                <input
                  name={`rows[${index}].email`}
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={row.email}
                />
                {formik.errors.rows?.[index]?.email && (
                  <div className="error">{formik.errors.rows[index].email}</div>
                )}
              </div>
              <div className="col-2 col-md-3">
                <input
                  name={`rows[${index}].pan`}
                  type="text"
                  placeholder="PAN"
                  onChange={formik.handleChange}
                  value={row.pan}
                />
                {formik.errors.rows?.[index]?.pan && (
                  <div className="error">{formik.errors.rows[index].pan}</div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-between mb-3">
          <button type="button" className="btn btn-primary" onClick={addRow}>
            Add Row
          </button>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
      <SavedValues submittedValues={submittedValues} />
    </div>
  );
};

export default RowForm;
