import React from 'react'
import useUserStore from '../store/useUserStore'

export const ModalCambiosPerfil = () => {
  // Flags y acción de cierre
  const exitoAlModificar = useUserStore(state => state.exitoAlModificarDatosUsuario)
  const modalActive = useUserStore(state => state.modalModificarDatosUsuario)
  const errorEmailEnUso = useUserStore(state => state.errorModificarDatosUsuarioEmailEnUso)
  const errorServidor = useUserStore(state => state.errorModificarDatosUsuarioFallaServidor)
  const cerrarModal = useUserStore(state => state.cerrarModalModificarDatosUsuario)

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
  } else if (exitoAlModificar){
     // Éxito
     title = '¡Cambios guardados!'
     message = 'Tus datos se han actualizado correctamente.'
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
            
              <button className="button" onClick={cerrarModal}>
                Cerrar
              </button>
        
          </footer>
        </div>
      </div>
    </div>
  )
}