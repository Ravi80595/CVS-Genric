import Category from "../Modals/Category.js";
import Product from "../Modals/Product.js"



// ........................... Create category method ...............................

export const createCategory=async(req,res)=>{
    try {
      const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).send({ error: 'Error creating category in database' });
  }
}
// ........................... add product to category ...............................


export const addProductToCategory=async(req,res)=>{
    try {
    const categoryId = req.params.categoryId;
    const { name, description, price } = req.body;
      const product = await Product.create({ name, description, price, category: categoryId });
      res.status(201).json(product);
    } catch (err) {
      res.status(500).send({ error: 'Error adding product to category in database' });
    }
}

// ...........................All Products Get Method ...............................


export const getAllProducts = async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }catch(err){
        console.log(err)
    }
}



// ........................... Product Get Method ...............................

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }
}