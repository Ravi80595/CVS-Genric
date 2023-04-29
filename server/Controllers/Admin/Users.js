import User from '../../Modals/User.js'


export const getAllUsersAdmin=async(req,res)=>{
    try {
        // Find all users using the User model
        const users = await User.find();
    
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const singleUserDetails=async(req,res)=>{
    try {
        const userId = req.params.id;
    
        // Find the user by ID using the User model
        const user = await User.findById(userId);
    
        // If the user doesn't exist, return a 404 error
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}



export const deleteUserByAdmin=async(req,res)=>{
    try {
        const userId = req.params.id;
    
        // Find the user by ID using the User model
        const user = await User.findById(userId);
    
        // If the user doesn't exist, return a 404 error
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Delete the user from the database
        await user.remove();
        res.status(200).json({ message: 'User deleted' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    
}