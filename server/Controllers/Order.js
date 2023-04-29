


export const getAllOrderOfUser=async(req,res)=>{
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
}


export const getSingleOrderUser=async(req,res)=>{
    try {
        const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
        if (!order) {
          return res.status(404).json({ error: 'Order not found.' });
        }
        res.json(order);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
}


export const addOrder=async(req,res)=>{
    try {
        const { user, products, total, shipping } = req.body;
    
        // Create a new order using the Order model
        const newOrder = new Order({
          user: user,
          products: products,
          total: total,
          shipping: shipping,
          status: 'pending'
        });
        // Save the new order to the database
        const savedOrder = await newOrder.save();
    
        res.status(201).json(savedOrder);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

