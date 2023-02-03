import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'
//  import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Home from './Pages/Home';

import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UtilitiesMain from './Pages/Utilities/UtilitiesMain'

import CardProducts from './Pages/Utilities/CardProducts/CardProducts';
import DeclineCodes from './Pages/Utilities/DeclineCode/DeclineCodes';
import MerchantReference from './Pages/Utilities/MerchantReference/MerchantReference';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "utilities/*",
        element: <UtilitiesMain />,
        children:[
          {
            path:"merchRef",
            element:<MerchantReference/>
            
          },
          {
            path:"cardProd",
            element:<CardProducts/>
          },
          {
            path:"declineCodes",
            element:<DeclineCodes/>
          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
