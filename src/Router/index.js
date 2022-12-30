import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Services from '../Pages/Services';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/About",
        element: <About></About>,
    },
    {
        path: "/Contact",
        element: <Contact></Contact>,
    },
    {
        path: "/Portfolio",
        element: <Portfolio></Portfolio>,
    },
    {
        path: "/Services",
        element: <Services></Services>,
    },



]);

export default router