import productModel from '../model/productimg.js';
class productController{
    static createProduct = async(req, res) =>{
        try{
            // console.log(req.body);
            let products = await productModel.find();
            let id;
            if(id==undefined){
                id=1;
            }
            if(products.length>0){
                let last_products_array=products.slice(-1);
                let last_products =last_products_array[0];
                id=last_products.id+1;
            }
            else{
                id=products[products.length-1].id+1;
            }
            let product = new productModel({
                id:id,
                name:req.body.name,
                image:req.body.image,
                category:req.body.category,
                new_price:req.body.new_price,
                old_price:req.body.old_price,
            });

            let result = await product.save();
            // let result =req.body;
            res.send(result);
        }
        catch(err){
            console.log(err);
        }
    }   
    static getProduct = async(req, res) =>{
        try{
            let products = await productModel.find();
            res.send(products);
        }
        catch(err){
            console.log(err);
        }
    }
    static deleteProduct = async(req, res) =>{
        try{
            let id = req.params.id;
            let result = await productModel.deleteOne({id:id});
            res.send(result);
        }
        catch(err){
            console.log(err);
        }
    }
    // static deleteproduct = async(req, res) =>{
    //     try{
    //         let id = req.params.id;
    //         let result = await productModel.deleteOne(id);
    //         res.send(result);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    static addtocart= async(req,res)=>{
        
    }

}
export default productController;