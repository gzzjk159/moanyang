const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "email"
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    major: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
