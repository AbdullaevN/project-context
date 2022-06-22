import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal, Button, Card } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Subtitle>{employee.name}</Card.Subtitle>
          <Card.Title>{employee.address}</Card.Title>
          <Card.Title>{employee.phone}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">
            <button
              onClick={handleShow}
              className="btn  btn-act "
              data-toggle="modal"
            >
              Edit
            </button>
          </Card.Link>
          <Card.Link href="#">
            <button
              onClick={() => deleteEmployee(employee.id)}
              className="btn  btn-act "
              data-toggle="modal"
            >
              Delete
            </button>
          </Card.Link>
        </Card.Body>
      </Card>
      {/* <td>{employee.name}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button
          onClick={handleShow}
          className="btn  btn-act "
          data-toggle="modal"
        >
          Edit
        </button>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="btn  btn-act "
          data-toggle="modal"
        >
          Delete
        </button>
      </td> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;
