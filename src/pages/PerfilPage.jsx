import React, { useState } from 'react'
import { Form } from '../components/Form'
import useUserStore from '../store/useUserStore'
import { data } from 'react-router-dom'
import '../styles/PerfilPage.css'
import { ModalCambiosPerfil } from '../components/ModalCambiosPerfil'
import { ModalCambioContraseña } from '../components/ModalCambioContraseña'
import { ModalAvisosCambioContraseña } from '../components/ModalAvisosCambioContraseña'

export const PerfilPage = () => {
  
  const dataUser = useUserStore(state => state.dataUser)
  const isActive = useUserStore(state => state.isActive)
  const modificarDatosUsuario = useUserStore(state => state.modificarDatosUsuario)

  const [data, setData] = useState(dataUser? dataUser: null)

  async function updateData(updatedData) {
    setData({ ...data, ...updatedData });
  }

  async function guardarData(e) {
    e.preventDefault(); 
    if (data.name === "" || data.email === "") {
      alert("Por favor llena todos los campos");
      return;
    }
    const newUser = {
      ...data
    };
    await modificarDatosUsuario( dataUser.id, newUser);
  }

  //Funcion que me ayuda a regresar los valores a como estaban antes.
  //Se vuelve a poner los valores iniciales, pero una copia MEJOR.
  const regresarValoresAComoEstaban = () => {
    setData({...dataUser})
  }


  //Valores que me ayudan a abrir el modal de cambio de contraseña.
  const [estaAbiertoModalCambioContraseña, setEstaAbiertoModalCambioContraseña] = useState(false)
  const abrirModalCambioContraseña = () => {
    setEstaAbiertoModalCambioContraseña(true)
  }
  const cerrarModalCambioContraseña = () => {
    setEstaAbiertoModalCambioContraseña(false)
  }

  // Esto es para modificar solo la contraseña
  const [dataContraseña, setDataContraseña] = useState({})
  const modificarContraseñaUsuario = useUserStore(state => state.modificarContraseñaUsuario)

  async function updateDataContraseña(updatedDataContraseña) {
    setDataContraseña({ ...dataContraseña, ...updatedDataContraseña });
  }
  
  async function guardarContraseña(e) {
    e.preventDefault(); 
    if(Object.keys(dataContraseña).length < 3){
      alert("Por favor llena todos los campos");
      return
    }
    if (dataContraseña.passwordActual === "" || dataContraseña.passwordNuevo === "" || dataContraseña.passwordRepeticion === "") {
      alert("Por favor llena los campos");
      return;
    }
    if (dataContraseña.passwordNuevo !== dataContraseña.passwordRepeticion){
      alert("La contraseña nueva que quieres actualizar no coincide con su repetición.Intenta de nuevo.")
      return
    }
    const newDataPassword = {
      "passwordActual": dataContraseña.passwordActual,
      "passwordNuevo": dataContraseña.passwordNuevo
    };
    await modificarContraseñaUsuario( dataUser.id, newDataPassword);
    
  }


  return (
    isActive ? (
      <section className="section mt-6" >
        <div className="container">
          <ModalCambiosPerfil/>
          
          <ModalCambioContraseña
            estadoDelModal= {estaAbiertoModalCambioContraseña}
            cerrarModal= {cerrarModalCambioContraseña}
            modificarContraseña= {updateDataContraseña}
            guardarCambios= {guardarContraseña}
          />
          <ModalAvisosCambioContraseña/>
          <h1 className="title">Datos del usuario</h1>
          <Form
            dataUsuario={data}
            modificarData={updateData}
            guardarCambios={guardarData}
            resetarValores={regresarValoresAComoEstaban}
            abrirModal= {abrirModalCambioContraseña}
          >
          </Form>
        </div>
      </section >
    ) : (
      <div className='inicia-sesion is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
        <h1 className='title mt5'>Tienes que iniciar sesión</h1>
      </div>
    )
  )
}