"use strict";

module.exports = function(sequelize, DataTypes) {
  var Taco = sequelize.define("Taco", {
    name: {type: DataTypes.STRING},
    devoured: {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {

    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'tacos',

  });

  return Taco;
};
