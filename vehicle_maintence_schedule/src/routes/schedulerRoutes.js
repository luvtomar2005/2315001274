const express = require("express");

const router = express.Router();

const getDepots = require("../services/depotService");
const getVehicles = require("../services/vehicleService");
const optimizeTasks = require("../algorithm/algo");

router.get("/", async (req, res) => {

  try {

    const depots = await getDepots();
    const vehicles = await getVehicles();

    let finalResult = [];

    for (let depot of depots) {

      const optimized = optimizeTasks(
        vehicles,
        depot.MechanicHours
      );

      finalResult.push({
        depotId: depot.ID,
        mechanicHours: depot.MechanicHours,
        result: optimized
      });
    }

    res.json(finalResult);

  } catch (error) {

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;