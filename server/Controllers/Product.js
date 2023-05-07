import Category from "../Modals/Category.js"
import Product from "../Modals/Product.js"


// ...........................All Products Get Method ...............................


export const getAllProducts = async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }catch(err){
        console.log(err)
    }
}

export const getAllCategories=async(req,res)=>{
    try{
      const categories = await Category.find();
      res.status(200).json(categories);
    }catch(err){
      res.status(500).send({ error: 'Error adding product to category in database' });
  
    }
  }


export const getProductByCategory=async(req,res)=>{
    try {
        const category = req.params.category;
        const products = await Product.find({ categoryName: category });
        res.json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// ...........................Single Product Get Method ...............................

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }
}

