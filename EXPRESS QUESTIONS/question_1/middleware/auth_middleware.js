module.exports = function AuthMiddleWare(req, res, next) {
  const isAuthenTicated = false; //Dummy Varisable
  if (isAuthenTicated) {
    next();
  } else {
    res.status(401).send({
      message: "User is not authenticated",
    });
  }
};
