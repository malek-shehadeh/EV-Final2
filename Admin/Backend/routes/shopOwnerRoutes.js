const express = require("express");
const router = express.Router();
const shopOwnerController = require("../controller/shopOwnerController");

router.get("/", shopOwnerController.getAllShopOwners);
router.patch("/:id", shopOwnerController.updateShopOwnerStatus);

module.exports = router;
