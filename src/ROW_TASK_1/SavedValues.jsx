import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

const SavedValues = ({ submittedValues }) => {
  return (
    <div className="row">
      {submittedValues && submittedValues.length > 0 && (
        <div className="submitted-values mt-4">
          <h3 className="mb-3">Submitted Values</h3>
          <Card>
            <CardHeader>
              <h4 className="card-title"></h4>
            </CardHeader>
            <CardBody style={{ maxHeight: "40vh", overflowY: "scroll" }}>
              <div className="table-responsive">
                <Table className="table mb-0 table-hover">
                  <thead
                    className="table-light"
                    style={{ position: "sticky", top: 0, zIndex: 1 }}
                  >
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedValues?.map((item, index) => (
                      <tr
                        key={index}
                        onClick={() => onEdit(index)}
                        className="row-hover"
                      >
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SavedValues;
