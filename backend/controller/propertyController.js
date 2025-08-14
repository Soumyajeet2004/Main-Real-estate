const Property = require('../models/Property');

exports.createProperty=async(req,res) => {
    try {
    console.log("📥 Incoming Data:", req.body); 

    const {
      owner, title, location, price,
      contact, superarea, transaction,
      furnishing, bathroom, image
    } = req.body;

    const newProperty = new Property({
      owner, title, location, price,
      contact, superarea, transaction,
      furnishing, bathroom, image
    });

    await newProperty.save();

    res.status(200).json({ message: 'Property created successfully', property: newProperty });

  } catch (error) {
    console.error("❌ Error in createProperty:", error); 
    res.status(500).json({ message: 'Server error while creating property', error });
  }
}

exports.getProperties = async (req, res) => {
    const properties= await Property.find();
    res.status(200).json(properties);
}

exports.getProperty = async (req, res) => {
    const properties= await Property.findById(req.params.id);
    res.status(200).json(properties);
}

exports.updateProperty = async (req, res) => {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!property) {
        return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
}

exports.deleteproperty = async (req, res) => {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
        return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
}
exports.searchProperties = async (req, res) => {
  try {
          const { title } = req.query;
          if(!title) {
              return res.status(400).json({message:'name is requires'});
          }
          const properties = await  Property.find({
              title:{$regex:title,$options:'i'}
          });
          res.status(200).json(properties);
  
      } catch(error) {
          res.status(400).json({message:error.message});
      }
}