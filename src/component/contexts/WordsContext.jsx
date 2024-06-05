import { createContext, useState, useEffect } from "react";
const WordContext = createContext();

function WordContextProvider(props) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleWords() {
    useEffect(() => {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Что-то пошло не так ...");
          }
        })
        .then((response) => {
          setWords(response);
          setLoading(false);
        })
        .catch((error) => setError(error));
    }, []);
  }

  return (
    <WordContext.Provider value={{ words, handleWords, loading, error }}>
      {props.children}
    </WordContext.Provider>
  );
}

export { WordContextProvider, WordContext };
