// Web Storageのインターフェースを簡易的に実装したクラス
// JSのオブジェクト上にデータを保存する
// テストでlocalStorageやsessionStorageなどを一時的にfakeするために利用
class FakeStorage {

  constructor() {}

  get length() {
    return this.keys().length;
  }

  getItem(key) {
    return this[key];
  }

  setItem(key, data) {
    this[key] = data;
  }

  removeItem(key) {
    delete this[key];
  }

  key(index) {
    return this.keys()[index] || null;
  }

  clear() {
    this.keys().forEach((key) => {
      this.removeItem(key);
    });
  }

  keys() {
    return Object.keys(this);
  }
}

// localStorageをfakeするためのユーティリティ
// 利用例)
// let fake = useFakeLocalStorage();
// (localStorageを使ったテスト)
// fake.restore(); // これでfakeが終了する
function useFakeLocalStorage() {
    let origLocalStoragePropertyDescriptor = Object.getOwnPropertyDescriptor(
        window, 'localStorage'
    ) || { value: undefined, enumerable: true, configurable: true };

    let fakeLocalStorage = new FakeStorage();
    Object.defineProperty(window, 'localStorage', {
        value: fakeLocalStorage,
        enumerable: true,
        configurable: true,
    });

    return {
        restore() {
            Object.defineProperty(window, 'localStorage', origLocalStoragePropertyDescriptor);
        }
    };
}

export { FakeStorage, useFakeLocalStorage };
