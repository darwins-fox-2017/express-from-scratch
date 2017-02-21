'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
      {firstname:"Eri",lastname:"Irawan",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Irwin",lastname:"Pratajaya",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Adam",lastname:"Saparudin",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Wahyu",lastname:"Hidayat",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Friman",lastname:"Pebriza",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Akbar",lastname:"Sahata",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"Samuel",lastname:"Sinaga",phone:"123456780",createdAt:new Date(), updatedAt: new Date()},
      {firstname:"McCallin",lastname:"Irawan",phone:"123456780",createdAt:new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {

  }
};
