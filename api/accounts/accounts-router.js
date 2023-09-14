const router = require('express').Router();
//ig doing this instead of listing out the mw functions
const mw = require('./accounts-middleware');
const Accounts = require('./accounts-model')


router.get('/', 
  async (req, res, next) => {
    try{
    const accounts = await Accounts.getAll();
    res.json(accounts);
    } catch(err){
      next(err);
  }
})

router.get('/:id', mw.checkAccountId, async (req, res) => {
    res.json(req.accountId)
})

router.post('/', mw.checkAccountNameUnique, mw.checkAccountPayload, async (req, res, next) => {
    try{
      const newAccount = await Accounts.create(req.body)
      res.status(201).json(newAccount)
    } catch(err){
      next(err)
  }
})

router.put('/:id', 
  mw.checkAccountId,
  mw.checkAccountNameUnique, 
  mw.checkAccountPayload, 
  (req, res, next) => {
    try{
      res.json('put account by id')
    } catch(err){
      next(err)
  }
});

router.delete('/:id', 
  mw.checkAccountId,
  (req, res, next) => {
  try{
      res.json('delete account by id')
    } catch(err){
      next(err)
  }
})

//error handling mw 
router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
