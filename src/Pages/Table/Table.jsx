import "./table.scss";
import WordLine from "../../component/WordLine/WordLine";
import addImg from "../../assets/add.png";
import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import { v4 as uuidv4 } from "uuid";

const WordsList = inject(["wordStore"])(
  observer(({ wordStore }) => {
    const [isWordEmpty, setIsWordEmpty] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [newValueEn, setNewEn] = useState("");
    const [newValueTr, setNewTr] = useState("");
    const [newValueRu, setNewRu] = useState("");
    const [updServ, setUpdServ] = useState(false);
    const reEN = /[a-z]/;
    const reTR = /\[.*\]/;
    const reRU = /^[а-яё]+$/;

    useEffect(() => {
      wordStore.getData();
    }, [updServ]);

    useEffect(() => {
      checkIfNewIsEmpty();
    }, [newValueEn]);
    useEffect(() => {
      checkIfNewIsEmpty();
    }, [newValueTr]);
    useEffect(() => {
      checkIfNewIsEmpty();
    }, [newValueRu]);

    const handleNewRu = (e) => {
      setNewRu(e.target.value);
      if (!reRU.test(newValueRu)) {
        return ruErr();
      } else {
        console.log(`russian: ${newValueRu}`);
      }
    };

    const handleNewTr = (e) => {
      setNewTr(e.target.value);
      if (!reTR.test(newValueTr)) {
        return trErr();
      } else {
        console.log(`translation: ${newValueTr}`);
      }
    };

    const handleNewEn = (e) => {
      setNewEn(e.target.value);
      if (!reEN.test(newValueEn)) {
        return enErr();
      } else {
        console.log(`english: ${newValueEn}`);
      }
    };

    const checkIfNewIsEmpty = () => {
      setIsWordEmpty(
        newValueEn === "" || newValueTr === "" || newValueRu === ""
      );
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

    const handleSaveNew = () => {
      let keyId = uuidv4();
      wordStore.addNewWord({
        id: keyId,
        english: newValueEn,
        transcription: newValueTr,
        russian: newValueRu,
        tags: "",
        tags_json: "",
      });
      setNewEn("");
      setNewTr("");
      setNewRu("");
      setUpdServ(!updServ);
    };

    const handleNewClose = () => {
      setAddNew(false);
      setNewEn("");
      setNewTr("");
      setNewRu("");
    };

    const handleAdd = () => {
      setAddNew(true);
    };

    return (
      <ul className="list">
        <li className="list_head">
          <div className="list_en">Английский</div>
          <div className="list_tr">Транскрипция</div>
          <div className="list_ru">Перевод</div>
          <div className="list_empty">
            <img src={addImg} alt="Logo" className="imgAdd" />
            <button onClick={handleAdd} className="button_addNew">
              <span>Добавить</span> <span>слово</span>
            </button>
          </div>
        </li>
        <li className={addNew ? "line_input" : "hide"}>
          <div className="en-word">
            <input
              type="text"
              name="en"
              value={newValueEn}
              onChange={handleNewEn}
              className={newValueEn === "" ? "empty_input" : "input"}
            />
          </div>
          <div className="tr-word">
            <input
              type="text"
              name="tr"
              value={newValueTr}
              onChange={handleNewTr}
              className={newValueTr === "" ? "empty_input" : "input"}
            />
          </div>
          <div className="ru-word">
            <input
              type="text"
              name="ru"
              value={newValueRu}
              onChange={handleNewRu}
              className={newValueRu === "" ? "empty_input" : "input"}
            />
          </div>
          <div className="buttons">
            <button
              onClick={handleSaveNew}
              disabled={isWordEmpty}
              className={isWordEmpty ? "button_save_disabled" : "button_save"}
            ></button>
            <button onClick={handleNewClose} className="button_close"></button>
          </div>
        </li>
        <li>
          {wordStore.words.map((word) => {
            return (
              <WordLine
                en={word.english}
                tr={word.transcription}
                ru={word.russian}
                id={word.id}
                key={word.id}
              />
            );
          })}
        </li>
      </ul>
    );
  })
);

export default WordsList;
