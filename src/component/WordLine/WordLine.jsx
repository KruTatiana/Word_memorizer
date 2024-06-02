import { useState } from "react";
import "./word_line.scss";

const WordLine = ({ id, en, trnsc, ru, saveEdit }) => {
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({ en, trnsc, ru });
  const [word, setWord] = useState(true);

  let enValueSave = en;
  let trValueSave = trnsc;
  let ruValueSave = ru;

  const handleEdit = () => {
    setEdit(true);
    enValueSave = values.en;
    trValueSave = values.trnsc;
    ruValueSave = values.ru;
  };

  const handleSave = () => {
    setEdit(false);
    saveEdit(id, values.en, values.trnsc, values.ru);
  };

  const handleBack = () => {
    setValues({ en: enValueSave, trnsc: trValueSave, ru: ruValueSave });
    setEdit(false);
  };

  const handleClose = () => {
    setEdit(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    e.target.value === "" ? setWord(false) : setWord(true);
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
            type="text"
            id="en"
            value={values.en}
            onChange={handleChange}
            className={values.en === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="tr-word">
          <input
            type="text"
            id="tr"
            value={values.trnsc}
            onChange={handleChange}
            className={values.trnsc === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="ru-word">
          <input
            type="text"
            id="ru"
            value={values.ru}
            onChange={handleChange}
            className={values.ru === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="buttons">
          <button
            onClick={handleSave}
            disabled={word === false ? true : ""}
            className={word === false ? "button_save_disabled" : "button_save"}
          ></button>
          <button onClick={handleBack} className="button_back"></button>
          <button onClick={handleClose} className="button_close"></button>
        </div>
      </div>
    </>
  );
};

export default WordLine;
