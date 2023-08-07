import React from 'react'
import './WidgetLg.css'
import { Transaction } from './../../../Data/datas'










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
                {
                    Transaction.map(user => (
                        <tr className='widgetLg__Tr'>
                            <td className='widgetLg__User'>
                                <span className='widget__Name'>{user.customer}</span>
                                <img className='widget__Img' src={user.img} alt='widgetImg' />
                            </td>
                            <td className='widgetLg__Date'>{user.date}</td>
                            <td className='widgetLg__Amount'>{user.amount}</td>
                            <td className='widgetLg__td'>{user.status}</td>
                            <td>
                                <Button type={user.type} />
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>
    )
}
