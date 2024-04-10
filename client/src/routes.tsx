import PathConstant from './routes/path_constants';
import LoginPage from './components/signin';
import SignupPage from './components/signup';

const routes = [
    {
      path: PathConstant.SIGNIN,
      element : <LoginPage />
    },
    {
      path: PathConstant.SIGNUP,
      element: <SignupPage />
    }
  ];

export default routes;