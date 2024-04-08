import Word from "../Word/Word";

function WordCard() {
  return(
    <div className="card">
      <div className="card_body">
        <Word
          english = "laptop"
          transcription = "[læptɒp]"
          russian = "ноутбук"
        />
      </div>
      <div className="card_footer">
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
}


export default WordCard;