import { createContext, useState, useEffect } from "react";
import JSONServ from "../../Services/JSONServices";
export const wordContext = createContext();

export function WordContextProvider({ children }) {
  const [dataArr, setWords] = useState(false);
  const [updServ, setUpdServ] = useState(false);

  if (!dataArr) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  async function getDataServ() {
    const data = await JSONServ.getData();
    setWords(data);
  }

  useEffect(() => {
    getDataServ();
  }, [updServ]);

  const stateContext = { dataArr, setWords, updServ, setUpdServ };

  return (
    <wordContext.Provider value={stateContext}>{children}</wordContext.Provider>
  );
}
