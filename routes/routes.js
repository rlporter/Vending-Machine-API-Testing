const express = require('express');
const router= express.Router();
//A customer should be able to get a list of the current items, their costs, and quantities of those items
router.get('/api/customer/items', function(req, res){
  res.json({
    status: STRING,
    data: {
      itemID: INTEGER,
      itemName: STRING,
      description: TEXT,
      cost: INTEGER,
      quantity: INTEGER
    }
  });
});

//A customer should be able to buy an item using money
router.post('/api/customer/items/:itemId/purchases', function (req, res){
  res.json({
    status: STRING,
    data: {
      customerID: INTEGER,
      itemID: INTEGER,
      itemName: STRING,
      description: TEXT,
      cost: INTEGER,
      quantity: INTEGER,
      money_given: INTEGER
    }
  });
});

//A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.

//A customer should not be able to buy items that are not in the machine, but instead get an error

router.post('/api/customer/items/:itemId/purchases', function (req,res){
  res.json({
    status: STRING,
    data: {
      customerID: INTEGER,
      itemID: INTEGER,
      itemName: STRING,
      description: TEXT,
      cost: INTEGER,
      quantity: INTEGER,
      money_required: INTEGER,
      money_given: INTEGER,
      money_returned: INTEGER
    }
  });
});



module.exports = router;
