import React, { useState } from "react";


export default function Category({ categoies, filteredDataHandler }) {
    const [mainCategory, setMainCategory] = useState('all')




    return (
        <div className="btn-container">
            {
                categoies.map((category, index) => (
                    <button
                        // ! if you click on btn ,the color of that change
                        onClick={() => {
                            setMainCategory(category)
                            //! send name of category to exchange data
                            filteredDataHandler(category)
                        }}
                        key={index + 1}
                        type="button"
                        // highlight class  for highlight main category
                        className={mainCategory == category ? 'filter-btn highlight' : 'filter-btn'}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}
