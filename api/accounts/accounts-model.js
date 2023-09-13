//db wrapper
const db = require('../../data/db-config')

const getAll = () => {
  // SELECT * FROM accounts; - raw sql
  // returns a promise so w/e uses this function needs to use async/await .then/.catch
  return db('accounts')
}

const getById = id => {
  // SELECT * FROM accounts WHERE id = 1;
  return db('accounts').where('id', id).first()
  // 💡 we need first() otherwise we get an array
}

const create = account => {
  //
}

const updateById = (id, account) => {
  //
}

const deleteById = id => {
  //
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
