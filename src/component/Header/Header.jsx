import "./header.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="body">
        <h2 className="name">Word memorizer. Учим и запоминаем слова</h2>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
