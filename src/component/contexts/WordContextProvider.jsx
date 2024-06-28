import React, { createContext, useState, useEffect } from "react";
import JSONServ from "../../Services/JSONServices";
export const wordContext = createContext();

export function WordContextProvider({ children }) {
  const [dataArr, setDataArr] = useState([]);
  const [updServ, setUpdServ] = useState(false);

  // if (!dataArr) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  async function getDataServ() {
    const data = await JSONServ.getData();
    setDataArr(data);
  }

  useEffect(() => {
    getDataServ();
  }, [updServ]);

  const stateContext = { dataArr, setDataArr, updServ, setUpdServ };

  return (
    <wordContext.Provider value={stateContext}>{children}</wordContext.Provider>
  );
}
