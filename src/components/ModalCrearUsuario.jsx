import React, { useEffect } from 'react'
import useUserStore from '../store/useUserStore'
import { useNavigate } from 'react-router-dom'

export const ModalCrearUsuario = () => {
  
  // Flags y acción de cierre
  const exitoAlModificar = useUserStore(state => state.exitoAlCrearUsuario)
  const modalActive = useUserStore(state => state.modalCrearUsuario)
  const errorEmailEnUso = useUserStore(state => state.errorCrearUsuarioEmailEnUso)
  const errorServidor = useUserStore(state => state.errorCrearUsuarioFallaServidor)
  const cerrarModal = useUserStore(state => state.cerrarModalFracasoAlCrearUsuario)

  //Necesario para navegar a otra pestaña.
  const navigate = useNavigate()

  //Para navegar a Login.
  const navegarLogin = () => {
    navigate('/login')
  }

  //Me ayuda a cerrar el modal de éxito al registrar un usaurio y redirigirlo a la página de Login.
  const cerrarYRedirigirAInicio = () => {
    cerrarModal()
    navegarLogin()
  }

  // Determinar tipo de mensaje
  let title = ''
  let message = ''
  let boxClass = 'box '

  if (errorEmailEnUso) {
    title = 'Email en uso'
    message = 'El email que ingresaste ya está en uso por otro usuario. Por favor elige uno diferente. Aún no se han guardado tus cambios.'
    boxClass += 'is-danger'
  } else if (errorServidor) {
    title = 'Error del servidor'
    message = 'Ocurrió un problema al guardar tus cambios. Por favor intenta de nuevo más tarde.'
    boxClass += 'is-warning'
  } else if (exitoAlModificar) {
    // Éxito
    title = '¡Cambios guardados!'
    message = 'Se ha creado tu usuario correctamente.'
    boxClass += 'is-success'
  } else {
    // Éxito
    title = '¡Realizando cambios...!'
    message = 'Espere un momento.'
    boxClass += 'is-success'
  }

  return (
    <div className={`modal${modalActive ? ' is-active' : ''}`} id="miModal">
      <div className="modal-background" onClick={cerrarModal}></div>
      <div className="modal-content">
        <div className={boxClass}>
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={cerrarModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <p>{message}</p>
          </section>
          <footer className="modal-card-foot">
            {exitoAlModificar ? (
              // Si éxito: botón con estilo distinto y quizás otra acción
              <button
                className="button is-primary"
                onClick={cerrarYRedirigirAInicio}
              >
                Inicia sesion
              </button>
            ) : (
              // Si hay error (email en uso o problema servidor) o en espera: solo cerrar
              <button className="button" onClick={cerrarModal}>
                Cerrar
              </button>
            )}
          </footer>
        </div>
      </div>
    </div>
  )
}