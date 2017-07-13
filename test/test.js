const request = require('supertest');
const assert = require('assert');
const app = require('../app');
const config = require('../config')[process.env.NODE || 'test'];
const items = require('../models/items');

before('connect to sequelize', function(done) {
  const sequelize = new Sequelize('postgres://user:pass@example.com:5432/vendingMachine').then(done);
});

after('drop database', function (done){
  sequelize.close(done);
});

describe('GET /customer/items', function(){
  it('should return successfully', function (done){
    request(app)
    .get('/customer/items')
    .expect(200)

  })
  .end(done);
});
