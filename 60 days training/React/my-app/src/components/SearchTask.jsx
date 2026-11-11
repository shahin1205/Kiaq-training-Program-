import { useEffect, useState } from "react";


function SearchTask({searchText}) {

    const [searchItem, setSearchItem] = useState("");

    

    function onSearch(event) {

        event.preventDefault();

        searchText(searchItem.trim());

        setSearchItem("");
    }

useEffect(()=>{ 
console.log("search item " + searchItem);

 },[searchItem])
    return (
        <form action="" onSubmit={onSearch} onInput={onSearch}>
            <label htmlFor="searchText">serachTask</label>
            <input id="searchText" type="text" placeholder="" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} />
            <button type="submit">Search</button>
        </form>
        // <div>
        //     <label htmlFor="searchText">serachTask</label>
        //     <input id="searchText" type="text" placeholder="" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} />
            
        // </div>
               
    )
}

export default SearchTask;