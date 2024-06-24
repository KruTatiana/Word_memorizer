import { makeAutoObservable, observable, action, computed } from "mobx";

class WordsStore {
  words = [];
  isGetLoading = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {
      word: observable,
      isGetLoading: observable,
      isLoading: observable,
      getData: action,
      deleteWord: action,
      updateWord: action,
      addNewWord: action,
    });
  }

  getData() {
    this.isGetLoading = true;
    return fetch("/api/words", {
      method: "GET",
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        this.words = data;
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isGetLoading = false;
      });
  }

  deleteWord(id, index) {
    this.isLoading = true;
    return fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(resp);
        const newArr = this.words.filter((el, i) => {
          return i != index;
        });
        this.words = newArr;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  updateWord(word, index) {
    this.isLoading = true;
    return fetch(`/api/words/${word.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(resp);
        const newArr = this.words.map((el, i) => {
          if (i == index) {
            el = { ...word };
          }
          return el;
        });
        this.words = newArr;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  addNewWord(word) {
    this.isLoading = true;
    return fetch(`/api/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(resp);
        this.words.push(word);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}

export default WordsStore;
