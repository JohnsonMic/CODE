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
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
	},
    defintion: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    // createdAt: {
    // 	type: DataTypes.DATE,
    // 	defaultValue: sequelize.literal('NOW()'),
    // 	allowNull: true,
    // }

	}, {timestamps: false});

  return GlossaryTerm;
};   
  

