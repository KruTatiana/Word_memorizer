import './App.css'
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import WordCard from './component/WordCard/WordCard';
import WordsList from './component/WordList/WordsList';

function App() {

  return (
    <>
      <Header />
      <WordCard />
      <WordsList />
      <Footer/>
    </>
  )
}

export default App
