import Word from "../Word/Word";

function WordsList(props) {
  return(
    <div className="list">
      <Word
        word
        meaning
        transcription
        translation
        topic
        />
    </div>
  );
};


export default WordsList;