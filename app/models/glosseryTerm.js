module.exports = function(sequelize, DataTypes) {
  var GlossaryTerm = sequelize.define("GlossaryTerm", {
    routeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    term: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
	},
    defintion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

	});

  return GlossaryTerm;
};   
  

