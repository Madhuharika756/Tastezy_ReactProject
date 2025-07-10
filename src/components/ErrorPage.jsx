import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <div className="error-main-container">
                <div className="error-container">
                    <div className="error-message">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjS0jEu12cGCjsxtWTQsN6mczasSI1fNx-hQCzOpRwOt4LZJA4Km_mT1_hdwvZWa0yglA&usqp=CAU" alt="error-image" className="error-img" />
                            <h2>{err.statusText}</h2>
                        </div>
                        <div>
                            <h1>OOPS!🫢</h1>
                            <h1>Something Went wrong!!</h1>
                            <h3>This is not the web page you are looking for!!</h3>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ErrorPage;