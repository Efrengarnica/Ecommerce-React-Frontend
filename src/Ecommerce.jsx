import React from 'react'
import { Navbar } from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { EcommercePage } from './pages/EcommercePage'
import { AcercaDePage } from './pages/AcercaDePage'
import { ContactoPage } from './pages/ContactoPage'
import { PerfilPage } from './pages/PerfilPage'
import { ProductosDeHombrePage } from './pages/ProductosDeHombrePage'
import { ProductosDeMujerPage } from './pages/ProductosDeMujerPage'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import './Ecommerce.css'
import { ModalCarrito } from './components/ModalCarrito'
import { ModalCompra } from './components/ModalCompra'
import { ModalModificarCarrito } from './components/ModalModificarCarrito'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Ecommerce = () => {
  return (
    <div className='containerPrincipal'>
      <Navbar></Navbar>
      <ModalCarrito/>
      <ModalCompra/>
      <ModalModificarCarrito/>
      <Routes>
        <Route path='/' element={<EcommercePage></EcommercePage>}></Route>
        <Route path='/acercaDe' element={<AcercaDePage></AcercaDePage>}></Route>
        <Route path='/contacto' element={<ContactoPage></ContactoPage>}></Route>
        <Route path='/perfil' element={<PerfilPage></PerfilPage>}></Route>
        <Route path='/productos-hombre' element={<ProductosDeHombrePage></ProductosDeHombrePage>}></Route>
        <Route path='/productos-mujer' element={<ProductosDeMujerPage></ProductosDeMujerPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>
    </div>
  )
}