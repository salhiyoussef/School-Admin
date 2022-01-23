const paiementController = require("../controllers/paiementController");

module.exports = router => {
  const route = "/paiement";

  // P O S T   P A I E M E N T 
  router.post(`${route}`, paiementController.register);

  // G E T   P A I E M E N T 
  router.get(`${route}`, paiementController.get);
//   router.get(`${route}/:filters`, paiementController.filters);

  // D E L E T E   P A I E M E N T 
  router.delete(`${route}/:id`, paiementController.delete);

  // U P D A T E   P A I E M E N T 
  router.put(`${route}/:id`, paiementController.update);
};
