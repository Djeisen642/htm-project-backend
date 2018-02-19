'use strict';
const Password = require('../utils/password');

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    password: DataTypes.STRING,
    facebookId: DataTypes.STRING
  });

  User.associate = (models) => {
    models.User.belongsTo(models.Person, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });

    models.User.belongsToMany(models.User, {
      as: 'Initiator',
      through: 'Collaborators',
      foreignKey: 'InitiatorId',
      onDelete: 'CASCADE'
    });
    models.User.belongsToMany(models.User, {
      as: 'Collaborator',
      through: 'Collaborators',
      foreignKey: 'CollaboratorId',
      onDelete: 'CASCADE'
    });
  };

  User.prototype.checkPassword = function(password) {
    return Password.compare(password, this.password);
  };

  return User;
};
