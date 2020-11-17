import React from "react";
import Layout from "../components/Layout";
import Prices from "../components/Prices";
// import Fetch from 'isomorphic-unfetch';


const Index = ({ bpi }) => {
    return(
        <Layout>
            <div className='container mt-5'>
                <h1>Welcome to Bitz Price</h1>
                <p>Check current Bitcoin rate</p>
                <Prices bpi={ bpi }/>
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json());
    return {
        bpi: data.bpi,
    }
}

export default Index;
