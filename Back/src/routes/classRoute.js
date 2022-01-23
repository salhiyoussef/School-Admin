const classController = require('../controllers/classController');

module.exports = router => {
    const route = "/class";
    // P O S T
    router.post(`${route}`, classController.register);

    // G E T   A L L   C L A S S
    router.get(`${route}`, classController.getAll);

    // G E T   C L A S S   B Y   L E V E L
    router.get(`${route}/:idLevel`, classController.getClassByLevelId);

    // D E L E T E   C L A S S
    router.delete(`${route}/:id`, classController.delete);

    // U P D T A E   C L A S S
    router.put(`${route}/:id`, classController.update);
}