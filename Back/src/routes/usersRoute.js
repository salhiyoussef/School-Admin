const userController = require("../controllers/usersController");

module.exports = (router, passport) => {
  const route = "/users";

  // P O S T   N E W   U S E R
  router.post(`${route}`, userController.register);

  // L O G I N   U S E R
  router.post(`${route}/login`, userController.login);

  // P R O T E C T E D   A P I
  router.all("*", (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user) => {
      if (err || !user) {
        const error = new Error("You are not authorized");
        error.status = 401;
        next(error);
      }

      req.user = user;
      return next();
    })(req, res, next);
  });

  //   G E T   A L L   U S E R S
  router.get(`${route}`, userController.getAll);

  // G E T   U S E R   B Y   I D
  router.get(`${route}/:email`, userController.getEmail);

  // D E L E T E   U S E R   B Y   I D
  router.delete(`${route}/:id`, userController.delete);

  // U S E R   U P D A T E 
  router.put(`${route}/:id`, userController.update);
};
