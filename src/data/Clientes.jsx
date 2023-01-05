export const getClientes = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    return data
}

export const getCliente = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const data = await response.json();
    return data
}

export const addCliente = async (datos) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const updateCliente = async (id, datos) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const deleteCliente = async(id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE",
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}