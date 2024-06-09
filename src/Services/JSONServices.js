export default class JSONServ {
  static async getData() {
    try {
      const resp = await fetch ("http://itgirlschool.justmakeit.ru/api/words");
      const data = await resp.json();
      return data;
    }
    catch(e) {
      console.log(e);
    }
  }

  static async addData(dataArr) {
    try {
      await fetch ("http://itgirlschool.justmakeit.ru/api/words",{
        method: "POST",
        body: JSON.stringify(dataArr)
      });
    }
    catch(e) {
      console.log(e);
    }
  }
}