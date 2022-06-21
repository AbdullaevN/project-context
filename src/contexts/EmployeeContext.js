import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Name one",
      address: "address one",
      phone: "0559000000",
    },
    {
      id: uuidv4(),
      name: "Name two",
      address: "address two",
      phone: "0700112233",
    },
    {
      id: uuidv4(),
      name: "Name three",
      address: "address three",
      phone: "0888445566",
    },
    {
      id: uuidv4(),
      name: "Name five",
      address: "address five",
      phone: "0555446655",
    },
    {
      id: uuidv4(),
      name: "Name six",
      address: "address six",
      phone: "0666778899",
    },
  ]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addEmployee = (name, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, address, phone }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
