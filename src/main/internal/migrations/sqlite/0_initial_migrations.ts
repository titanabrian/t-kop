import { DATE, INTEGER, STRING } from 'sequelize';

export default {
  up: async ({ context: queryInterface }:any) => {
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      created: {
        type: DATE,
        allowNull: false,
      },
      updated: {
        type: DATE,
        allowNull: false,
      },
    });
  },

  async down({ context: queryInterface }:any) {
    await queryInterface.dropTable('users');
  },
};
