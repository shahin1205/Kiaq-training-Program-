import { useRef, useState } from "react";

function SearchTask({searchName}){

    const searchInputRef=useRef(null);

    function onSearch(event){
        event.preventDefault();
 
        const value=searchInputRef.current? searchInputRef.current.value.trim() : ""

        if(typeof searchName==='function'){
        searchName(value);
        }
       if(searchInputRef.current){
        searchInputRef.current.value="";
        searchInputRef.current.focus();
        }
        
    }
return(
            <form action="" onSubmit={onSearch} >
             <label htmlFor="searchName"></label>
             <input type="text" placeholder="Task Name" id="searchName" ref={searchInputRef} />
            <button type="sumbit">search</button>
        </form>
        )
//     const [searchTask, setSearhTask]=useState("");

//     function onSearch(event){
// event.preventDefault();
        
//         searchName(searchTask.trim());
//         setSearhTask("");
//     }
//     return (

//         <form action="" onSubmit={onSearch}>
//             <label htmlFor="searchName"></label>
//             <input type="text" placeholder="Task name" id="searchName" value={searchTask}
//              onChange={(event)=>setSearhTask(event.target.value)}/>
//             <button type="sumbit">search</button>
//         </form>
//     );
}

export default SearchTask