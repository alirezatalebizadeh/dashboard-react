import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from './../../Home/Chart/Chart'
import { products, productDatas } from './../../../Data/datas'
import './Product.css'




export default function Product() {


    const [data, setData] = useState(products)
    const [detailProduct, setDetailProduct] = useState([])

    let params = useParams()

    useEffect(() => {
        //!find object in array
        let findProduct = data.find(product => {
            if (product.id == params.productID) {
                return product
            }
        })

        setDetailProduct(findProduct)
        console.log(detailProduct);

    })

    return (
        <div className='products'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'> Product</h1>
                <Link to='newProduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className='productTop'>
                {/* //! create chart */}
                <div className='productTop__Left'>
                    <Chart title='Sale in Month' data={productDatas} dataKey='sales' />
                </div>

                <div className='productTop__Right'>

                    <div className='productInfoTop'>
                        <img src={detailProduct.avatar} alt='dell labtop' className='productInfoImg' />
                        <span className='productName'>{detailProduct.title}</span>
                    </div>

                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>ID:</div>
                            <div className='productInfoValue'>{detailProduct.id}</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>Name:</div>
                            <div className='productInfoValue'>{detailProduct.title}</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>in Store:</div>
                            <div className='productInfoValue'>no</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>Sales:</div>
                            <div className='productInfoValue'>2000000$</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>active:</div>
                            <div className='productInfoValue'>yes</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
