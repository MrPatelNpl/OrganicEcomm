import React from 'react'
import Head from 'next/head'
import Navbar from '@/pages/HamroGarden/components/navbar'
import Product_Card from '@/pages/HamroGarden/components/product-card'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Hamro Garden - The organic store</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            </Head>
            <Navbar />
            <div className='main'>
                {children}
                <Product_Card />
            </div>
        </>
    )
}
