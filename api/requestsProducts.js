//Me ayuda a conseguir todos los productos hombre.
async function getMenProducts() {
    const response = await fetch("http://localhost:8001/products/hombre", {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error fetching products");
    }
    const products = await response.json()
    return products
}

//Me ayuda a conseguir todos los productos mujer.
async function getWomenProducts() {
    const response = await fetch("http://localhost:8001/products/mujer", {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error fetching products");
    }
    const products = await response.json()
    return products
}

//Me ayuda a guardar un producto en la base de datos.
async function saveProduct(product) {
    console.log(product)
    const response = await fetch("http://localhost:8001/products/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

//Me ayuda a editar un producto en la base de datos.
async function editProduct(card) {
    const response = await fetch(`http://localhost:8001/cards/${card.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

//Me ayuda a eliminar un producto en la base de datos.
async function deleteProduct(cardId) {
    const response = await fetch(`http://localhost:8001/cards/${cardId}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

//Me ayuda a conseguir todos los productos con categoría mujer que coincidan con una palabra.
async function getWomenProductsBySearch(search) {
    const response = await fetch(`http://localhost:8001/products/search/mujer/?search=${encodeURIComponent(search)}`, {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error get products women by search");
    }
    const products = await response.json()
    return products
}

//Me ayuda a conseguir todos los productos con categoría hombre que coincidan con una palabra.
async function getMenProductsBySearch(search) {
    const response = await fetch(`http://localhost:8001/products/search/hombre/?search=${encodeURIComponent(search)}`, {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error get products men by search");
    }
    const products = await response.json()
    return products
}

export { getMenProducts, getWomenProducts, saveProduct, editProduct, deleteProduct, getWomenProductsBySearch, getMenProductsBySearch}