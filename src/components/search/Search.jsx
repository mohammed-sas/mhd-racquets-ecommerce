import React from 'react'
import classes from '../Navbar/navbar.module.css'
const Search = ({list}) => {
    return (
        <div className={classes["search-list"]}>
            <ul>
                {
                    list.map(item=>{
                        return <li key={item.id}>
                            <div>
                            <p>{item.title}</p>
                            <small>in <strong>{item.categoryName}</strong></small>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Search
