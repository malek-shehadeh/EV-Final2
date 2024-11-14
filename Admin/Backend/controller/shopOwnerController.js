const ShopOwner = require("../models/shopOwneradmin");

exports.getAllShopOwners = async (req, res) => {
  try {
    const shopOwners = await ShopOwner.find({}, "-password");
    res.json(shopOwners);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching shop owners", error: error.message });
  }
};

exports.updateShopOwnerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isApproved } = req.body;

    const updatedShopOwner = await ShopOwner.findByIdAndUpdate(
      id,
      { isApproved },
      { new: true, select: "-password" }
    );

    if (!updatedShopOwner) {
      return res.status(404).json({ message: "Shop owner not found" });
    }

    res.json(updatedShopOwner);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating shop owner status",
        error: error.message,
      });
  }
};
