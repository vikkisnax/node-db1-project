// these return a promise so w/e uses this function needs to use async/await .then/.catch - like in mw and router

//db wrapper
const db = require('../../data/db-config')


const getAll = () => {
  // SELECT * FROM accounts; - raw sql
  return db('accounts')
}

const getById = id => {
  // SELECT * FROM accounts WHERE id = 1;
  return db('accounts').where('id', id).first()
  // 💡 we need first() otherwise we get an array
}

const create = ({name, budget}) => {
  // INSERT INTO accounts (name, budget) VALUES ('testing', '100');
  const [id] = db('accounts').insert({ name, budget })
  return getById(id)
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
