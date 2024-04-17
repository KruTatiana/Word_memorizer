import Word from "../Word/Word";
import "./word_card.scss";

function WordCard() {
  return (
    <div className="card">
      <div className="card_body">
        <Word english="laptop" transcription="[læptɒp]" russian="ноутбук" />
      </div>
    </div>
  );
}

export default WordCard;
