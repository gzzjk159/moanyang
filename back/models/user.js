module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      //사용자 테이블
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profile: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
    },
    {
      timestamp: true,
      paranoid: true,
      tfreezeTableName : true
    },
  );
};
