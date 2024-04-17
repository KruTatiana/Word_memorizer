import { useState } from "react";
import "./word_list.scss";
import wordsArr from "../dictionary";
import WordLine from "../WordLine/WordLine";
import EnterLine from "../EnterLine/EnterLine";

const WordsList = () => {
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const [back, setBack] = useState(false);
  const [close, setClose] = useState(false);

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
    setClose(!close);
  };

  return (
    <ul className="list">
      <li className="list_head">
        <div className="list_en">Английский</div>
        <div className="list_tr">Транскрипция</div>
        <div className="list_ru">Перевод</div>
        <div className="list_empty"></div>
      </li>
      <li>
        <div className={edit && !back && !close ? "hide" : "line_word"}>
          <WordLine en={"sky"} trnsc={"[skaɪ]"} ru={"небо"} />
          <div className="buttons">
            <button
              onClick={handleEdit}
              className="button_edit"
              id="buttonEditWord"
            ></button>
            <button className="button_delete"></button>
          </div>
        </div>
        <div className={edit && !back && !close ? "line_input" : "hide"}>
          <EnterLine en={"sky"} trnsc={"[skaɪ]"} ru={"небо"} />
          <div className="buttons">
            <button onClick={handleSave} className="button_save"></button>
            <button onClick={handleBack} className="button_back"></button>
            <button onClick={handleClose} className="button_close"></button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default WordsList;
