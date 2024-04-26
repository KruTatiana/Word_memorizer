import "./logo.scss";
import logoCat from "../../assets/logo_cat.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logoCat} alt="Logo" className="img" />
        </Link>
      </div>
    </>
  );
}
