import { create } from "zustand";
import { getUser, saveUser, editAllUser, editUser } from '../../api/requestsUser'

const useUserStore = create((set, get) => ({

    dataUser:null,
    isActive:false,
    fetchUser: async (correoUser, passwordUser) => {
        try {
          const user = await getUser(correoUser, passwordUser)
          set({
            dataUser: user,
            isActive:true
          })
        } catch (error) {
          console.error("Error al obtener usuario:", error)
          throw error
        }
      },
    cerrarSesion : () => {
      set({
        dataUser: null,
        isActive:false
      })
    },
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