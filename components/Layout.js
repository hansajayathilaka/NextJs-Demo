import React from "react";
import Navbar from "./Navbar";
import Head from 'next/head';


const Layout = ({ children }) => {
    return(
        <div>
            <Head>
                <title>Bitz Price</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
            </Head>
            <Navbar/>
            { children }
        </div>
    )
}

export default Layout;
