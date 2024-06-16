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

  static async addData(data) {
    try {
      await fetch ("http://itgirlschool.justmakeit.ru/api/words",{
        method: "POST",
        body: JSON.stringify(data)
      });
    }
    catch(e) {
      console.log(e);
    }
  }

  static async deleteData(dataArr) {
    try {
      await dataArr.map((item)=>{
        if (item.id === id){
          dataArr.splice(id,1);
        }
      });
      await fetch ("http://itgirlschool.justmakeit.ru/api/words",{
        method: "POST",
        body: JSON.stringify(dataArr)
      });
    }
    catch(e) {
      console.log(e);
    }
  }


//Удаление задачи кнопкой на самой задаче

// function removeTask(el){
// arrayFromStorage = localStorage.getItem('tasksStorage');
// arrayFromStorage = JSON.parse(arrayFromStorage);
//   arrayFromStorage.forEach((obj,key) => {
//       if(obj.id == taskId) {
//           arrayFromStorage.splice(key,1);
//       }
//   });
//   window.localStorage.setItem('tasksStorage', JSON.stringify(arrayFromStorage));
//   tasksList.innerHTML = '';
//   getTaskList();
// }


  // static async changeData(dataArr, id) {
  //   const data = dataArr.map(item){
  //     if (item.id === id){

  //     }
  //   }
  //   try {
  //     await fetch ("http://itgirlschool.justmakeit.ru/api/words",{
  //       method: "POST",
  //       body: JSON.stringify(dataArr)
  //     });
  //   }
  //   catch(e) {
  //     console.log(e);
  //   }
  // }
}