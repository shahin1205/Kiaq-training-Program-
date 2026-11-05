// // let name:String="mahin";
// // console.log(name);

// interface User{
//     id:number;
//     name:String;
//     active:boolean;
// }
// const users:User[]=[
//     {
//         id:1,
//         name:"shahin",
//         active:true
//     },
//     {
//         id:2,
//         name:"mahin",
//         active:false
//     }
// ];
// function displayUser(user: User): void {
//   console.log(`${user.id} - ${user.name} - ${user.active}`);
// }
// users.forEach(displayUser);

// function findById(id:number):User | undefined{
//     return users.find((user:User)=>user.id===id);
// }
// const findUsers=findById(4);

// console.log(findUsers?.name);
// // if(findUsers){
// // console.log(findUsers.name);
// // }



// const numberArray:Array<number> = [21,34,87,98,56];
// console.log(numberArray);

// const stringArray:String[]=["shahin","mahin","raja","kamal"]
// console.log(stringArray[1]);

// interface Student{
//     sid:number;
//     sname:string;
//     sdeparment:string;
//     sactivity:boolean;

// }

// const students:Student[]=[
//     {
//         sid:1,
//         sname:"shahin",
//         sdeparment:"ECE",
//         sactivity:true
//     },
//     {
//         sid:2,
//         sname:"mahin",
//         sdeparment:"CSC",
//         sactivity:false
//     }

// ]

// const displayStudent:Student[]=students;
// console.log(displayStudent);

// function displayStudent1(student:Student):void{
//     console.log(student.sname + student.sdeparment)
// }
// students.forEach(displayStudent1)



type EmployeeId=number | String;
type Department= "IT" | "HR" | "Manager";
type EmployeeStatus = "Active" | "Inactive" | "On Leave";

interface Employee{
    name:String;
    email:String;
    age:number;
}

interface detail extends Employee{
    readonly id:EmployeeId;
    department:Department;
    salary:number;
    phone?:String;
    status:EmployeeStatus;
}

type EmployeeAccess = {
  role: "Admin" | "Manager" | "Employee";
  permissions: string[];
};

type fullDetails =detail & EmployeeAccess;

let employees: fullDetails[] =[
    {
        id:1,
        name:"Shahin",
        email:"shahin@gmail.com",
        age:26,
        department:"IT",
        salary:15000,
        phone:"9566260656",
        status:"Active",
        role:"Admin",
        permissions:["update" , "Add"]
    },
    {
        id:2,
        name:"Mahin",
        email:"mahin@gmail.com",
        age:29,
        department:"Manager",
        salary:150000,
        phone:"894393645",
        status:"Active",
        role:"Admin",
        permissions:["update" , "Add"]
    }
]


const displayEmployees = (): void => {
  console.log("\\nEmployee List:");

  employees.forEach((employee) => {
    console.log(
      employee.id,
      employee.name,
      employee.department,
      employee.salary,
      employee.status
    );
  });
};

// displayEmployees();

type EmployeeFunction = (employee: fullDetails[]) => void;

const addEmployee:EmployeeFunction=(employee)=>{
    employees.push(...employee);
    console.log("employee add success full" );
}



const newemployee:fullDetails[]=[{

    id:3,
    name:"Raja",
    email:"raja@gmail.com",
    age:26,
    department:"HR",
    salary:180000,
    phone:"894393645",
    status:"Active",
    role:"Admin",
    permissions:["Pending" , "Add"]
},
{
    id:4,
    name:"Kamal",
    email:"kamal@gmail.com",
    age:26,
    department:"HR",
    salary:180000,
    phone:"894393645",
    status:"Active",
    role:"Admin",
    permissions:["Pending" , "Add"]
}
];

addEmployee(newemployee);

type singleEmployeeFunction=(employee:fullDetails)=>void;


const updateStatus=(id:EmployeeId , status:EmployeeStatus)=>{
    const employee=employees.find((emp)=>emp.id===id);
    if(employee){
        employee.status=status;
        console.log("status updated");
    }else{
        console.log("employee not foud");
    }
}
updateStatus(1,"Inactive")

displayEmployees();