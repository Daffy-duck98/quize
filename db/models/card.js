'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Topic}) {
      this.belongsTo(Topic, {foreignKey: 'topic_id'})
    }
  }
  Card.init({
    img: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    question: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'Topics',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};