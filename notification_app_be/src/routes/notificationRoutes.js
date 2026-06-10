const express = require("express");

const router = express.Router();

const getNotifications = require("../services/notificationServices");

router.get("/", async (req, res) => {

  try {

    const notifications = await getNotifications();

    const priorityMap = {
      Placement: 3,
      Result: 2,
      Event: 1
    };

    const sortedNotifications = notifications.sort((a, b) => {

      const priorityA = priorityMap[a.Type] || 0;
      const priorityB = priorityMap[b.Type] || 0;

      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const topNotifications = sortedNotifications.slice(0, 10);

    res.json(topNotifications);

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;