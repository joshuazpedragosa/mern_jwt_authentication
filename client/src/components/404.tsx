import { Link } from "react-router-dom";
import PathConstant from './../routes/path_constants';

export default function ErrorPage(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-5xl uppercase font-bold text-gray-600">
                    404 - Page not found!
                </h1> 
                <Link to={PathConstant.SIGNIN} className="underline text-blue-600 cursor-pointer">
                    Return to Login Page
                </Link>
            </div>
        </div>
    );
}