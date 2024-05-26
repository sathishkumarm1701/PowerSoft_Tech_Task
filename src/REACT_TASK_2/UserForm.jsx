import React from "react";
import { Col, Form, FormFeedback, Input, Row } from "reactstrap";

const UserForm = ({ formik }) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <div className="w-100 mb-3">
        <Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name || ""}
          onBlur={formik.handleBlur}
          invalid={formik.touched.name && formik.errors.name ? true : false}
        />
        {formik.touched.name && formik.errors.name && (
          <FormFeedback type="invalid">{formik.errors.name}</FormFeedback>
        )}
      </div>
      <div className="w-100 mb-3">
        <Input
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email || ""}
          invalid={formik.touched.email && formik.errors.email ? true : false}
        />
        {formik.touched.email && formik.errors.email && (
          <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
        )}
      </div>
      <div className="w-100 mb-3">
        <Input
          name="mobile"
          type="number"
          placeholder="Mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile || ""}
          invalid={formik.touched.mobile && formik.errors.mobile ? true : false}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <FormFeedback type="invalid">{formik.errors.mobile}</FormFeedback>
        )}
      </div>
      <Row>
        <Col>
          <div className="text-end">
            <button type="submit" className="btn btn-success save-user">
              Save
            </button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default UserForm;
