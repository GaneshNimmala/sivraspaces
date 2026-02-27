const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Catalog = sequelize.define('Catalog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pdfPath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnailPath: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Catalog;
