import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from 'react';
import { Suspense } from "react";
import './App.css'


const Layout = lazy(() => import('./Layout/Layout'));
const Error = lazy(() => import('./Pages/ErrorPage'));
const Login = lazy(() => import('./Pages/Login_Register/Login'));
const Register = lazy(() => import('./Pages/Login_Register/Register'));

function App() {
  // Création d'une const router pour créer le router avec createBrowserRouter
  const router = createBrowserRouter([
    // Création de la route par défaut "/" pour le rediriger sur le composant Layout (element: <Layout/>) et si la page n'exsite pas vers le composant Error (errorElement: <Error/>)
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error/>,

      children: [
      
      {

        path: "/Login",
        element: <Login/>,
        errorElement: <Error/>,

      },

      {

        path: "/Register",
        element: <Register/>,
        errorElement: <Error/>,

      },
    ]
  }

]);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      {/* Nous retourons la const router dans un RouterProvider afin de pouvoir utiliser les routes */}
      <RouterProvider router={router}/>
    </Suspense>
    </>
  )
}

export default App
