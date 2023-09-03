import React, { useState } from 'react'
import Category from './Category'
import Menu from './Menu'
import './Menus.css'
import menu from '../../Data/datas'


//! get data and filter that to delete the same name
// new Set => delete name if tekrari
const getAllCategory = menu.map(menu => menu.category)
const AllCategories = ['all', ...new Set(getAllCategory)]




export default function Menus() {
    const [allMenus, setAllMenus] = useState([...menu])
    const [categoies, setCategoiess] = useState(AllCategories)

    //! filter data with click on button
    const filteredDataHandler = (categorySelected) => {

        if (categorySelected == 'all') {
            setAllMenus(menu)
            return
        }
        let filterData = menu.filter(menu => menu.category === categorySelected)
        setAllMenus(filterData)
    }

    return (
        <main className='parent_menu'>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Category categoies={categoies} filteredDataHandler={filteredDataHandler} />
                <Menu allMenus={allMenus} />
            </section>
        </main>
    )
}
