import { Link } from "react-router-dom";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >

        <div className="order">
            <Link to="/menu"></Link>
            <button>SİPARİŞ VER</button>
        </div>
    </div>
  );
}

export default Home;
