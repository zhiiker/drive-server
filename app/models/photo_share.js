module.exports = (sequelize, DataTypes) => {
  const photo_share = sequelize.define(
    'photo_shares',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      token: DataTypes.DECIMAL(10, 2),
      user_id: DataTypes.INTEGER,
      photo: DataTypes.STRING(24),
      mnemonic: DataTypes.STRING,
      is_album: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      timestamps: false,
    }
  );

  photo_share.associate = function (models) {
    // associations can be defined here
  };

  return photo_share;
};