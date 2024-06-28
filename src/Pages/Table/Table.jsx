import "./table.scss";
import { useState, useContext, useEffect } from "react";
import WordLine from "../../component/WordLine/WordLine";
import { wordContext } from "../../component/contexts/WordContextProvider";
import JSONServ from "../../Services/JSONServices";
import addImg from "../../assets/add.png";

const WordsList = () => {
  const { dataArr, updServ, setUpdServ } = useContext(wordContext);
  const [isWordEmpty, setIsWordEmpty] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [newValueEn, setNewEn] = useState("");
  const [newValueTr, setNewTr] = useState("");
  const [newValueRu, setNewRu] = useState("");

  const handleDelete = (id) => {
    JSONServ.deleteData(id);
    setUpdServ(!updServ);
  };

  const handleSaveNew = () => {
    let keyId = dataArr.length;

    JSONServ.addData({
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

  //странная функция
  const checkIfNewIsEmpty = () => {
    setIsWordEmpty(newValueEn === "" || newValueTr === "" || newValueRu === "");
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

  useEffect(() => {
    checkIfNewIsEmpty();
  }, [newValueEn, newValueTr, newValueRu]);

  //подключи проверку
  const handlecheckNew = (e) => {
    const reEN = /[a-z]/;
    const reTR = /\[.*\]/;
    const reRU = /^[а-яё]+$/;
    if (!reEN.test(newValueEn)) {
      return enErr();
    } else if (!reTR.test(newValueTr)) {
      return trErr();
    } else if (!reRU.test(newValueRu)) {
      return ruErr();
    } else {
      console.log(
        `english: ${newValueEn}; transcription: ${newValueTr}; russian: ${newValueRu}`
      );
    }
  };

  const handleNewClose = () => {
    setAddNew(false);
  };

  const handleAdd = () => {
    setAddNew(true);
  };

  return (
    <div>
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
              id="en"
              value={newValueEn}
              onChange={(e) => {
                setNewEn(e.target.value);
              }}
              className={newValueEn === "" ? "empty_input" : "input"}
            />
          </div>
          <div className="tr-word">
            <input
              type="text"
              id="tr"
              value={newValueTr}
              onChange={(e) => {
                setNewTr(e.target.value);
              }}
              className={newValueTr === "" ? "empty_input" : "input"}
            />
          </div>
          <div className="ru-word">
            <input
              type="text"
              id="ru"
              value={newValueRu}
              onChange={(e) => {
                setNewRu(e.target.value);
              }}
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
          {dataArr.map((item) => {
            return (
              <WordLine
                en={item.english}
                tr={item.transcription}
                ru={item.russian}
                key={item.id}
                id={item.id}
                handleDelete={handleDelete}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default WordsList;
