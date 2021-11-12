module.exports = (sequelize, DataTypes) => {
  return sequelize.define('message', {
    //활동 테이블
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contents: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamp : true,
    paranoid : true,
    freezeTableName : true
  }
  );
};
