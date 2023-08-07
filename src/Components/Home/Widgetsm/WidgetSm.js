import React from 'react'
import Visibility from "@mui/icons-material/Visibility";
import './widgetSm.css'
import { newMembers } from './../../../Data/datas'



export default function widgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSm__Title'>New Join Members</span>
            <ul className='widgetSm__List'>
                <li li widgetSm__List__item>
                    <img src='logo192.png' alt='widgetImg' className='widgetSm__Img' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUser__name'>Alireza Talebizadeh</span>
                        <span className='widgetSmUser__title'> Web Designer</span>
                    </div>
                    <button className='WidgetSm__Button'>
                        <Visibility className='WidgetSmIcon' />
                    </button>
                </li>
            </ul>
        </div>
    )
    //FixIt
}
