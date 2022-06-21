import { Form, Button } from "react-bootstrap";

import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, phone, address } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, phone, address);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
