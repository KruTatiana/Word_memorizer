import './enter_line.scss';

const EnterLine = () => {
  return(
    <>
      <div className='enter_en-word'><input type="text" id="en_word" placeholder="слово" /></div>
      <div className='enter_tr-word'><input type="text" id="tr-word" placeholder="транскрипция" /></div>
      <div className='enter_ru-word'><input type="text" id="ru-word" placeholder="перевод" /></div>
      <div className="buttons">
        <button className="button_save"></button>
        <button className="button_edit"></button>
        <button className="button_delete"></button>
      </div>
    </>
  )
};

export default EnterLine;