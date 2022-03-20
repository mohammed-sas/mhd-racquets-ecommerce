import React from 'react'
import '../Navbar/navbar.css'
const Search = ({list}) => {
    return (
        <div className="search-list">
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
