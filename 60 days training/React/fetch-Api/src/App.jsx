import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import UserList from './component/UserList'
import UserForm from './component/UserForm'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserForm/>}/>
      <Route path="/UserList" element={<UserList/>}/> 
    </Routes>
    </BrowserRouter>
    // <>
    // <UserForm/>
    // <UserList/>

    
    // </>
  )
}

export default App
