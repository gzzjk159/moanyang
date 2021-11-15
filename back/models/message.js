const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contents: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chat_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chatRoomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chat_room',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'message',
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
        name: "chatRoomId",
        using: "BTREE",
        fields: [
          { name: "chatRoomId" },
        ]
      },
    ]
  });
};
