const express = require("express");
const passport = require("passport");
const router = express.Router();

// R O U T E S   U S E R S
require("./usersRoute")(router, passport);

// R O U T E S   S T U D E N T S
require("./studentRoute")(router);
require("./miniStudentRoute")(router);

// R O U T E S   S C H O O L   L E V E L
require("./schoolLevelRoute")(router);

// R O U T E S   C L A S S
require("./classRoute")(router);

// R O U T E S   S E  C T I O N
require("./sectionRoute")(router);

// R O U T E   D R I V E
require("./driverRoute")(router);

// R O U T E   P A I E M E N T
require("./paiementRoute")(router);

// R O U T E   T R A N S P O R T
require("./transportRoute")(router);

module.exports = router;
