import { create } from "zustand";
import { getUser, saveUser, editAllUser, editUser } from '../../api/requestsUser'

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

    //Modifica los datos del usuario activo.
    modificarDatosUsuario: async (idUser, data) => {
      try {
        const user = await editUser(idUser, data)
        set({dataUser:user})

      } catch(error){
        console.error("Error al modificar al usuario:", error)
      }
    }

}))

export default useUserStore;