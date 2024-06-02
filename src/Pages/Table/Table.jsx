import "./table.scss";
import { useState } from "react";
import WordLine from "../../component/WordLine/WordLine";
import wordsArr from "../../component/dictionary";

const WordsList = () => {
  const [mainWordsArr, setWordsArr] = useState(wordsArr);
  function saveEdit(id, en, trnsc, ru) {
    const newWordsArr = mainWordsArr.map((item, index) => {
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
    <ul className="list">
      <li className="list_head">
        <div className="list_en">Английский</div>
        <div className="list_tr">Транскрипция</div>
        <div className="list_ru">Перевод</div>
        <div className="list_empty"></div>
      </li>
      <li>
        {mainWordsArr.map((item, id) => {
          return (
            <WordLine
              en={item.english}
              trnsc={item.transcription}
              ru={item.russian}
              key={id}
              saveEdit={saveEdit}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default WordsList;
