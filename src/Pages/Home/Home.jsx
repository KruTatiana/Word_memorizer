import "./home.scss";
import Game from "../../assets/business.png";
import Table from "../../assets/school.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/game">
        <button className="home_container">
          <img src={Game} alt="Game" className="img" />
        </button>
      </Link>
      <Link to="/table">
        <button className="home_container">
          <img src={Table} alt="Dictionary" className="img" />
        </button>
      </Link>
    </>
  );
}
