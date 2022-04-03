import classes from "./home.module.css";
import heroImage from "../../assets/racquets-hero.webp";
import shoeImage from "../../assets/shoe.webp";
import racquet3 from "../../assets/rq-3.webp";
import stringImage from "../../assets/string.webp";
import shuttle from "../../assets/shuttle.webp";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context";
import Rating from "../../components/rating/Rating";

const Home = () => {
  const navigate = useNavigate();
  const { filterDispatch, state } = useFilter();
  const featuredCategoriesHandler = (category) => {
    filterDispatch({ type: "CLEAR_FILTER" });
    filterDispatch({
      type: "CATEGORIES",
      payload: { category, isSelected: true },
    });
    navigate("/products-listing");
  };
  const products = state.data.slice(0, 2);
  const [productOne, productTwo] = products;
  return (
    <main className={classes["home-main"]}>
      <div className={classes["hero-container"]}>
        <div className={classes["hero-image"]}>
          <img src={heroImage} alt="hero-image" />
        </div>
        <div className={classes["hero-heading"]}>
          <h1>Badminton</h1>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products-listing")}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className={classes["featured-categories"]}>
        <h2 className="centered-text grey">Featured Categories</h2>
        <div className={classes["featured-lists"]}>
          <div
            className={classes["featured-item"]}
            onClick={() => featuredCategoriesHandler("Racquet")}
          >
            <img src={racquet3} alt="racquet" />
            <h3>Racquets</h3>
          </div>
          <div
            className={classes["featured-item"]}
            onClick={() => featuredCategoriesHandler("ShuttleCock")}
          >
            <img src={shuttle} alt="shuttle" />
            <h3>Shuttlecock</h3>
          </div>
          <div
            className={classes["featured-item"]}
            onClick={() => featuredCategoriesHandler("String")}
          >
            <img src={stringImage} alt="string" />
            <h3>String</h3>
          </div>
          <div
            className={classes["featured-item"]}
            onClick={() => featuredCategoriesHandler("Shoe")}
          >
            <img src={shoeImage} alt="shoe" />
            <h3>Shoe</h3>
          </div>
        </div>
      </div>

      <div className={classes["new-arrival-container"]}>
        <h2 className="centered-text grey">New Arrivals</h2>
        {products.length > 0 && (
          <div className={classes["new-arrival-lists"]}>
            <div style={{position:"relative"}} className={`card-container product-container`}>
              <div className="card-image-basic product-image relative-pos">
                <img src={productOne.image} alt={productOne.title} />
              </div>
              <div className="card-heading bg-purple-50">
                <div className="padding-l-r-16-b-5 heading bg-purple-50">
                  {productOne.title}
                </div>
                <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                  {productOne.brand}
                </div>
              </div>
              <Rating rating={productOne.rating} />
              <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                <h2>₹{productOne.price}</h2>
              </div>
              <div
                className={`card-footer-basic product-card-footer ${classes["padding-0"]}  bg-purple-50`}
              >
                <button className="btn btn-primary" onClick={()=>navigate(`/product/${productOne._id}`)}>
                  Buy Now
                </button>
              </div>
              <div className="card-badge bg-purple-600">
                New Arrival
              </div>
            </div>
            <div style={{position:"relative"}} className={`card-container product-container`}>
              <div className="card-image-basic product-image relative-pos">
                <img src={productTwo.image} alt={productTwo.title} />
              </div>
              <div className="card-heading bg-purple-50">
                <div className="padding-l-r-16-b-5 heading bg-purple-50">
                  {productTwo.title}
                </div>
                <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                  {productTwo.brand}
                </div>
              </div>
              <Rating rating={productOne.rating} />
              <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                <h2>₹{productTwo.price}</h2>
              </div>
              <div
                className={`card-footer-basic product-card-footer ${classes["padding-0"]} bg-purple-50`}
              >
                <button className="btn btn-primary" onClick={()=>navigate(`/product/${productTwo._id}`)}>
                  Buy Now
                </button>
              </div>
              <div className="card-badge bg-purple-600">
                New Arrival
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    </main>
  );
};

export default Home;
