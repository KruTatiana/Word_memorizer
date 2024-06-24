import { useState, useEffect } from "react";
import Word from "../../component/Word/Word";
import "./game.scss";
import { observer, inject } from "mobx-react";

const WordCard = inject(["wordStore"])(
  observer(({ wordStore }) => {
    const [itemIndex, setIndex] = useState(0);
    const [wordsCount, setCount] = useState(0);
    const dataArr = wordStore.words;
    const endItem = dataArr.length - 1;

    useEffect(() => {
      wordStore.getData();
    }, []);

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
            en={dataArr[itemIndex].english}
            tr={dataArr[itemIndex].transcription}
            ru={dataArr[itemIndex].russian}
            key={dataArr[itemIndex].id}
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
  })
);

export default WordCard;
