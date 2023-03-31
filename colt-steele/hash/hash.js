class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) { // arrayLen - size of the storage map
    let total = 0
    const WEIRD_PRIME = 31  // random multiplier

    for (let i = 0; i < Math.min(key.length, 100); i++) { // Limit a quantity of analysed symbols to 100
      const char = key[i]
      const value = char.charCodeAt(0) - 96   // code of a symbol
      total = (total * WEIRD_PRIME + value) % this.keyMap.length // each time total will be changed and will be less than arrayLen
    }

    return total
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)
    if (this.keyMap[index]) {
      const [_, value] = this.keyMap[index]?.find(([currentKey]) => currentKey === key)
      return value
    }
  }

  values() {
    const valuesArr = []
    this.keyMap.forEach(arr => {
      arr?.forEach(([_, value]) => !valuesArr.includes(value) && valuesArr.push(value))
    })
    return valuesArr
  }

  keys() {
    const keysArr = []
    this.keyMap.forEach(arr => {
      arr?.forEach(([key]) => !keysArr.includes(key) && keysArr.push(key))
    })
    return keysArr
  }
}

const ht = new HashTable(4)
ht.set('test', 'test')
ht.set('test2', 'test2')
ht.set('test3', 'test3')
ht.set('test3', 'test3')
ht.set('test4', 'test4')
ht.values()