import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarLayout from './SidebarLayout/SidebarLayout.jsx';
import { Home, About, ContactUs, Users, Login, Products } from "./components/index.js"


function createSidebarComponents(component) {
  return <SidebarLayout>
    {component}
  </SidebarLayout>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={createSidebarComponents(<App />)} />
      <Route path='/home' element={createSidebarComponents(<Home />)} />
      <Route path='/about' element={createSidebarComponents(<About />)} />
      <Route path='/contact' element={createSidebarComponents(<ContactUs />)} />
      <Route path='/products' element={createSidebarComponents(<Products />)} />
      <Route path='/users' element={createSidebarComponents(<Users />)} />
      <Route path='/login' element={createSidebarComponents(<Login />)} />
    </Routes>
  </BrowserRouter>
)
