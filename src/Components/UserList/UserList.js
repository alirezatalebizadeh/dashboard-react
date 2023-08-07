import React, { useState } from "react";
import { userRows } from './../../Data/datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'; import './UserList.css'

//use datagrid from mui to show data in library



export default function UserList() {
  //!to select rows of table
  const [userDatas, setUserDatas] = useState(userRows)

  // to select column of table
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'userName',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/users/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} alt='avatar' className="userListImg" />
              {params.row.userName}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`} className="link">
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
  const DeleteUser = (userID) => {
    let FilterData = userDatas.filter(user => user.id !== userID)
    setUserDatas(FilterData)
  }

  return (
    <div className="userList">

      <DataGrid
        rows={userDatas}
        columns={columns}
        // ! to show count of user in one page
        pageSize={2}
        disableRowSelectionOnClick
      >

      </DataGrid >
    </div>
  );
}
