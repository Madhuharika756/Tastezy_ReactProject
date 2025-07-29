import { useRouteError } from "react-router-dom";
import { ERROR_IMG_URL } from "../utils/constants";
import { Fragment } from "react";
const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <>
                <div className="my-auto">
                    <h2 className=" text-3xl font-bold text-center">{err.statusText}</h2>
                    <img src={ERROR_IMG_URL} alt="error-image" className="mx-auto"/>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold">OOPS!🫢</h1>
                    <h1 className="text-xl font-bold">Something Went wrong</h1>
                    <h3 className="text-xl font-bold">This is not the web page you are looking for!!</h3>
                </div>
            </>

        </>
    )
}

export default ErrorPage;