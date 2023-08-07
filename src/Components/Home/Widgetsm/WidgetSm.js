import React from 'react'
import Visibility from "@mui/icons-material/Visibility";
import { newMembers } from './../../../Data/datas'
import './widgetSm.css'



export default function widgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSm__Title'>New Join Members</span>
            <ul className='widgetSm__List'>
                {
                    newMembers.map(member => (
                        <li className='widgetSm__List__item'>
                            <img src={member.img} alt='widgetImg' className='widgetSm__Img' />
                            <div className='widgetSmUser'>
                                <span className='widgetSmUser__name'>{member.userName}</span>
                                <span className='widgetSmUser__title'> {member.title}</span>
                            </div>
                            <button className='WidgetSm__Button'>
                                <Visibility className='WidgetSmIcon' />
                            </button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
    //FixIt
}
