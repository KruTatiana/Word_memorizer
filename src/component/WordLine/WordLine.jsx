import { useState, useContext } from "react";
import { wordContext } from "../contexts/WordContextProvider";
import JSONServ from "../../Services/JSONServices";
import "./word_line.scss";

const WordLine = ({ id, en, tr, ru }) => {
  const [edit, setEdit] = useState(false);
  const [values, setValues] = useState({ en, tr, ru });
  const [word, setWord] = useState(true);
  const { updServ, setUpdServ } = useContext(wordContext);

  let enValueSave = en;
  let trValueSave = tr;
  let ruValueSave = ru;

  const handleEdit = () => {
    setEdit(true);
    enValueSave = values.en;
    trValueSave = values.tr;
    ruValueSave = values.ru;
  };

  const handleSave = (e) => {
    e.preventDefault();
    JSONServ.addData({
      id: e.id,
      english: values.en,
      transcriptions: values.tr,
      russian: values.ru,
      tags: "",
      tags_json: "",
    });
    setUpdServ(!updServ);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    JSONServ.deleteData({
      id: id,
      english: values.en,
      transcriptions: values.tr,
      russian: values.ru,
      tags: "",
      tags_json: "",
    });
    setUpdServ(!updServ);
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
          <button className="button_delete" onClick={handleDelete}></button>
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
