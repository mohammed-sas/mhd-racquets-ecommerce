import React from 'react'
import '../Navbar/navbar.css'
const Search = ({list}) => {
    return (
        <div className="search-list">
            <ul>
                {
                    list.map(item=>{
                        return <li key={item.id}>
                            {item.title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Search
