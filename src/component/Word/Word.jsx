import "./word.scss";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

function Word({ en, tr, ru, addCount }) {
  const [click, setClick] = useState(false);
  const ref = useRef();

  useEffect(() => ref.current.focus());

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
          <p className={click === true ? "translation" : "hide"}>{ru}</p>
          <button
            className={click === false ? "button_checkWord" : "hide"}
            onClick={addCount}
            ref={ref}
          >
            Проверить
          </button>
          {/* {click ? (
            <p>{ru}</p>
          ) : (
            <button className="button_checkWord" onClick={addCount}>
              Проверить
            </button>
          )} */}
        </div>
      </Flip>
    </>
  );
}

export default Word;
