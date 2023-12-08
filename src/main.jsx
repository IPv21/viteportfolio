import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/index.css'

import App from './App.jsx';
import Landing from './pages/Landing.jsx';
import TheMan from './pages/TheMan.jsx';
import TheWork from './pages/TheWork.jsx';
import TheCall from './pages/TheCall.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: '/man',
                element: <TheMan />,
            },
            {
                path: '/work',
                element: <TheWork />,
            },
            {
                path: '/call',
                element: <TheCall />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
