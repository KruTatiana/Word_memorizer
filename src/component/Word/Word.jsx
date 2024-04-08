function Word(props) {
  return (
    <div>
      <h3>{props.english}</h3>
      <p>{props.transcription}</p>
      <p>{props.russian}</p>
    </div>
  );
}

export default Word;