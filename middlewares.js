export default (req, res, next) => {
  res.locals.siteName = "jeonghoHeo";
  next();
};
