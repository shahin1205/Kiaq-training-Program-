import { useContext, useEffect } from "react";
import { shareData } from "./UserForm";

function UserItem(){
const getUserData= useContext(shareData);
    
          useEffect(()=>{  
            if(getUserData){
            fetch('http://localhost:3000/users', {
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'POST',
            body: JSON.stringify({
                name: getUserData.name,
                email: getUserData.email
            }),
            

        })
            .then(response => response.json())
            .then(json => console.log(json)) }},[getUserData]);

            return(
                <div></div>
            );
       

            
    
}

export default UserItem