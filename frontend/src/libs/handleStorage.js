class HandleStorage {
  constructor() {}

  static clearStorage() {
    localStorage.clear()
  }

  static getStorage() {
    return({
      "user": JSON.parse(localStorage.getItem('user')),
      "token": localStorage.getItem('token'),
    })
  }

  static setStorage(data, action) {
    if(action === "user")
      localStorage.setItem('user', JSON.stringify(data));
    if(action === "token")
      localStorage.setItem('token', data);
  }  
};

export default HandleStorage;