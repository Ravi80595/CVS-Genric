import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import User from '../Modals/User.js';


// ........................... User Signup Method ...............................

export const register = async (req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body;
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
        })
        const saveUser = await newUser.save()
        res.status(201).send({"msg":"User Saved Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
}

// ........................... User Login Method ...............................

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User not exist"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"wrong details"})

        const token= jwt.sign({userId:user._id},process.env.JWT_KEY)
        delete user.password;
        res.status(200).json({token,user,msg:"Login Success"})
    }catch(err){
        console.log(err)
    }
}

// ........................... User Profile Get Method ...............................

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}