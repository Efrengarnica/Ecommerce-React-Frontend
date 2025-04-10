import React from 'react'
import useUserStore from '../store/useUserStore'

export const ModalFalloIngresar = () => {
  // Flags de error
  const errorAuth = useUserStore(state => state.errorLoadingDataUserPorMalaAutenticacion)
  const errorServer = useUserStore(state => state.errorLoadingDataUser)
  const errorNoExisteUser = useUserStore(state => state.errorLoadingDataUserNoExisteUser)
  // Función para cerrar modal (resetea ambos flags)
  const cerrarError = useUserStore(state => state.cerrarModalErrorAlIngresar)
  // El modal está activo (visible) solo si hay algún error
  const modalClass = (errorAuth || errorNoExisteUser || errorServer)
  ? 'modal is-active'
  : 'modal';
  // Mensajes personalizados
  const title = errorAuth
    ? 'Credenciales inválidas'
    : errorNoExisteUser
      ? 'Usuario no encontrado'
      : 'Error del servidor'
  const message = errorAuth
    ? 'La contraseña es incorrecta. Intenta nuevamente.'
    : errorNoExisteUser
      ? 'No existe un usuario registrado con ese correo.'
      : 'El servidor tuvo un problema. Por favor, intenta más tarde.'

  //Dependiendo del status code que me regrese el back con eso decido cual error fue y entonces decido aquí que mostrar al usuario.
  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={cerrarError}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={cerrarError}
          ></button>
        </header>
        <section className="modal-card-body">
          <p>{message}</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={cerrarError}>
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  )
}