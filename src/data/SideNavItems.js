import React, { lazy, Suspense } from 'react';
import AddProducts from '../components/AddProducts';
import DeleteProducts from '../components/DeleteProducts';
import ViewDetails from '../components/ViewDetails';
import UpdateProducts from '../components/UpdateProducts';

import ChartDisplay from '../components/ChartDisplay';
import { SignIn } from '../components/ProductApi/ProductApi';
export const Options=[
    {
        name: 'Add Product',
        url:'/add',
        class:'w3-bar-item w3-button w3-padding-large'
    },
    {
        name:'Delete Product',
        url:'/delete',
        class:'w3-bar-item w3-button w3-padding-large'
    },
     ];
  export   const routes = [
        
        {
          path: "/products/add",
          main: lazy(()=>import('../components/AddProducts'))
        },
        {
          path: "/products/delete",
          main:lazy(()=>import('../components/DeleteProducts'))
        },
        {
            path: "/products/view",
            exact: true,
            main: lazy(()=>import('../components/ViewDetails'))
          },
          {
            path: "/products/update",
            main: lazy(()=>import('../components/UpdateProducts'))
          },
        {
          path: "/products/chart",
          main: lazy(()=>import('../components/ChartDisplay'))
        
        },

      ];