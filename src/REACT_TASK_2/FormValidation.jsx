import { useFormik } from "formik";
import React, { useState } from "react";
import { Card, Col, Form, FormFeedback, Input, Row } from "reactstrap";
import * as Yup from "yup";
import ShowListItems from "./ShowListItems";
import UserForm from "./UserForm";

const FormValidation = () => {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [todo, setTodo] = useState({ name: "", email: "", mobile: "" });
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit mobile number")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: todo.name,
      email: todo.email,
      mobile: todo.mobile,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      if (editIndex !== null) {
        const updatedValues = [...submittedValues];
        updatedValues[editIndex] = values;
        setSubmittedValues(updatedValues);
        setEditIndex(null);
      } else {
        setSubmittedValues((prev) => [...prev, values]);
      }
      setTodo({ name: "", email: "", mobile: "" });
      formik.resetForm({
        values: { name: "", email: "", mobile: "" },
      });
    },
  });

  const handleEditButton = () => {
    setShowEdit(!showEdit);
  };

  const onEdit = (index) => {
    setEditIndex(index);
    setTodo(submittedValues[index]);
  };

  const onDelete = () => {
    setSubmittedValues("");
  };

  return (
    <div>
      <Card>
        <CardHeader>React Task</CardHeader>
        <h1>Form Validation</h1>
        <Row className="d-flex">
          <Col>
            <UserForm formik={formik} />
            <div className="text-end mb-2">
              <button
                className="btn btn-success save-user"
                disabled={submittedValues.length === 0}
                onClick={handleEditButton}
              >
                Edit
              </button>
            </div>
          </Col>
        </Row>
        <ShowListItems
          showEdit={showEdit}
          submittedValues={submittedValues}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Card>
    </div>
  );
};

export default FormValidation;
