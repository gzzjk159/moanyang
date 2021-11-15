const Sequelize = require("sequelize");
//환경 변수 선언
const env = process.env.NODE_ENV || "development";
// config
const config = require("../config/config").module[env];
console.log(config);
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.User = require("./user")(sequelize, Sequelize);
db.Chat_room = require("./chat_room")(sequelize, Sequelize);
db.Message = require("./message")(sequelize, Sequelize);
db.Activity = require("./activity")(sequelize, Sequelize);
db.Activity_type =require("./activity_type")(sequelize, Sequelize);
db.Activity_sub_type = require("./activity_sub_type")(sequelize, Sequelize);
//관계 생성
//유저는 여러개의 채팅룸을 가지고, 채팅방에는 여러명의 유저를 가진다.
db.User.belongsToMany(db.Chat_room, {through: 'chat_user'} );
db.Chat_room.belongsToMany(db.User, {through: 'chat_user'} );
//채팅룸은 여러개의 메세지를 가지고, 메세지는 하나의 채팅방을 가진다.
db.Chat_room.hasMany(db.Message);
db.Message.belongsTo(db.Chat_room);

//활동은 하나의 타입을 가지고, 하나의 서브타입을 가진다.
// db.Activity.hasOne(db.Activity_type);
// db.Activity.hasOne(db.Activity_sub_type);
//채팅방은 하나의 타입을 가지고, 하나의 서브타입을 가진다.
// db.Chat_room.hasOne();
// db.Chat_room.hasOne();
//타입은 여러개의 서브 타입을 가진다.
// db.Activity_type.hasMany(db.Activity_sub_type);
//서브타입은 하나의 타입을 가진다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
