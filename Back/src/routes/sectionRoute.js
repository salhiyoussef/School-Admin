const sectionController = require('../controllers/sectionController');

module.exports = router => {
    const route = "/section";
   // P O S T
   router.post(`${route}`, sectionController.register);

   // G E T   A L L   S E C T I O N 
   router.get(`${route}`, sectionController.getAll);

   // G E T   C L A S S   B Y   C L A S S   I D
   router.get(`${route}/:id`, sectionController.getByClassId);

   // D E L E T E   S E C T I O N
   router.delete(`${route}/:id`, sectionController.delete);

   // U P D T A E   S E C T I O N
   router.put(`${route}/:id`, sectionController.update);
}