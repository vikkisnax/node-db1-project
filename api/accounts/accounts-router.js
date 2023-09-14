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

router.get('/:id', mw.checkAccountId, async (req, res, next) => {
    try{
      const account = await Accounts.getById(req.params.id)
      res.json(account)
    }catch(err){
      next(err)
    }
})

router.post('/', mw.checkAccountNameUnique, mw.checkAccountPayload, async (req, res, next) => {
    try{
      const newAccount = await Accounts.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      })
      res.status(201).json(newAccount)
    } catch(err){
      next(err)
  }
})

router.put('/:id', 
  mw.checkAccountId,
  mw.checkAccountPayload, 
  async (req, res, next) => {
    const updated = await Accounts.updateById(req.params.id, req.body);
    try {
      res.json(updated)
    }catch(err){
      next(err)
    }
});

router.delete('/:id', mw.checkAccountId,
  async (req, res, next) => {
  try{
      await Accounts.deleteById(req.params.id)
      res.json(req.account)
    } catch(err){
      next(err)
  }
})

//error handling mw 
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
