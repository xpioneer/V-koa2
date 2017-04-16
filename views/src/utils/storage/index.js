
export default {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  get: (key) => {
    return localStorage.getItem(key);
  },
  setObj: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getObj: (key) => {
    return JSON.parse(localStorage.getItem(key) || '{}');
  },
  remove: (key) =>{
    localStorage.removeItem(key)
  },
  clear: () =>{
    localStorage.clear()
  }
}