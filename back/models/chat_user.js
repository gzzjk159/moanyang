const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_user', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    chatRoomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chat_room',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'chat_user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
          { name: "chatRoomId" },
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
