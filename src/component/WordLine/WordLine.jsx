import "./word_line.scss";

const WordLine = ({ en, trnsc, ru }) => {
  return (
    <>
      <div className="line_en-word">{en}</div>
      <div className="line_tr-word">{trnsc}</div>
      <div className="line_ru-word">{ru}</div>
    </>
  );
};

export default WordLine;
