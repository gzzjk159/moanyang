module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'activity_type',
    {
      //활동 유형 테이블
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      timestamp: true,
      paranoid: true,
      freezeTableName : true
    },
  );
};
