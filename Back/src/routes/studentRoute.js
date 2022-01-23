const studentsControllers = require("../controllers/studentsControllers");

module.exports = (router) => {
  const route = "/student";

  // P O S T   N E W   S T U D E N T S
  router.post(`${route}`, studentsControllers.register);

  // G E T   S T U D E N T S
  router.get(`${route}`, studentsControllers.get);
  // G E T   S T U D E N T S   B Y   E M A I L
  router.get(`${route}/:email`, studentsControllers.getEmail);

  // D E L E T E   S T U D E N T S
  router.delete(`${route}/:id`, studentsControllers.delete);

  // U P D A T E   S T U D E N T S
  router.put(`${route}/:id`, studentsControllers.update);
};
