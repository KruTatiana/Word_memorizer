import "./word.scss";
import { useState } from "react";

export default function Word({ en, tr, ru }) {
  const [click, setClick] = useState(false);

  const handleChange = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className="word_body">
        <h3>{en}</h3>
        <p>{tr}</p>
      </div>
      <div onClick={handleChange}>
        {click ? (
          <p>{ru}</p>
        ) : (
          <button className="button_checkWord">Проверить</button>
        )}
      </div>
    </div>
  );
}
