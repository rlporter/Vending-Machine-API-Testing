//Test and build a vending machine app

For this project, you will create a JSON API for a vending machine. This machine has a list of items for sale with their ids, descriptions, and costs. It also keeps track of all machine transactions with time of transaction. When building this API, you will build it using Test-Driven Development (TDD). You will write the test for a piece of functionality first, make it pass, and then start on the next test.

//Features:
The following features must exist. Each one may have one than more test around it.

1)A customer should be able to get a list of the current items, their costs, and quantities of those items
2)A customer should be able to buy an item using money
3)A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.
4)A customer should not be able to buy items that are not in the machine, but instead get an error
5)A vendor should be able to see total amount of money in machine
6)A vendor should be able to see a list of all purchases with their time of purchase
7)A vendor should be able to update the description, quantity, and costs of items in the machine
8)A vendor should be able to add a new item to the machine
**Note that this API does not require authentication.**

//API Spec:
All responses from the API should be an object with a "status" key and a "data" key. Successful actions will have a status of "success" and failed actions will have a status of "fail." The "data" key will hold whatever output data is necessary.

//API Endpoints:
GET /api/customer/items - get a list of items
POST /api/customer/items/:itemId/purchases - purchase an item
GET /api/vendor/purchases - get a list of all purchases with their item and date/time
GET /api/vendor/money - get a total amount of money accepted by the machine
POST /api/vendor/items - add a new item not previously existing in the machine
PUT /api/vendor/items/:itemId - update item quantity, description, and cost
