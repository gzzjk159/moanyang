module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'chat_room',
    {
      //활동 테이블
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sub_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      participants: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total_people: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamp: true,
      paranoid: true,
      freezeTableName : true
    },
  );
};
