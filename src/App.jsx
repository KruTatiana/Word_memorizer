import "./styles/App.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { Home, Game, Table, NotFound } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { useEffect } from "react";

/// доделать игру и добавление слов в таблице(1:22:34)

const App = inject(["wordStore"])(
  observer(({ wordStore }) => {
    useEffect(() => {
      wordStore.getData();
    }, []);

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
  })
);

export default App;
