import { useState, useEffect, useRef, forwardRef } from "react";
import Word from "../../component/Word/Word";
import "./game.scss";
import wordsArr from "../../component/dictionary";

function WordCard() {
  const [itemIndex, setIndex] = useState(0);
  const [wordsCount, setCount] = useState(0);
  const endItem = wordsArr.length - 1;
  const wordObj = wordsArr[itemIndex];

  const addCount = () => {
    setCount(wordsCount + 1);
  };

  return (
    <div className="card_container">
      <button
        className="button previous"
        onClick={() => {
          itemIndex === 0 ? setIndex(endItem) : setIndex(itemIndex - 1);
        }}
      ></button>
      <div className="card">
        <Word
          en={wordObj.english}
          tr={wordObj.transcription}
          ru={wordObj.russian}
          key={wordObj.id}
          addCount={addCount}
        />
        <div>изучено {wordsCount} слов</div>
      </div>
      <button
        className="button next"
        onClick={() => {
          itemIndex === endItem ? setIndex(0) : setIndex(itemIndex + 1);
        }}
      ></button>
    </div>
  );
}

export default WordCard;
