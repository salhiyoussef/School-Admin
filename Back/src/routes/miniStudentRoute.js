const miniStudentController = require('../controllers/miniStudentsController');

module.exports = router => {
    const route = "/ministudents";
    // P O S T
    router.post(`${route}`, miniStudentController.register);

    // G E T   A L L   C L A S S
    router.get(`${route}`, miniStudentController.get);
    router.get(`${route}/all`, miniStudentController.getAll);

    // R E G I S T E R   M U L T I P E
    router.post(`${route}/mutlipe`, miniStudentController.registerMulti)

    // P U T
    router.put(`${route}/:id`, miniStudentController.update);
}