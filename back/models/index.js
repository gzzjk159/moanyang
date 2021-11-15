var DataTypes = require("sequelize").DataTypes;
var _activity = require("./activity");
var _activity_sub_type = require("./activity_sub_type");
var _activity_type = require("./activity_type");
var _chat_room = require("./chat_room");
var _chat_user = require("./chat_user");
var _message = require("./message");
var _users = require("./users");

function initModels(sequelize) {
  var activity = _activity(sequelize, DataTypes);
  var activity_sub_type = _activity_sub_type(sequelize, DataTypes);
  var activity_type = _activity_type(sequelize, DataTypes);
  var chat_room = _chat_room(sequelize, DataTypes);
  var chat_user = _chat_user(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  chat_room.belongsToMany(users, { as: 'userId_users', through: chat_user, foreignKey: "chatRoomId", otherKey: "userId" });
  users.belongsToMany(chat_room, { as: 'chatRoomId_chat_rooms', through: chat_user, foreignKey: "userId", otherKey: "chatRoomId" });
  chat_user.belongsTo(chat_room, { as: "chatRoom", foreignKey: "chatRoomId"});
  chat_room.hasMany(chat_user, { as: "chat_users", foreignKey: "chatRoomId"});
  message.belongsTo(chat_room, { as: "chatRoom", foreignKey: "chatRoomId"});
  chat_room.hasMany(message, { as: "messages", foreignKey: "chatRoomId"});
  chat_user.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(chat_user, { as: "chat_users", foreignKey: "userId"});

  return {
    activity,
    activity_sub_type,
    activity_type,
    chat_room,
    chat_user,
    message,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
