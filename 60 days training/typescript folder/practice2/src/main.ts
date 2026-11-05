import './style.css'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const app=document.querySelector<HTMLDivElement>("#app");
if(!app){
  throw new Error("app is not found");
}
app.innerHTML=`
    <section id="userList" class="user-list" aria-live="polite"></section>

`;

async function getUser(): Promise<User[]>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if(!response.ok){
    throw new Error(`Http error: ${response.status}`);
  }

  const users: User[]=await response.json();
  return users;
}

const userList = document.querySelector<HTMLElement>("#userList")!;

function displayUsers(users: User[]): void {
  userList.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("article");
    card.className = "user-card";

    const name = document.createElement("h2");
    name.textContent = user.name;

    const username = document.createElement("p");
    username.textContent = `Username: ${user.username}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${user.phone}`;

    const website = document.createElement("p");
    website.textContent = `Website: ${user.website}`;

    card.append(name, username, email, phone, website);
    userList.appendChild(card);
  });
}


async function loadUsers():Promise<void>{

  userList.innerHTML="";
try{

  const users=await getUser();
  displayUsers(users);
}
catch(error){

  console.log(error);
}
}
loadUsers();