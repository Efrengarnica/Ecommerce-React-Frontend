//Me ayuda a conseguir el usuario por medio de su correo y contraseña
async function getUser(correoUser, passwordUser) {
    const data = {
        "email":correoUser,
        "password":passwordUser
    }
    const response = await fetch(`http://localhost:8001/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    //Aquí dependiendo del status code del back le doy un nombre para después sepa que mostrale al usaurio en el front.

    //Contraseña incorrecta.
    if (response.status === 401) {
    throw new Error("Las credenciales proporcionadas no coinciden.");  
    }
    //No existe email registrado.
    if (response.status === 404) {
        throw new Error("No hay usuario registrado con ese email.");  
    }
    //Cualquier otro error.
    if (!response.ok) {
        throw new Error("Error get user");
    }
    const user = await response.json();
    return user
}

//Me ayuda a registrar un usuario
async function saveUser(user) {
    const response = await fetch("http://localhost:8001/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
     //Ya existe ese email, tiene que elegir otro.
    if (response.status === 400) {
        throw new Error("Ese email ya está en uso por otro usuario.");  
    }

    if (!response.ok) {
        throw new Error("Error save user");
    }

    const userSaved = await response.json()
    return userSaved
}

//Me ayuda a registrar un user y crear un carrito al mismo tiempo, a pesar de eso se sigue devolviendo un user.
//Por que tengo este método y no ocupé los 2 por separado, la razon es que puede que si ocupo los dos por separado ocurra un error al crear el cart
//y si ya se habia creado el user entonces tendria un user sin cart.
async function saveUserAndCreateCart(user) {
    const response = await fetch("http://localhost:8001/users/andCart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
     //Ya existe ese email, tiene que elegir otro.
    if (response.status === 400) {
        throw new Error("Ese email ya está en uso por otro usuario.");  
    }
    //Cualquier otro error.
    if (!response.ok) {
        throw new Error("Error save user");
    }
    const userSaved = await response.json()
    return userSaved
}

//Me ayuda a modificar todo el usuario.
async function editAllUser(idUser, user) {
    const response = await fetch(`http://localhost:8001/users/${idUser}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    if (!response.ok) {
        throw new Error("Error modified user");
    }
    const userModified = await response.json()
    return userModified
}

//Me ayuda a modificar una parte del usuario.
async function editUser(idUser, data) {
    const response = await fetch(`http://localhost:8001/users/${idUser}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    //Ya existe ese email, tiene que elegir otro.
    if (response.status === 400) {
        throw new Error("Ese email ya está en uso por otro usuario.");  
    }
    //Cualquier otro error.
    if (!response.ok) {
        throw new Error("Error edit user");
    }
    const user = await response.json()
    return user
}

//Me ayuda a modificar la contraseña del usuario siemore y cuando nos dé la contraseña actual.
async function editUserPassword(idUser, dataPassword) {
    const response = await fetch(`http://localhost:8001/users/${idUser}/changePassword`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPassword),
    })
    //Error que muestra cuando las credenciales son inválidas
    if (response.status === 401) {
        throw new Error("La contraseña que proporcionaste es incorrecta.");  
    }
    //Cualquier otro error.
    if (!response.ok) {
        throw new Error("Error edit user");
    }
    const user = await response.json()
    return user
}

export { getUser, saveUser, editAllUser, editUser, saveUserAndCreateCart, editUserPassword}