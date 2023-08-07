import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
export default function Product() {
    return (
        <div className='products'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'> Product</h1>
                <Link to='newProduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
        </div>
    )
}
