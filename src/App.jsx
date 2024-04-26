import "./App.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import NotFound from "./component/NotFound/NotFound";
import WordCard from "./component/WordCard/WordCard";
import WordsList from "./component/WordList/WordsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WordsList />}></Route>
          <Route path="/game" element={<WordCard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
