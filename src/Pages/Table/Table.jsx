import "./table.scss";
import WordLine from "../../component/WordLine/WordLine";
import wordsArr from "../../component/dictionary";

const WordsList = () => {
  return (
    <ul className="list">
      <li className="list_head">
        <div className="list_en">Английский</div>
        <div className="list_tr">Транскрипция</div>
        <div className="list_ru">Перевод</div>
        <div className="list_empty"></div>
      </li>
      <li>
        {wordsArr.map((item, id) => {
          return (
            <WordLine
              en={item.english}
              trnsc={item.transcription}
              ru={item.russian}
              key={id}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default WordsList;
