import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../Navbar/navbar.module.css";
const Search = ({ list, setSearchResult }) => {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/product/${id}`);
    setSearchResult([]);
  };
  return (
    <div className={classes["search-list"]}>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} onClick={()=>clickHandler(item._id)}>
              <div>
                <p>{item.title}</p>
                <small>
                  in <strong>{item.categoryName}</strong>
                </small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
