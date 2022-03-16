import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "../../assets/racquets-hero.webp";
import shoeImage from "../../assets/shoe.webp";
import racquet1 from "../../assets/rq-1.webp";
import racquet2 from "../../assets/rq-2.webp";
import racquet3 from "../../assets/rq-3.webp";
import stringImage from "../../assets/string.webp";
import shuttle from "../../assets/shuttle.webp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero-container">
          <div className="hero-image">
            <img src={heroImage} alt="hero-image" />
          </div>
          <div className="hero-heading">
            <h1>Badminton</h1>
          </div>
        </div>
        <h2 className="centered-text grey">Featured Categories</h2>
        <div className="featured-categories">
          <div className="featured-item">
            <img src={racquet3} alt="racquet" />
            <h3>Racquets</h3>
          </div>
          <div className="featured-item">
            <img src={shuttle} alt="shuttle" />
            <h3>Shuttlecock</h3>
          </div>
          <div className="featured-item">
            <img src={stringImage} alt="string" />
            <h3>String</h3>
          </div>
          <div className="featured-item">
            <img src={shoeImage} alt="shoe" />
            <h3>Shoe</h3>
          </div>
        </div>
        <h2 className="centered-text grey">New Arrivals</h2>
        <div className="new-arrival-container">
          <div className="card-container  bg-purple-50 card-width-40 padding-1rem">
            <div className="horizontal-card">
              <div className="card-image-basic">
                <img src={racquet1} alt="gold medal edition" />
              </div>
              <div className="card-heading">
                <div className="padding-l-r-16-b-5 heading bg-purple-50">
                  Gold medal Limited Edition
                </div>
                <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                  by LI-NING
                </div>
              </div>
            </div>
            <div className="footer-links fluid-x bg-purple-50">
              <button className="icon-btn">
                <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-primary">BUY NOW</button>
            </div>
          </div>

          <div className="card-container  bg-purple-50 card-width-40 padding-1rem">
            <div className="horizontal-card">
              <div className="card-image-basic">
                <img src={racquet2} alt="aeronaut 4000" />
              </div>
              <div className="card-heading  ">
                <div className="padding-l-r-16-b-5 heading bg-purple-50">
                  Aeronaut 4000 boost
                </div>
                <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                  by LI-NING
                </div>
              </div>
            </div>
            <div className="footer-links fluid-x bg-purple-50 padding-1rem">
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
