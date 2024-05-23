import "./word.scss";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

export default function Word({ key, en, tr, ru, addCount }) {
  const [click, setClick] = useState(false);

  const handleChange = () => {
    setClick(!click);
  };

  const Flip = styled.div`
    animation: 2s ${keyframes`${flipInY}`};
  `;

  return (
    <>
      <Flip className="word_container">
        <div className="word_body">
          <h3>{en}</h3>
          <p>{tr}</p>
        </div>
        <div onClick={handleChange}>
          {click ? (
            <p>{ru}</p>
          ) : (
            <button onClick={addCount} className="button_checkWord">
              Проверить
            </button>
          )}
        </div>
      </Flip>
    </>
  );
}
