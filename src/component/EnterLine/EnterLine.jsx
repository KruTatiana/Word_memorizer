import { useState } from "react";
import "./enter_line.scss";

const EnterLine = ({ en, trnsc, ru }) => {
  return (
    <>
      <div className="enter_en-word">
        <input
          onFocus={(e) => (e.target.value = "")}
          type="text"
          id="en_word"
          defaultValue={en}
        />
      </div>
      <div className="enter_tr-word">
        <input
          onFocus={(e) => (e.target.value = "")}
          type="text"
          id="tr-word"
          defaultValue={trnsc}
        />
      </div>
      <div className="enter_ru-word">
        <input
          onFocus={(e) => (e.target.value = "")}
          type="text"
          id="ru-word"
          defaultValue={ru}
        />
      </div>
    </>
  );
};

export default EnterLine;
