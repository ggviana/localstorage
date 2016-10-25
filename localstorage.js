const library = {

  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  get (key) {
    var value
    
    try {
      value = JSON.parse(window.localStorage.getItem(key))
    }
    catch (e) {}

    return value
  },

  remove (key) {
    window.localStorage.removeItem(key)
  },
}

module.exports = library
module.exports.default = library