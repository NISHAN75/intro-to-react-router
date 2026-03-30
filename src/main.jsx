import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Components/Home/Home.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Root from './Components/Root/Root.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import './index.css';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index:true,Component:Home},
      {path:"mobiles",Component:Mobiles},
      {path:"laptops",Component:Laptops},
      {
        path:"users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:"users/:userId",
        loader:({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path:"user2",
        element:<Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
