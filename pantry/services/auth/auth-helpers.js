const bcrypt = require('bcryptjs');

const comparePass = (userPassword, databasePassword) => {
  return bcrypt.compareSync(userPassword, databasePassword);
};

const loginRedirect = (req, res, next) => {
  if (req.user) return res.redirect('/user');
  return next();
};
