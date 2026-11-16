import { useState } from 'react';
import '../css/headerStyle.css'
import SearchTask from './SearchTask';

function Header({searchName}){

    

    return(
        <div className="nave-bar">
            <h1>To-DO-Task</h1>
            <SearchTask searchName={searchName}/>
        </div>
    );
}

export default Header