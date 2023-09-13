exports.checkAccountPayload = (req, res, next) => {
  console.log('checkAccountPayload mw')
  next()
}
exports.checkAccountNameUnique = (req, res, next) => {
  console.log('checkAccountNameUnique mw')
  next()
}
exports.checkAccountId = (req, res, next) => {
  console.log('checkAccountId mw')
  next()
}


// Note: you can either write "manual" validation logic
// or use the Yup library (not currently installed)