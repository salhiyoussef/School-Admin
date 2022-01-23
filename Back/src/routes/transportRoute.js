const transportController = require("../controllers/transportController");

module.exports = router => {
  const route = "/transport";

  // P O S T   T R A N S P O R T
  router.post(`${route}`, transportController.register);

  // G E T   T R A N S P O R T
  router.get(`${route}`, transportController.get);

  // D E L E T E   T R A N S P O R T
  router.delete(`${route}/:id`, transportController.delete);

  // U P D A T E  T R A N S P O R T
  router.put(`${route}/:id`, transportController.update);
};
