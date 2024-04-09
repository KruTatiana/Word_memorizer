import './word_list.scss';
import WordLine from '../WordLine/WordLine';
import EnterLine from '../EnterLine/EnterLine';

const WordsList = () => {
  let editWord = true;

  return(
    <ul className="list">
      <li className="list_head">
        <div className="list_en">Английский
        </div>
        <div className="list_tr">Транскрипция
        </div>
        <div className="list_ru">Перевод
        </div>
        <div className="list_empty"></div>
      </li>
        {editWord&&<li className="line_input"><EnterLine/></li>}
      <li className="line_word">
        <WordLine/>
      </li>
      </ul>
  );
};

export default WordsList;