import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {

  try {

    // Find user
    let userData = await userModel.findById(req.body.userId);

    // Get cart data
    let cartData = await userData.cartData;

    // If item does not exist
    if (!cartData[req.body.itemId]) {

      cartData[req.body.itemId] = 1;

    } else {

      // Increase item quantity
      cartData[req.body.itemId] += 1;

    }

    // Update database
    await userModel.findByIdAndUpdate(req.body.userId,{ cartData });
    res.json({success: true,message: "Added To Cart"});

  } catch (error) {
    console.log(error);
res.json({success: false,message: "Error"});

  }

};

// Remove items from user cart
const removeFromCart = async (req, res) => {

  try {

    // Find user
    let userData = await userModel.findById(req.body.userId);

    // Get cart data
    let cartData = await userData.cartData;

    // Check item quantity
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    // Update database
    await userModel.findByIdAndUpdate(req.body.userId,{ cartData });
res.json({success: true,message: "Removed From Cart"});

  } catch (error) {
    console.log(error);
res.json({success: false,message: "Error" });

  }

};

// Fetch cart data
const getCart = async (req, res) => {

  try {

    // Find user
    let userData = await userModel.findById(req.body.userId);
    // Get cart data
    let cartData = await userData.cartData;
res.json({success: true,cartData});
  } catch (error) {
console.log(error);
res.json({success: false,message: "Error"});

  }

};

// Export all functions
export { addToCart, removeFromCart, getCart };