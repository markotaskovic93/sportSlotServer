'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('users', {
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {});
    UserModel.associate = function(models) {
      // associations can be defined here
    };
    return UserModel;
};