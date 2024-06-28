import { useState, useContext } from "react";
import { wordContext } from "../../component/contexts/WordContextProvider";
import JSONServ from "../../Services/JSONServices";
import "./word_line.scss";

const WordLine = ({ id, en, tr, ru, handleDelete }) => {
  const { updServ, setUpdServ } = useContext(wordContext);
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({ en, tr, ru });
  const [word, setWord] = useState(true);
  const [key, setKey] = useState("");

  let enValueSave;
  let trValueSave;
  let ruValueSave;

  const handleEdit = () => {
    setEdit(true);
    enValueSave = values.en;
    trValueSave = values.tr;
    ruValueSave = values.ru;
    setKey(id);
  };

  function saveEdit(key, values) {
    JSONServ.changeData({
      id: key,
      english: values.en,
      transcriptions: values.tr,
      russian: values.ru,
      tags: "",
      tags_json: "",
    });
    handleClose();
    setUpdServ(!updServ);
    console.log(updServ);
  }

  const handleBack = () => {
    setValues({ en: enValueSave, tr: trValueSave, ru: ruValueSave });
    setEdit(false);
  };

  const handleClose = () => {
    setEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    e.target.value === "" ? setWord(false) : setWord(true);
  };

  return (
    <>
      <div id={id} className={edit ? "hide" : "line_word"}>
        <div className="en-word">{en}</div>
        <div className="tr-word">{tr}</div>
        <div className="ru-word">{ru}</div>
        <div className="buttons">
          <button
            onClick={handleEdit}
            className="button_edit"
            id="buttonEditWord"
          ></button>
          <button
            className="button_delete"
            onClick={(e) => {
              handleDelete({ id });
            }}
          ></button>
        </div>
      </div>
      <div className={edit ? "line_input" : "hide"}>
        <div className="en-word">
          <input
            type="text"
            name="en"
            value={values.en}
            onChange={handleChange}
            className={values.en === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="tr-word">
          <input
            type="text"
            name="tr"
            value={values.tr}
            onChange={handleChange}
            className={values.tr === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="ru-word">
          <input
            type="text"
            name="ru"
            value={values.ru}
            onChange={handleChange}
            className={values.ru === "" ? "empty_input" : "input"}
          />
        </div>
        <div className="buttons">
          <button
            onClick={(e) => {
              saveEdit(key, values);
            }}
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
