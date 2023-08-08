import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from './../../Home/Chart/Chart'
import { products, productDatas } from './../../../Data/datas'
import PublishIcon from "@mui/icons-material/Publish";
import './Product.css'




export default function Product() {


    const [data, setData] = useState(products)
    const [detailProduct, setDetailProduct] = useState([])
    const [showFile, setShowFile] = useState('none')

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

            <div className='productBottom'>
                <form className='product__form'>

                    <div className='productForm__left'>
                        <lable>Product Name</lable>
                        <input placeholder='Dell Laptop' type='text' />

                        <label htmlFor='inStoke'>In Stoke</label>
                        <select id='inStoke'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>

                        <label htmlFor='active'>Active</label>
                        <select id='active'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>

                    <div className='productForm__right'>

                        <div className='productUploader'>
                            <img src='/logo192.png' alt='profile photo' className='productUploaderImg' />
                            <label>
                                <PublishIcon onClick={() => setShowFile('block')} />
                            </label>
                            <input type='file' style={{ display: `${showFile}` }} />
                        </div>

                        <button className='productButton'>Upload (Edit)</button>

                    </div>
                </form>
            </div>

        </div>
    )
}
