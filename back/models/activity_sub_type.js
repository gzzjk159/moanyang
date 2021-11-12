module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'activity_sub_type',
    {
      //활동 보조 유형 타입
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      root_id: {
        type: DataTypes.INTEGER(),
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
