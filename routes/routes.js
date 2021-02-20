const counterRoute = require('./counter');
const appRouter = (app, fs) => {
  counterRoute(app, fs);
};

module.exports = appRouter;
