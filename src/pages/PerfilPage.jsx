import React, { useState } from 'react'
import { Form } from '../components/Form'
import useUserStore from '../store/useUserStore'
import { data } from 'react-router-dom'
import '../styles/PerfilPage.css'

export const PerfilPage = () => {
  
  const dataUser = useUserStore(state => state.dataUser)
  const isActive = useUserStore(state => state.isActive)
  const modificarDatosUsuario = useUserStore(state => state.modificarDatosUsuario)

  const [data, setData] = useState(dataUser? dataUser: null)

  async function updateData(updatedData) {
    setData({ ...data, ...updatedData });
  }

  async function guardarData() {
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("Por favor llena todos los campos");
      return;
    }
    const newUser = {
      ...data
    };
    await modificarDatosUsuario( dataUser.id, newUser);
    window.alert("Se guardaron los datos correctamente")
  }

  return (
    isActive ? (
      <section className="section mt-6" >
        <div className="container">
          <h1 className="title">Datos del usuario</h1>
          <Form
            dataUsuario={dataUser}
            modificarData={updateData}
            guardarCambios={guardarData}
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