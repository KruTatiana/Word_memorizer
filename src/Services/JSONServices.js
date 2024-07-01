import { json } from "react-router-dom";

export default class JSONServ {
  static async getData() {
    try {
      const resp = await fetch ("/api/words");
      const data = await resp.json();
      return data;
    }
    catch(e) {
      console.log(e);
    }
  }

  static async addData(data) {
    try {
      await fetch ("/api/words/add",{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
    }
    catch(e) {
      console.log(e);
    }
  }

  static async changeData(data) {
    let id = data.id;

    try {
      await fetch (`/api/words/${id}/update`,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
    }
    catch(e) {
      console.log(e);
    }
  }
  
  static async deleteData(data) {
    let id = data.id;

    try {
      await fetch (`/api/words/${id}/delete`,{
        method: "POST",
        headers:{"Content-Type": "application/json"}
      });
    }
    catch(e) {
      console.log(e);
    }
  }

  static async getCard(itemIndex) {
    let i = itemIndex.itemIndex;
    console.log(i);


    try {
      const resp = await fetch (`/api/words/${i}`);
      const data = await resp.json();
      return data;
    }
    catch(e) {
      console.log(e);
    }
  }
}