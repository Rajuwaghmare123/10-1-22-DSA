const items = [1, 2, 3, 4, 5]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
]

const result = insert(items, 1, 10)
console.log(result)