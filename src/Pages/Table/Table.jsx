import "./table.scss";
import { useState, useContext } from "react";
import WordLine from "../../component/WordLine/WordLine";
import LoadingComp from "../../component/LoadingComp/LoadingComp";
// import wordsArr from "../../component/dictionary";
import { WordContext } from "../../component/contexts/WordsContext";

const WordsList = () => {
  const { words, handleWords, loading, error } = useContext(WordContext);
  const [wordsArr, setWordsArr] = useState([]);
  setWordsArr(words);

  function saveEdit(id, en, trnsc, ru) {
    const newWordsArr = wordsArr.map((item) => {
      if (item.id === id) {
        item.en = en;
        item.trnsc = trnsc;
        item.ru = ru;
        return item;
      }
      return item;
    });
    setWordsArr(newWordsArr);
  }

  return (
    <div>
      <div>{!words ? <LoadingComp /> : ""}</div>
      <ul className="list">
        <li className="list_head">
          <div className="list_en">Английский</div>
          <div className="list_tr">Транскрипция</div>
          <div className="list_ru">Перевод</div>
          <div className="list_empty"></div>
        </li>
        <li>
          {wordsArr.map((item) => {
            return (
              <WordLine
                en={item.english}
                trnsc={item.transcription}
                ru={item.russian}
                key={item.id}
                saveEdit={saveEdit}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default WordsList;
