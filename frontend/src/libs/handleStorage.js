class HandleStorage {
  constructor() {}

  static clearStorage() {
    localStorage.clear()
  }

  static getStorage() {
    return({
      "user": JSON.parse(localStorage.getItem('user')),
      "token": localStorage.getItem('token'),
      "favorites": JSON.parse(localStorage.getItem('favorites'))
    })
  }

  static setStorage(data, action) {
    if(action === "user")
      localStorage.setItem('user', JSON.stringify(data));
    if(action === "token")
      localStorage.setItem('token', data);
    if(action === "favorites") {
      const f = localStorage.getItem('favorites')
      if(f) {
        const a = JSON.parse(f);
        a.push(data)
        localStorage.setItem('favorites', JSON.stringify(a))
      }
      else
        localStorage.setItem('favorites', JSON.stringify([data]))
    }
  }  
};

export default HandleStorage;