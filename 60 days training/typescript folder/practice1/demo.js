"use strict";
// // let name:String="mahin";
// // console.log(name);
Object.defineProperty(exports, "__esModule", { value: true });
let employees = [
    {
        id: 1,
        name: "Shahin",
        email: "shahin@gmail.com",
        age: 26,
        department: "IT",
        salary: 15000,
        phone: "9566260656",
        status: "Active",
        role: "Admin",
        permissions: ["update", "Add"]
    },
    {
        id: 2,
        name: "Mahin",
        email: "mahin@gmail.com",
        age: 29,
        department: "Manager",
        salary: 150000,
        phone: "894393645",
        status: "Active",
        role: "Admin",
        permissions: ["update", "Add"]
    }
];
const displayEmployees = () => {
    console.log("\\nEmployee List:");
    employees.forEach((employee) => {
        console.log(employee.id, employee.name, employee.department, employee.salary, employee.status);
    });
};
const addEmployee = (employee) => {
    employees.push(...employee);
    console.log("employee add success full");
};
const newemployee = [{
        id: 3,
        name: "Raja",
        email: "raja@gmail.com",
        age: 26,
        department: "HR",
        salary: 180000,
        phone: "894393645",
        status: "Active",
        role: "Admin",
        permissions: ["Pending", "Add"]
    },
    {
        id: 4,
        name: "Kamal",
        email: "kamal@gmail.com",
        age: 26,
        department: "HR",
        salary: 180000,
        phone: "894393645",
        status: "Active",
        role: "Admin",
        permissions: ["Pending", "Add"]
    }
];
addEmployee(newemployee);
const updateStatus = (id, status) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
        employee.status = status;
        console.log("status updated");
    }
    else {
        console.log("employee not foud");
    }
};
updateStatus(1, "Inactive");
displayEmployees();
//# sourceMappingURL=demo.js.map