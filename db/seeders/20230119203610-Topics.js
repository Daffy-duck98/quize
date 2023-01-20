'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topics = ['Котики', 'Кино', 'Программирование', 'Загадки', 'Загадки по картинкам', 'Религия']
    const data = topics.map(topic => ({
      name: topic,
      createdAt:new Date(),
      updatedAt:new Date(),
    }))

    await queryInterface.bulkInsert('Topics',data );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
