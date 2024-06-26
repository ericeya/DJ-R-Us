const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		punchline: {
			type: DataTypes.STRING,
			allowNull: false,
		}
		// date: {
		// 	type: DataTypes.DATE,
		// 	allowNull: false,
		// 	defaultValue: DataTypes.NOW,
		// },
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: 'post',
	}
);

module.exports = Post;
