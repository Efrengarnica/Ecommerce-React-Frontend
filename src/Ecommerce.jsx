import React from 'react'
import { Navbar } from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { EcommercePage } from './pages/EcommercePage'
import { AcercaDePage } from './pages/AcercaDePage'
import { ContactoPage } from './pages/ContactoPage'
import { PerfilPage } from './pages/PerfilPage'

export const Ecommerce = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<EcommercePage></EcommercePage>}></Route>
        <Route path='/acercaDe' element={<AcercaDePage></AcercaDePage>}></Route>
        <Route path='/contacto' element={<ContactoPage></ContactoPage>}></Route>
        <Route path='/perfil' element={<PerfilPage></PerfilPage>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>
    </>
  )
}