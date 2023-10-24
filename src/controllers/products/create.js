const {validationResult} = require('express-validator');
const {existsSync, unlinkSync}= require('fs');
const db = require ('../../database/models');


module.exports = (req, res) => {

    const errors = validationResult(req);
    //return res.send(errors)
    if (errors.isEmpty()){
        const {name,price,discount,description,brand,section} =req.body
    
        db.Product.create({
        name : name.trim(),
        price,
        discount : discount || 0,
        description : description.trim(),
        brandId : brand,
        sectionId : section,
    }) 
    .then(product => {
        if(req.files.images){
            const images = req.files.images.map((file)=> {
                return{
                    file : file.filename,
                    productId : product.Id,
                }
            })
            db.Image.bulkCreate(image, {
            validate :true
        }).then(response => {
    return res.redirect('/admin');
   }) 
} else{
    return res.redirect('/admin');
}
    })
    .catch(error =>console.log(error))

}else {
    if(req.file){
        req.files.forEach(file => {
         existsSync('./public/images/' + file.filename) && unlinkSync('./public/images' + file.filename) 
        });
        
    }
    const brands = db.Brand.findAll({
        order : ['name']
      });
  
      const sections = db.Section.findAll({
        order : ['name']
      });
      const categories = db.Category.findAll({
        order: ['name']
       })
  
      Promise.all([brands, sections,categories])
        .then(([brands, sections,categories]) => {
          return res.render("productAdd", {
            marcas: brands,
            sections,
            categories,
            errors : errors.mapped(),
            old : req.body
          });
        })
        .catch(error => console.log(error))
    }


  
  }
