import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PathConstant from './../routes/path_constants';

export default function signupPage(){
    return(
        <div className='flex justify-center items-center bg-gray-300 h-screen'>
        <div className='bg-white text-gray-700 p-8 w-80 shadow-xl rounded-xl'>
          <form action="">
            <div className='flex flex-col justify-center items-center'>
                <div className='login-icon'>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div className='form-header'>
                  JWT Authentication
                </div>
            </div>

            <div className='flex flex-col my-2'>
              <label htmlFor="">Full Name: </label>
              <input type="email" name="" id="" className='textbox' />
            </div>

            <div className='flex flex-col my-2'>
              <label htmlFor="">Email: </label>
              <input type="text" name="" id="" className='textbox' />
            </div>

            <div className='relative my-2'>
              <label htmlFor="">Password: </label>
              <div className='show-password'>
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
              <input type="password" name="" id="" className='textbox' />
            </div>

            <div className='relative my-2'>
              <label htmlFor="">Confirm Password: </label>
              <div className='show-password'>
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
              <input type="password" name="" id="" className='textbox' />
            </div>

            <div className='text-center my-4'>
              <button type="button" className='button'>
                Create Account
              </button>
            </div>
            <div className='flex gap-2 text-sm'>
              <p className='text-gray-600 italic'>Already have an account? Login</p>
              <Link to={PathConstant.SIGNIN} className='text-blue-600 underline italic cursor-pointer'>
                here
              </Link>
            </div>

          </form>
        </div>
      </div>  
    );
}