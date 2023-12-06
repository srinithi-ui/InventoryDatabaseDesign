
db.createCollection("products")
db.products.insert({
    "pid":"P1",
    "Pname":"abc",
    "Category":"Electrical",
    "pprice":"1000"
    })
db.products.insert({
    "pid":"P2",
    "Pname":"def",
    "Category":"Electronics",
    "pprice":"5000"
    })
db.products.insert({
    "pid":"P3",
    "Pname":"ghi",
    "Category":"Electrical",
    "pprice":"500"
    })
    //to display all
db.getCollection("products").find({})
//to display based on category
db.getCollection("products").
find({
    "Category":"Electrical"
  })
 //to update price field 
db.products.updateMany(
  { 
      "Category": "Electrical"
     },  
  {
    $set: {
      "pprice": 1100
    }
  }                              
);

//aggregation(sum) by grouping
db.products.aggregate([
  {
    $match: {
      "Category": "Electrical"
    }
  },
  {
    $group: {
      _id: null,
      totalPrice: { $sum: "$pprice" }
    }
  }
]);
//counting based on name
db.products.aggregate([
  {
    $group: {
      _id: "$Pname",
      count: { $sum: 1 }
    }
  }
]);

    




