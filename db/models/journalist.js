"use strict";
module.exports = (sequelize, DataTypes) => {
  const Journalist = sequelize.define(
    "Journalist",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      document: DataTypes.STRING,
      affiliation: DataTypes.STRING,
      email: DataTypes.STRING,
      nationality: DataTypes.STRING,
      jurisdiction: DataTypes.STRING,
      job: DataTypes.STRING,
      subjects: DataTypes.STRING,
      skills: DataTypes.STRING,
      platforms: DataTypes.STRING
    },
    {}
  );
  Journalist.associate = function(models) {
    // associations can be defined here
  };
  return Journalist;
};
