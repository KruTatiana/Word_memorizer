import "./table.scss";
import { useContext } from "react";
import WordLine from "../../component/WordLine/WordLine";
import { wordContext } from "../../component/contexts/WordContextProvider";

const WordsList = () => {
  const { dataArr } = useContext(wordContext);

  return (
    <div>
      <ul className="list">
        <li className="list_head">
          <div className="list_en">Английский</div>
          <div className="list_tr">Транскрипция</div>
          <div className="list_ru">Перевод</div>
          <div className="list_empty"></div>
        </li>
        <li>
          {dataArr.map((item) => {
            return (
              <WordLine
                en={item.english}
                tr={item.transcription}
                ru={item.russian}
                key={item.id}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default WordsList;
