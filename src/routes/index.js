const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const appointmentRoutes = require("./appointment.routes");
const serviceRoutes = require("./service.routes");
const userRoutes = require("./user.routes");


router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/services", serviceRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
