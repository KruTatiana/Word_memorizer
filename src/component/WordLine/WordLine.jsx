import "./word_line.scss";
import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";

const WordLine = inject(["wordStore"])(
  observer(({ wordStore, en, tr, ru, id }) => {
    const [edit, setEdit] = useState(false);
    const [values, setValues] = useState({ en, tr, ru });
    const [isWordEmpty, setIsWordEmpty] = useState(false);
    const [key, setKey] = useState("");
    const [updServ, setUpdServ] = useState(false);

    let enValueSave = en;
    let trValueSave = tr;
    let ruValueSave = ru;

    useEffect(() => {
      checkIfWordIsEmpty();
    }, [values]);

    useEffect(() => {
      wordStore.getData();
    }, [updServ]);

    const checkIfWordIsEmpty = () => {
      setIsWordEmpty(values.en === "" || values.tr === "" || values.ru === "");
    };

    const handleEdit = () => {
      setEdit(true);
      enValueSave = values.en;
      trValueSave = values.tr;
      ruValueSave = values.ru;
      setKey({ id });
    };

    const handleSave = (values, key) => {
      const reEN = /[a-z]/;
      const reTR = /\[.*\]/;
      const reRU = /^[а-яё]+$/;
      if (!reEN.test(values.en)) {
        return enErr();
      } else if (!reTR.test(values.tr)) {
        return trErr();
      } else if (!reRU.test(values.ru)) {
        return ruErr();
      } else {
        console.log(
          `english: ${values.en}; transcription: ${values.tr}; russian: ${values.ru}`
        );
      }
      setEdit(false);
      wordStore.updateWord(
        {
          id: key.id,
          english: values.en,
          transcriptions: values.tr,
          russian: values.ru,
          tags: "",
          tags_json: "",
        },
        key
      );
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
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handleDelete = (id) => {
      let data = id.id;
      wordStore.deleteWord(data);
      wordStore.getData();
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
              onClick={(e) => handleDelete({ id })}
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
                handleSave(values, key);
              }}
              disabled={isWordEmpty}
              className={isWordEmpty ? "button_save_disabled" : "button_save"}
            ></button>
            <button onClick={handleBack} className="button_back"></button>
            <button onClick={handleClose} className="button_close"></button>
          </div>
        </div>
      </>
    );
  })
);

export default WordLine;
