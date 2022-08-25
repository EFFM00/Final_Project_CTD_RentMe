// import Card from './Card'
import React, { useState, useEffect } from 'react'

import { getProducts } from '../services/Products'

const ProductsByCategory = () => {
    const [productos, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts({setProducts})
    }, [])

    console.log(productos, "PROD");

    return (
        <>
            {
                productos.map(item =>
                <Card
                    key={item.id}
                    crimg={item.crimg}
                    category={item.category}
                    title={item.title}
                    location={item.location}
                    description={item.description}
                />
                )
                productos.map(item => <li key={item.id}>{item.category.title}</li>)

            }
        </>
    )
}

export default ProductsByCategory