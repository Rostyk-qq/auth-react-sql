import React from "react";
import selectStyles from './filterPost.module.css'
const FilterPosts = ({params, title, sortValue, setSortValues}) => {
    return (
        <select className={selectStyles.select} value={sortValue} onChange={e => setSortValues(e.target.value)} >
            <option disabled={true}>{title}</option>
            {
                params.map(el => 
                    <option key={el.value} value={el.value}>{el.text}</option>
                )
            }
        </select>
    )
}
export default FilterPosts