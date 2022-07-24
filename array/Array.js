class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length += 1
    return this.length
  }

  pop() {
    if (this.length > 0) {
      const lastItem = this.data[this.length - 1]
      this.#dropLastItem()
      return lastItem
    }
  }

  unshift(item) {
    for (let i = this.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
    this.length += 1
  }

  shift() {
    const removedItem = this.data[0]
    this.delete(0)
    return removedItem
  }

  delete(index) {
    if (index >= 0 && index < this.length) {
      const item = this.data[index]
      this.#shiftItems(index)
      this.#dropLastItem()
      return item
    }
  }

  // helpers

  #shiftItems(index) {
    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1]
    }
  }

  #dropLastItem() {
    delete this.data[this.length - 1]
    this.length -= 1
  }
}

module.exports = {
  MyArray,
}
