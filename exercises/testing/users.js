debugger
const users = new Array(20).fill(0)
.map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`
  }
})

//fixID Function
const fixId=(id)=>parseInt(id)

console.log(users)

// simulate async db call with promise
const findUser = (id) => new Promise((resolve, reject) => {
  const _id=fixId(id);
  const user = users.find(user => user.id === _id)
  if (user) {
    return resolve(user)
  }
  reject(new Error(`No user with id "${id}"`))
})

// simulate async db call with promise
const deleteUser = (id) => new Promise((resolve, reject) => {
  const _id = fixId(id)
  const i = users.findIndex(user => user.id === _id)

  if (i < 0) {
    return reject(new Error(`No user with id "${_id}"`))
  }

  users.slice(i, 1)
  resolve({id})
})

module.exports = {
  findUser,
  deleteUser,
  fixId
}
