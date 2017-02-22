'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",
    [{
        firstname:"Isumi",
        lastname:"Karina",
        phone:"08159070289",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:"Aiko",
        lastname:"Diandra",
        phone:"08159070289",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
