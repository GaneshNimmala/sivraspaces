const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('atlgroup_website', 'atlgroup_developer', 'developer@123', {
  host: '190.92.174.81',
  dialect: 'mysql'
});
	
	

module.exports = sequelize;
