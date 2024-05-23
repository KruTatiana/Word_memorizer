import { useState } from "react";
import "./word_line.scss";

const WordLine = ({ en, trnsc, ru }) => {
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const [back, setBack] = useState(false);
  const [close, setClose] = useState(false);

  let enValueSave;
  let trValueSave;
  let ruValueSave;

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleSave = () => {
    setSave(!save);
  };

  const handleBack = () => {
    setBack(!back);
  };

  const handleClose = () => {
    setEdit(false);
    setClose(!close);
  };

  return (
    <>
      <div className={edit ? "hide" : "line_word"}>
        <div className="en-word">{en}</div>
        <div className="tr-word">{trnsc}</div>
        <div className="ru-word">{ru}</div>
        <div className="buttons">
          <button
            onClick={handleEdit}
            className="button_edit"
            id="buttonEditWord"
          ></button>
          <button className="button_delete"></button>
        </div>
      </div>
      <div className={edit ? "line_input" : "hide"}>
        <div className="en-word">
          <input
            onFocus={(e) => {
              enValueSave = e.value;
              e.target.value = "";
            }}
            type="text"
            id="en_word"
            defaultValue={en}
          />
        </div>
        <div className="tr-word">
          <input
            onFocus={(e) => {
              trValueSave = e.value;
              e.target.value = "";
            }}
            type="text"
            id="tr_word"
            defaultValue={trnsc}
          />
        </div>
        <div className="ru-word">
          <input
            onFocus={(e) => {
              ruValueSave = e.value;
              e.target.value = "";
            }}
            type="text"
            id="ru_word"
            defaultValue={ru}
          />
        </div>
        <div className="buttons">
          <button onClick={handleSave} className="button_save"></button>
          <button onClick={handleBack} className="button_back"></button>
          <button onClick={handleClose} className="button_close"></button>
        </div>
      </div>
    </>
  );
};

export default WordLine;
