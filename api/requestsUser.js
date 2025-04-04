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
    if (!response.ok) {
        throw new Error("Error get user");
    }
    const user = await response.json()
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
    if (!response.ok) {
        throw new Error("Error edit user");
    }
    const user = await response.json()
    return user
}

export { getUser, saveUser, editAllUser, editUser}