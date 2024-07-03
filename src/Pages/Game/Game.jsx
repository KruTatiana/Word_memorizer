import "./game.scss";
import { useState, useEffect } from "react";
import Word from "../../component/Word/Word";
import { observer, inject } from "mobx-react";

const WordCard = inject(["wordStore"])(
  observer(({ wordStore }) => {
    const [itemIndex, setIndex] = useState(0);
    const [wordsCount, setCount] = useState(0);
    const [endItem, setEndItem] = useState("");
    const [cardData, setCardData] = useState("");

    useEffect(() => {
      wordStore.getData();
      showCard(0);
      setEndItem(wordStore.words.length - 1);
    }, []);

    useEffect(() => {
      showCard(itemIndex);
    }, [itemIndex]);

    const showCard = (itemIndex) => {
      setCardData(wordStore.words[itemIndex]);
    };
    console.log(cardData);

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
            en={cardData.english}
            tr={cardData.transcription}
            ru={cardData.russian}
            key={cardData.id}
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
