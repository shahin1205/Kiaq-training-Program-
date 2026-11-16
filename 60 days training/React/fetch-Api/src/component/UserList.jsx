import { useEffect, useState } from "react"
import '../css/userList.css'

function UserList() {

    const [user, setUser] = useState([])

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
        <div className="user-list">
            {!user?(<p>Loding...</p>):( user.map((user) => (
                <div key={user.id}>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>


                </div>)

            ))}
        </div>
    );
}

export default UserList