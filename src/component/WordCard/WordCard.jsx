import { useState, useEffect } from "react";
import Word from "../Word/Word";
import "./word_card.scss";
import wordsArr from "../dictionary";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

function WordCard() {
  const [itemIndex, setIndex] = useState(0);
  const endItem = wordsArr.length - 1;
  const wordObj = wordsArr[itemIndex];
  const Flip = styled.div`
    animation: 2s ${keyframes`${flipInY}`};
  `;

  return (
    <div className="card_container">
      <button
        className="button previous"
        onClick={() => {
          itemIndex == 0 ? setIndex(endItem) : setIndex(itemIndex - 1);
        }}
      ></button>
      <div className="card">
        <Flip>
          <Word
            en={wordObj.english}
            tr={wordObj.transcription}
            ru={wordObj.russian}
            key={wordObj.id}
          />
        </Flip>
      </div>
      <button
        className="button next"
        onClick={() => {
          itemIndex == endItem ? setIndex(0) : setIndex(itemIndex + 1);
        }}
      ></button>
    </div>
  );
}

export default WordCard;
