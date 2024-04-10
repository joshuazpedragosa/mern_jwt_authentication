import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './components/404';
import Layout from './components/layout';
import routes from './routes';

function App() {

  const router = createBrowserRouter([
    {
      element : <Layout />,
      errorElement : <ErrorPage />,
      children: routes
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
