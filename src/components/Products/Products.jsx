import React from 'react'
import useSWR from "swr"

const Products = () => {
    const { data } = useSWR("https://fakestoreapi.com/products", (...args) => fetch(args).then(res => res.json()))

    if (!data) {
        return <p>Loading</p>
    }
    return (
        <div className='card_container'>
            {data.map((el) => (<div className='card_products' key={el.id}>
                <p>{el.title}</p>
                <p>{el.price}</p>
                <p>{el.catecory}</p>
                <img src={el.image} alt="" />
            </div>))}
        </div>
    )
}

export default Products