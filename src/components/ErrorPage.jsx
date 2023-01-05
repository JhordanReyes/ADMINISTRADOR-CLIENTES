import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error)
    
    return (
        <div className="space-x-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - CLIENTES</h1>
            <p className="text-center mt-10">Hubo un error</p>
            <p className="text-center mt-5">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage