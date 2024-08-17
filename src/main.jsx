import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
