// these return a promise so w/e uses this function needs to use async/await .then/.catch - like in mw and router

//db wrapper
const db = require('../../data/db-config')


const getAll = () => {
  // SELECT * FROM accounts; - raw sql
  return db('accounts')
}

const getById = id => {
  // SELECT * FROM accounts WHERE id = 1;
  // 💡 we need first() otherwise we get an array
  return db('accounts').where('id', id).first();
}

const create = async (account) => {
  // INSERT INTO accounts (name, budget) VALUES ('foo', 100);
  const [id] = await db('accounts').insert(account);
  return getById(id);
}

const updateById = (id, account) => {
  //
}

const deleteById = id => {
  // DELETE FROM accounts WHERE id = 1;
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
