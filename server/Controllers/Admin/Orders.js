import Order from '../../Modals/Order.js'



export const allOrders=async(req,res)=>{
    try {
        const orders = await Order.find().populate('user', '-password');
        res.status(200).json(orders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const getSingleOrder=async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate('user', '-password');
        if (!order) {
          return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const updateOrderStatus=async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
          return res.status(404).json({ message: 'Order not found' });
        }
        order.status = req.body.status;
        await order.save();
        res.status(200).json({ message: 'Order status updated' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}