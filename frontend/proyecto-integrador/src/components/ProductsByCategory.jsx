// import Card from './Card'
import React, { useState, useEffect } from 'react'

import { getProducts } from '../services/Products'

const ProductsByCategory = () => {
    const [productos, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts({setProducts})
    }, [])

    

    return (
        <>
            {
                productos.map(item =>
                // <Card
                //     key={item.id}
                //     crimg={item.crimg}
                //     category={item.category}
                //     title={item.title}
                //     location={item.location}
                //     description={item.description}
                // />
                console.log(item, "wii")
                )
            }
        </>
    )
}

export default ProductsByCategory