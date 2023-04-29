import Product from '../../Modals/Product.js'


export const addProduct=async(req,res)=>{
    try {
        const { productName, description, price, category, image } = req.body;
        // Create a new product using the Product model
        const newProduct = new Product({
          productName,
          description,
          price,
          category,
          image,
        });
    
        // Save the new product to the database
        const savedProduct = await newProduct.save();
    
        res.status(201).json(savedProduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}


export const getAllProducts=async(req,res)=>{
    try {
        // Find all products using the Product model
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