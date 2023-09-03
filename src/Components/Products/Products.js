import React, { useState } from "react";
import { products } from './../../Data/datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import './Products.css'




//use datagrid from mui to show data in library
export default function Products() {

  //!to select rows of table
  const [productDatas, setProductDatas] = useState(products)

  // to select column of table
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} alt='avatar' className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },

    {
      field: 'price',
      headerName: 'Price',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className='userListDelete'
              onClick={() => DeleteUser(params.row.id)}
            />
          </>
        )
      }
    },

  ]


  //!delete  user
  const DeleteUser = (productID) => {
    let FilterData = productDatas.filter(product => product.id !== productID)
    setProductDatas(FilterData)
  }


  return (
    <div className="userList">

      <DataGrid
        rows={productDatas}
        columns={columns}
        // ! to show count of user in one page
        pageSizeOptions={3}
        disableRowSelectionOnClick
      >

      </DataGrid>
    </div>
  );
}




