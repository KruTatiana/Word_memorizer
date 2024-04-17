import "./word.scss";
import { useState } from "react";

export default function Word(props) {
  const [click, setClick] = useState(false);

  const handleChange = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className="word_body">
        <h3>{props.english}</h3>
        <p>{props.transcription}</p>
      </div>
      <div onClick={handleChange}>
        {click ? (
          <p>{props.russian}</p>
        ) : (
          <button className="button_checkWord">Проверить</button>
        )}
      </div>
    </div>
  );
}
