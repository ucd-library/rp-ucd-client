export default app => {
  app.get(/^\/(person|work)\/.+/, (req, res, next) => {
    // TODO
    next();
  });
}