import { useState } from "react";
import "./word_line.scss";

const WordLine = ({ id, en, tr, ru, saveEdit }) => {
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({ en, tr, ru });
  const [word, setWord] = useState(true);

  let enValueSave = en;
  let trValueSave = tr;
  let ruValueSave = ru;

  const handleEdit = () => {
    setEdit(true);
    enValueSave = values.en;
    trValueSave = values.tr;
    ruValueSave = values.ru;
  };

  const handleSave = () => {
    const reEN = /[a-z]/;
    const reTR = /\[\]/;
    const reRU = /[а-яё]/;
    if (reEN.test(values.en)) {
      return enErr();
    } else if (reTR.test(values.tr)) {
      return trErr();
    } else if (reRU.test(values.ru)) {
      return ruErr();
    }
    setEdit(false);
    saveEdit(id, values.en, values.tr, values.ru);
  };

  const handleBack = () => {
    setValues({ en: enValueSave, tr: trValueSave, ru: ruValueSave });
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

  const enErr = () => {
    alert("Только строчные буквы латинского алфавита");
  };
  const trErr = () => {
    alert("Добавьте квадратные скобки");
  };
  const ruErr = () => {
    alert("Только строчные буквы русского алфавита");
  };

  return (
    <>
      <div className={edit ? "hide" : "line_word"}>
        <div className="en-word">{en}</div>
        <div className="tr-word">{tr}</div>
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
            value={values.tr}
            onChange={handleChange}
            className={values.tr === "" ? "empty_input" : "input"}
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
