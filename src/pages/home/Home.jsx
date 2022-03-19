import classes from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "../../assets/racquets-hero.webp";
import shoeImage from "../../assets/shoe.webp";
import racquet1 from "../../assets/rq-1.webp";
import racquet2 from "../../assets/rq-2.webp";
import racquet3 from "../../assets/rq-3.webp";
import stringImage from "../../assets/string.webp";
import shuttle from "../../assets/shuttle.webp";
import { useNavigate } from "react-router-dom";
import {useFilter} from '../../context/filter-context.js'

const Home = () => {
  const navigate = useNavigate();
  const {filterDispatch} = useFilter();
  const featuredCategoriesHandler=(category)=>{
    filterDispatch({type:"CLEAR_FILTER"});
      filterDispatch({type:"CATEGORIES",payload:{category,isSelected:true}});
      navigate("/products-listing");
  }
  return (
    <div className={classes["home-container"]}>
      <Navbar />
      <main className={classes["home-main"]}>
        <div className={classes["hero-container"]}>
          <div className={classes["hero-image"]}>
            <img src={heroImage} alt="hero-image" />
          </div>
          <div className={classes["hero-heading"]}>
            <h1>Badminton</h1>
            <button className="btn btn-primary" onClick={()=>navigate("/products-listing")}>Shop Now</button>
          </div>
        </div>
        <h2 className="centered-text grey">Featured Categories</h2>
        <div className={classes["featured-categories"]}>
          <div className={classes["featured-item"]} onClick={()=>featuredCategoriesHandler("Racquet")}>
            <img src={racquet3} alt="racquet" />
            <h3>Racquets</h3>
          </div>
          <div className={classes["featured-item"]} onClick={()=>featuredCategoriesHandler("ShuttleCock")}>
            <img src={shuttle} alt="shuttle" />
            <h3>Shuttlecock</h3>
          </div>
          <div className={classes["featured-item"]} onClick={()=>featuredCategoriesHandler("String")}>
            <img src={stringImage} alt="string" />
            <h3>String</h3>
          </div>
          <div className={classes["featured-item"]} onClick={()=>featuredCategoriesHandler("Shoe")}>
            <img src={shoeImage} alt="shoe" />
            <h3>Shoe</h3>
          </div>
        </div>
        <h2 className="centered-text grey">New Arrivals</h2>
        <div className={classes["new-arrival-container"]}>
          <div className={`card-container  ${classes["card-width-40"]} ${classes["bg-purple-50"]} ${classes["padding-1rem"]}`}>
            <div className="horizontal-card">
              <div className="card-image-basic">
                <img src={racquet1} alt="gold medal edition" />
              </div>
              <div className="card-heading">
                <div className={"padding-l-r-16-b-5 heading "+ classes["bg-purple-50"]}>
                  Gold medal Limited Edition
                </div>
                <div className={"padding-l-r-16-b-5 sub-heading "+ classes["bg-purple-50"]}>
                  by Yonex
                </div>
              </div>
            </div>
            <div className={`footer-links ${classes["fluid-x"]} ${classes["bg-purple-50"]} ${classes["padding-1rem"]}`}>
              <button className="icon-btn">
                <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-primary">BUY NOW</button>
            </div>
          </div>

          <div className={`card-container  ${classes["card-width-40"]} ${classes["bg-purple-50"]} ${classes["padding-1rem"]}`}>
            <div className="horizontal-card">
              <div className="card-image-basic">
                <img src={racquet2} alt="aeronaut 4000" />
              </div>
              <div className="card-heading  ">
                <div className={"padding-l-r-16-b-5 heading "+ classes["bg-purple-50"]}>
                  Aeronaut 4000 boost
                </div>
                <div className={"padding-l-r-16-b-5 sub-heading "+ classes["bg-purple-50"]}>
                  by Yonex
                </div>
              </div>
            </div>
            <div className={`footer-links ${classes["fluid-x"]} ${classes["bg-purple-50"]} ${classes["padding-1rem"]}`}>
              <button className="icon-btn">
                <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-primary">BUY NOW</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
