import "./table.scss";
import { useState } from "react";
import WordLine from "../../component/WordLine/WordLine";
import wordsArr from "../../component/dictionary";

const WordsList = () => {
  const [mainWordsArr, setWordsArr] = useState(wordsArr);
  function saveEdit(id, en, tr, ru) {
    const newWordsArr = mainWordsArr.map((item) => {
      if (item.id === id) {
        item.english = en;
        item.transcription = tr;
        item.russian = ru;
        return item;
      }
      return item;
    });
    setWordsArr(newWordsArr);
  }

  return (
    <ul className="list">
      <li className="list_head">
        <div className="list_en">Английский</div>
        <div className="list_tr">Транскрипция</div>
        <div className="list_ru">Перевод</div>
        <div className="list_empty"></div>
      </li>
      <li>
        {mainWordsArr.map((item) => {
          return (
            <WordLine
              en={item.english}
              tr={item.transcription}
              ru={item.russian}
              id={item.id}
              key={item.id}
              saveEdit={saveEdit}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default WordsList;
