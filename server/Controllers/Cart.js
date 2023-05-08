import Cart from "../Modals/Cart.js";



export const getCart=async(req,res)=>{
    try {
      console.log(req.user,'er')
        const cart = await Cart.findOne({ customerId: req.user }).populate('products.product');
        res.json(cart);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
}


export const addProductToCart = async(req, res) => {
  try {
    const { productId, quantity } = req.body;
    const customerId = req.user;
    const cart = await Cart.findOne({ customerId }).populate('products.product');
    if (cart) {
      // Cart exists, so add the product to it
      const existingProduct = cart.products.find(p => p.product.equals(productId));
      if (existingProduct) {
        // Product already exists in cart, so update the quantity
        existingProduct.quantity += quantity;
      } else {
        // Product doesn't exist in cart, so add it
        cart.products.push({ product: productId, quantity });
      }
      await cart.save();
    } else {
      // Cart doesn't exist, so create a new one with the product
      const newCart = new Cart({
        customerId,
        products: [{ product: productId, quantity }]
      });
      await newCart.save();
    }
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


// export const addProductToCart=async(req,res)=>{
//     try {
//         const cart = await Cart.findOne({ customerId: req.user._id });
//         if (cart) {
//           const existingProduct = cart.products.find(p => p.product.equals(req.body.productId));
//           if (existingProduct) {
//             existingProduct.quantity += req.body.quantity;
//           } else {
//             cart.products.push({ product: req.body.productId, quantity: req.body.quantity });
//           }
//           await cart.save();
//         } else {
//           const newCart = new Cart({
//             customerId: req.user._id,
//             products: [{ product: req.body.productId, quantity: req.body.quantity }]
//           });
//           await newCart.save();
//         }
//         res.sendStatus(201);
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//       }
// }

export const updateProductquantity=async(req,res)=>{
    try {
        const cart = await Cart.findOne({ customerId: req.user });
        const product = cart.products.find(p => p.product.equals(req.params.productId));
        console.log(product)
        if (product) {
          product.quantity = req.body.quantity;
          await cart.save();
          res.sendStatus(200);
        } else {
          res.status(404).json({ error: 'Product not found in cart' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
}

export const deleteProductFromCart=async(req,res)=>{
  console.log(req.params.id)
    try {
        const cart = await Cart.findOne({ customerId: req.user });
        const productIndex = cart.products.findIndex(p => p.product.equals(req.params.id));
        if (productIndex !== -1) {
          cart.products.splice(productIndex, 1);
          await cart.save();
          res.sendStatus(200);
        } else {
          res.status(404).json({ error: 'Product not found in cart' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
}
