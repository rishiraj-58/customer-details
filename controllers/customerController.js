const Customer = require("../model/Customer");

// Get All products
const customer_all = async (req, res) => {
    try {
        const customers = await Customer.find()
        .sort({ sale: -1 })
        .limit(10); 

        res.json(customers);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const customer_details = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerId);
        res.json(customer);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const customer_create = async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        sale: req.body.sale,
        purchase: req.body.purchase,
        ammount: req.body.ammount
      });
    
      try {
        const savedCustomer = await customer.save();
        res.send(savedCustomer);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const customer_update = async (req, res) => {
    try {
        const customer = {
            name: req.body.name,
            phone: req.body.phone,
            sale: req.body.sale,
            purchase: req.body.purchase,
            ammount: req.body.ammount
        };
    
        const updatedCustomer = await Customer.findByIdAndUpdate(
          { _id: req.params.customerId },
          customer
        );
        res.json(updatedCustomer);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const customer_delete = async (req, res) => {
    try {
        const removeCustomer = await Customer.findByIdAndDelete(req.params.customerId);
        res.json(removeCustomer);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    customer_all, 
    customer_details, 
    customer_create, 
    customer_update, 
    customer_delete
  }