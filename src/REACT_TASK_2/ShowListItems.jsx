import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

const ShowListItems = ({ submittedValues, showEdit, onEdit, onDelete }) => {
  return (
    <div>
      {submittedValues.length > 0 && showEdit && (
        <Row>
          <h3>Saved User Details</h3>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <h4 className="card-title"></h4>
              </CardHeader>
              <CardBody style={{ maxHeight: "40vh", overflowY: "scroll" }}>
                <div className="table-responsive">
                  <Table className="table mb-0 ">
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
              <Row className="d-flex">
                <Col>
                  <div className="text-end mb-2">
                    <button className="btn btn-danger" onClick={onDelete}>
                      DeleteAll
                    </button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ShowListItems;
