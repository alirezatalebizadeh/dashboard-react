import React from 'react'





export default function Menu({ allMenus }) {

    return (
        <>
            <div className="section-center">
                {
                    allMenus.map(menu => (
                        <article className="menu-item">
                            <img src={menu.img} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{menu.title}</h4>
                                    <h4 className="price">${menu.price}</h4>
                                </header>
                                <p className="item-text">{menu.desc}</p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    )
}

