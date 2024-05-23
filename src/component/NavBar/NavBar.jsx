import "./nav_bar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li className="item">
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/game">
              Игра
            </Link>
          </li>
          <li>
            <Link className="link" to="/table">
              Словарь
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
