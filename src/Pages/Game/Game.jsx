import { useState, useContext, useEffect } from "react";
import Word from "../../component/Word/Word";
import { wordContext } from "../../component/contexts/WordContextProvider";
import "./game.scss";
import JSONServ from "../../Services/JSONServices";

const WordCard = () => {
  const { dataArr, setDataArr, updServ, setUpdServ } = useContext(wordContext);
  // const [wordObj, setWordObj] = useState({});
  const [itemIndex, setIndex] = useState(0);
  const [wordsCount, setCount] = useState(0);
  const endItem = dataArr.length - 1;
  const wordObj = dataArr[itemIndex];

  const addCount = () => {
    setCount(wordsCount + 1);
  };

  // const showWord = (itemIndex) => {
  //   console.log(itemIndex);
  //   setWordObj(JSONServ.getCard(itemIndex));
  //   setUpdServ(!updServ);
  // };

  // useEffect(
  //   (itemIndex) => {
  //     showWord(itemIndex);
  //   },
  //   [itemIndex]
  // );

  return (
    <>
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
    </>
  );
};
export default WordCard;
