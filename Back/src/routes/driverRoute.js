const driverController = require("../controllers/driverController");

module.exports = router => {
  const route = "/driver";

  // P O S T   D R I V E R
  router.post(`${route}`, driverController.register);

  // G E T   D R I V E R
  router.get(`${route}`, driverController.get);
//   router.get(`${route}/:filters`, driverController.filters);

  // D E L E T E   D R I V E R
  router.delete(`${route}/:id`, driverController.delete);

  // U P D A T E   D R I V E R
  router.put(`${route}/:id`, driverController.update);
};
