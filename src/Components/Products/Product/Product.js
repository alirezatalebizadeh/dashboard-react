import React from 'react'
import { Link } from 'react-router-dom'
import Chart from './../../Home/Chart/Chart'
import { productDatas } from './../../../Data/datas'
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

            <div className='productTop'>
                <div className='productTop__Left'>
                    <Chart title='Sale in Month' data={productDatas} dataKey='sales' />
                </div>
                <div className='productTop__Right'>

                    <div className='productInfoTop'>
                        <img src='/logo192.png' alt='dell labtop' className='productInfoImg' />
                        <span className='productName'>Laptop</span>
                    </div>

                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>ID:</div>
                            <div className='productInfoValue'>2</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>Name:</div>
                            <div className='productInfoValue'>2</div>
                        </div>
                        <div className='productInfoItem'>
                            <div className='productInfoKey'>inStore:</div>
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
