import { create } from "zustand";
import { getUser, saveUser, editAllUser, editUser, saveUserAndCreateCart, editUserPassword } from '../../api/requestsUser'

const useUserStore = create((set, get) => ({

    //Me ayuda a conseguir la información del usuario.
    dataUser:[],
    isActive:false,
    isloadingDataUser:false,
    //Errores que puede regresarme el back, aquí registro cual es el error.
    errorLoadingDataUser: false,
    errorLoadingDataUserPorMalaAutenticacion: false,
    errorLoadingDataUserNoExisteUser:false,
    cerrarModalErrorAlIngresar : () => set({errorLoadingDataUser:false, errorLoadingDataUserPorMalaAutenticacion: false, 
      errorLoadingDataUserNoExisteUser:false
     }),
    fetchUser: async (correoUser, passwordUser) => {
        set({isloadingDataUser:true, errorLoadingDataUser:false, errorLoadingDataUserPorMalaAutenticacion: false, errorLoadingDataUserPorMalaAutenticacion: false})
        try {
          const user = await getUser(correoUser, passwordUser)
          set({
            dataUser: user,
            isActive:true
          })
        } catch (error) {
          if (error.message === "Las credenciales proporcionadas no coinciden.") {
            set({ errorLoadingDataUserPorMalaAutenticacion: true });
          } else if (error.message === "No hay usuario registrado con ese email."){
            set({errorLoadingDataUserNoExisteUser:true})
          }
          else {
            set({ errorLoadingDataUser: true });
          }
        } finally {
          set({isloadingDataUser:false})
        }
    },

    //Finaliza la sesión del usuario.
    cerrarSesion : () => {
      set({
        dataUser: null,
        isActive:false
      })
    },

    // Modifica los datos del usuario activo, menos la contraseña.
    isLoadingModificarDatosUsuario: false,
    errorModificarDatosUsuarioEmailEnUso: false,
    errorModificarDatosUsuarioFallaServidor: false,
    modalModificarDatosUsuario: false,
    exitoAlModificarDatosUsuario: false,
    cerrarModalModificarDatosUsuario: () => {set({modalModificarDatosUsuario:false})},
    modificarDatosUsuario: async (idUser, data) => {
      set({isLoadingModificarDatosUsuario: true, errorModificarDatosUsuarioEmailEnUso: false, errorModificarDatosUsuarioFallaServidor: false, 
        modalModificarDatosUsuario:true, exitoAlModificarDatosUsuario: false})
      try {
        const user = await editUser(idUser, data)
        set({dataUser:user, exitoAlModificarDatosUsuario: true})
      } catch(error){
        if (error.message === "Ese email ya está en uso por otro usuario.") {
          set({ errorModificarDatosUsuarioEmailEnUso: true});
        } else {
          set({ errorModificarDatosUsuarioFallaServidor: true });
        }
      } finally {
        set({isLoadingModificarDatosUsuario: false})
      }
    },

    // Me ayuda a crear un usuario y su carrito a la vez.
    isLoadingCrearUsuario: false,
    errorCrearUsuarioEmailEnUso: false,
    errorCrearUsuarioFallaServidor:false,
    modalCrearUsuario: false,
    exitoAlCrearUsuario:false,
    cerrarModalFracasoAlCrearUsuario: () => {set({modalCrearUsuario:false})},
    crearUsuario: async(userData) => {
      set({isLoadingCrearUsuario:true, errorCrearUsuarioEmailEnUso: false, modalCrearUsuario:true, 
        errorCrearUsuarioFallaServidor:false, exitoAlCrearUsuario:false})
      try {
        await saveUserAndCreateCart(userData)
        set({exitoAlCrearUsuario: true})
      } catch(error){
        if (error.message === "Ese email ya está en uso por otro usuario.") {
          set({ errorCrearUsuarioEmailEnUso: true});
        } else {
          set({ errorCrearUsuarioFallaServidor: true });
        }
      } finally {
        set({isLoadingCrearUsuario: false})
      }
    },

    //Me ayuda a modificar la contraseña del usuario con base en su contraseña actual.
    isLoadingModificarContraseñaUsuario: false,
    errorModificarContraseñaUsuarioContraseñaIncorrecta: false,
    errorModificarContraseñaUsuarioFallaServidor: false,
    modalModificarContraseñaUsuario: false,
    exitoAlModificarContraseñaUsuario: false,
    cerrarModalModificarContraseñaUsuario: () => {set({modalModificarContraseñaUsuario:false})},
    modificarContraseñaUsuario: async (idUser, dataPassword) => {
      set({isLoadingModificarContraseñaUsuario: true, errorModificarContraseñaUsuarioContraseñaIncorrecta: false, errorModificarContraseñaUsuarioFallaServidor: false, 
        modalModificarContraseñaUsuario:true, exitoAlModificarContraseñaUsuario: false})
      try {
        const user = await editUserPassword(idUser, dataPassword)
        set({dataUser:user, exitoAlModificarContraseñaUsuario: true})
      } catch(error){
        if (error.message === "La contraseña que proporcionaste es incorrecta.") {
          set({ errorModificarContraseñaUsuarioContraseñaIncorrecta: true});
        } else {
          set({ errorModificarContraseñaUsuarioFallaServidor: true });
        }
      } finally {
        set({isLoadingModificarContraseñaUsuario: false})
      }
    }

}))

export default useUserStore;