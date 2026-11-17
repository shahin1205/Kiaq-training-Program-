import { createContext, useState } from "react"
import UserItem from "./UserItem";
import { Link } from 'react-router-dom';

export const shareData=createContext();

function UserForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [userData,setUserData]=useState(null);
    function addUser(event){
        event.preventDefault();

        const onadded={
            name:name,
            email:email
        };
        setUserData(onadded);



    }
    
    // function addUser(event) {
    //     event.preventDefault();
    //     fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name: name,
    //             email: email
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },

    //     })
    //         .then(response => response.json())
    //         .then(json => console.log(json))

            
    // }



    return (
        <>
        <button><Link to="UserList">User List</Link></button>

        
            <form action="" onSubmit={addUser}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />

                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                <button type="submit"> Add User </button>
            </form>
             <shareData.Provider value={userData}>
        <UserItem/>
    </shareData.Provider>
        </>
    )
}

export default UserForm 