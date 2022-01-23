const schoolLevelController = require('../controllers/schoolLevelController');

module.exports = router => {
    const route = "/schoolLevel";

    // P O S E T
    router.post(`${route}`, schoolLevelController.register);

    // G E T 
    router.get(`${route}`, schoolLevelController.getSchoolLevel);

    // D E L E T E
    router.delete(`${route}/:id`, schoolLevelController.delete);

    // U P D A T E
    router.put(`${route}/:id`, schoolLevelController.update);
}