import React from 'react'
import './WidgetLg.css'
import { Button } from '@mui/material'











export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetButton' + type}>{type}</button>
    }


    return (
        <div className='widgetLg'>
            <h3 className='widgetLg__Title'>Latest TransActions </h3>
            <table className='widgetLg__Table'>
                <tr className='widgetLg__Tr'>
                    <th className='widgetLg__Th'>Customer</th>
                    <th className='widgetLg__Th'>Date</th>
                    <th className='widgetLg__Th'>Amount</th>
                    <th className='widgetLg__Th'>Status</th>
                </tr>
                <tr className='widgetLg__Tr'>
                    <td className='widgetLg__User'>
                        <span className='widget__Name'>Alireza</span>
                        <img className='widget__Img' src='logo192.png' alt='widgetImg' />
                    </td>
                    <td className='widgetLg__Date'>Date</td>
                    <td className='widgetLg__Amount'>Amount</td>
                    <td className='widgetLg__td'>Status</td>
                    <td>
                        <Button />
                    </td>
                </tr>
            </table>
        </div>
    )
}
