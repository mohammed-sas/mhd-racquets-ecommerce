import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../Navbar/navbar.module.css'
const Search = ({list}) => {
    const navigate = useNavigate();
    return (
        <div className={classes["search-list"]}>
            <ul>
                {
                    list.map(item=>{
                        return <li key={item.id} onClick={()=>navigate(`/product/${item._id}`)}>
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
