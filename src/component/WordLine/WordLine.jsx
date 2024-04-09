import './word_line.scss';

const WordLine = () => {
  return(
    <>
      <div className='line_en-word'>laptop</div>
      <div className='line_tr-word'>&#91;læptɒp&#93;</div>
      <div className='line_ru-word'>ноутбук</div>
      <div className="buttons">
        <button className='button_edit' id='buttonEditWord'></button>
        <button className='button_delete'></button>
      </div>
    </>
  )
};

export default WordLine;