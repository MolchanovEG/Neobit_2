const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urltoimage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = News;
