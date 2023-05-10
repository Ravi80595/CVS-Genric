import Category from '../../Modals/Category.js';
import Product from '../../Modals/Product.js'


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

export const addProductToCategory = async (req, res) => {
  try {
    const { categoryName, name, description, price,brandName,Strength,Form } = req.body;
    const category = await Category.findOne({ name: categoryName });
    const categoryId = category._id;
    console.log(category,name,description,price)
    const product = await Product.create({ name, description, price, category: categoryId,categoryName:categoryName ,brandName,Strength,Form});
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send({ error: 'Error adding product to category in database' });
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


export const getAllProducts=async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const singleProductAdmin=async(req,res)=>{
    try {
        const productId = req.params.id;
        console.log('clicked')
        // Find the product by ID using the Product model
        const product = await Product.findById(productId);
    
        // If the product doesn't exist, return a 404 error
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

export const updateProductAdmin=async(req,res)=>{
    try {
        const productId = req.params.id;
        const { productName, description, price, category, image } = req.body;
    
        // Find the product by ID using the Product model
        const product = await Product.findById(productId);
    
        // If the product doesn't exist, return a 404 error
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // Update the product's information
        product.productName = productName || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.image = image || product.image;
    
        // Save the updated product to the database
        const savedProduct = await product.save();
    
        res.status(200).json(savedProduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const deleteProductAdmin=async(req,res)=>{
    try {
        const productId = req.params.id;
    
        // Find the product by ID using the Product model
        const product = await Product.findById(productId);
    
        // If the product doesn't exist, return a 404 error
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        await product.deleteOne();
        res.status(200).json({ message: 'Product removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
        }
}