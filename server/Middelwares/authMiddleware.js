import jwt from 'jsonwebtoken';
// import User from '../Modals/User.js';


const authMiddleware = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,'ravi')
        if(decoded){
            const userId = decoded.userId
            req.user = userId
            next()
        }
        else{
            res.send("Please Login ")
        }
    }
    else{
        res.send('Please Login')
    }
}

export default authMiddleware;
