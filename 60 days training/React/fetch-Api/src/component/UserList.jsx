import { useEffect, useState } from "react"
import '../css/userList.css'
import SearchUser from "./SearchUser"

function UserList() {

    const [user, setUser] = useState([])
    const [searchName, setSearchName]=useState("");

    const filterUser=user.filter((user)=>{
        if(searchName===""){
            return true;
        }
        return user.name.toLowerCase().includes(searchName.toLowerCase().trim());
    })

    useEffect(() => {

        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(json => setUser(json))
    }, [])
// https://jsonplaceholder.typicode.com/users

    // if (!user) {
    //     return <p>Loding...</p>
    // }


    return (

        <>
        
            <SearchUser searchName={setSearchName}/>
            <div className="user-list">
            {!filterUser?(<p>Loding...</p>):( filterUser.map((user) => (
                <div key={user.id}>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>


                </div>)

            ))}
        </div></>
        
    );
}

export default UserList