const STORAGE_KEY = "training_tasks";
const ListItem=document.getElementById("list-item");

let User=loadTasks();
// saveTasks();
addUser(User);
function loadTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Could not read saved tasks:", error);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(User));
    console.log("Tasks saved:", User.length);
    console.table(User);
  } catch (error) {
    console.error("Could not save tasks:", error);
  }
}

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=> response.json())
// .then(json=>{
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
//     // User=json;
//     saveTasks();
//     addUser(User)
// })

 async function fetchUser(){

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Network issue");
        }

        const json= await response.json();
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(json));

        const savedUSeer=loadTasks();
        if(savedUSeer.length===0){
            User=json
        }else{
        User=savedUSeer;
        }
        saveTasks();
        // addUser(User);
    }
    catch(error){
        console.log(error);
    }
    
}
fetchUser();


function addUser(users){
    ListItem.textContent="";

    for(const user of users){
        const list=document.createElement("li");
        list.dataset.listId=String(user.id)
        list.className="bg-red-200"

        const name=document.createElement("h2");
        name.textContent=user.name;
        
        const email=document.createElement("p");
        email.textContent=user.email;

        list.append(name,email);
        ListItem.append(list);
    }

}

const formItem=document.getElementById("form-item");



formItem.addEventListener("submit", (event)=>{
    event.preventDefault();

    const id=document.getElementById("id").value;
const name=document.getElementById("name").value;
const userName=document.getElementById("userName").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const website=document.getElementById("website").value;

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
  id:id,   
  name: name,
  username: userName,
  email: email,
  phone: phone,
  website: website,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json =>{User.push(json)
    saveTasks();
  addUser(User);
 console.log(User)}) 
})

// localStorage.clear();