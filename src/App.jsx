import "./styles/App.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { Home, Game, Table, NotFound } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
