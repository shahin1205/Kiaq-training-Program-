import { useRef, useState } from "react"

function SearchUser({searchName}){

    const userName=useRef(null);

    function searchUser(event){
        event.preventDefault();

        searchName(userName.current.value);
        userName.current.value="";
        
        
    }
    return(
        <>
        <form action="" onSubmit={searchUser} >
            <input type="text" placeholder="search name" ref={userName} />
            <button type="submit">search</button>
        </form>
        </>
    )
}

export default SearchUser;