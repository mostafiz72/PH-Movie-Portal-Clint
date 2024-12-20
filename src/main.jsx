import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import AllMovies from './Components/AllMovies.jsx';
import AddMovies from './Components/AddMovies.jsx';
import FavoritesMovies from './Components/FavoritesMovies.jsx';
import ExtranPageOne from './Components/ExtranPageOne.jsx';
import ExtraPageTwo from './Components/ExtraPageTwo.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Login from './Components/LoginPages/Login.jsx';
import Register from './Components/LoginPages/Register.jsx';
import MoviesDetails from './Components/MovieDetails/MoviesDetails.jsx';
import UpdateMovie from './Components/UpdateMovies/UpdateMovie.jsx';
import AuthProvider from './AuthProviders/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allmovives",
        element: <AllMovies />,
        loader: ()=> fetch('https://movie-portal-back.vercel.app/movie')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><MoviesDetails /></PrivateRoute>,
        loader: ({ params })=> fetch(`https://movie-portal-back.vercel.app/details/${params.id}`)
      },
      {
        path: "/addmovies",
        element: <AddMovies />,
      },
      {
        path: "/updatemovie/:id",
        element: <UpdateMovie />,
        loader: ({ params })=> fetch(`https://movie-portal-back.vercel.app/details/${params.id}`)
      },
      {
        path: "/favoritesmovies",
        element: <FavoritesMovies />,
        loader: ()=> fetch('https://movie-portal-back.vercel.app/addfavorite')
      },
      {
        path: "/extraone",
        element: <ExtranPageOne />,
      },
      {
        path: "/extratwo",
        element: <ExtraPageTwo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
