module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'activity',
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
      link : {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      contents: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      day: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      see: {
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
