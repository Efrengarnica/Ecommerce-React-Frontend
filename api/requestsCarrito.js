//GET carrito del usuario por medio de el idCarrito
async function getCarritoUser(idCarritoUser) {
    const response = await fetch(`http://localhost:8001/carts/${idCarritoUser}`, {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error fetching cart");
    }
    const cart = await response.json()
    return cart
}

//Me ayuda a subir un artículo al carrito del usuario.
async function postCarritoItem(data) {
    const response = await fetch("http://localhost:8001/carts/items/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error("Error posting cartItem");
    }
    const cartItem = await response.json()
    return cartItem
}

//Me ayuda a cambiar la cantidad del producto en el carrito del usuario.
async function editCartItem(data, idCartItem) {
    const response = await fetch(`http://localhost:8001/carts/items/${idCartItem}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error("Error patch cartItem");
    }
    const resp = await response.json()
    return resp
}

//Me ayuda a eliminar un producto del carrito del usuario.
async function deleteCartItem(idCartItem) {
    const response = await fetch(`http://localhost:8001/carts/items/${idCartItem}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("Error delete cartItem");
    }
    const resp = await response.json()
    return resp
}

//Me ayuda a eliminar todos los items del carrito y no el carrito como tal.
async function clearCartItems(idCarritoUser) {
    const response = await fetch(`http://localhost:8001/carts/${idCarritoUser}/clear`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("Error delete cartItems");
    }
    const resp = await response.json()
    return resp
}

export {getCarritoUser, postCarritoItem, editCartItem, deleteCartItem, clearCartItems}