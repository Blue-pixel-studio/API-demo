const sql = require('./db');

// constructor
const Customer = function(customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};


Customer.getAll = result => {
    sql.query("SELECT * FROM customers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("customers: ", res);
      result(null, res);
    });
  };
  

  Customer.findById = (customerId, result) => {
    sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports = Customer; 