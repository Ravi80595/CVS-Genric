import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import Admin from '../../Modals/Admin.js'



// ........................... Admin Signup Method ...............................

export const registerAdmin = async (req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body;
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)
        const newUser = new Admin({
            firstName,
            lastName,
            email,
            password:passwordHash,
        })
        const saveUser = await newUser.save()
        res.status(201).send({"msg":"Admin Saved Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
}

// ........................... User Login Method ...............................

export const loginAdmin = async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await Admin.findOne({email:email})
        if(!user) return res.status(400).json({msg:"Admin not exist"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"wrong details"})

        const token= jwt.sign({id:user._id},process.env.JWT_KEY)
        delete user.password;
        res.status(200).json({token,user})

    }catch(err){
        console.log(err)
    }
}

// ........................... Admin Profile Get Method ...............................

export const getAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const admin = await Admin.findById(id)
        res.status(200).json(admin)
    } catch (err) {
        console.log(err)
    }
}