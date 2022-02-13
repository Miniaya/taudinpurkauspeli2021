// connection to database

const Sequelize = require('sequelize');
const dbConfig = require('../utils/config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },

  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.plainCases = require('./plainCase.model')(sequelize, Sequelize);
db.plainDifferentials = require('./differentials/plainDifferential.model')(sequelize, Sequelize);
db.plainDifferentialGroups = require('./differentials/plainDifferentialGroup.model')(sequelize, Sequelize);
db.plainProcedures = require('./procedures/plainProcedure.model')(sequelize, Sequelize);
db.plainSubProcedures = require('./procedures/subProcedures/plainSubProcedure.model')(sequelize, Sequelize);
db.plainTextSubProcedures = require('./procedures/subProcedures/plainTextSubProcedure.model')(sequelize, Sequelize);
db.plainOptions = require('./procedures/subProcedures/plainOption.model')(sequelize, Sequelize);

db.users = require('./user.model')(sequelize, Sequelize);
db.cases = require('./case.model')(sequelize, Sequelize);
db.differentialGroups = require('./differentials/differentialGroup.model')(sequelize, Sequelize);
db.differentialGroupsUnderCases = require('./differentials/differentialGroupsUnderCase.model')(sequelize, Sequelize);
db.differentials = require('./differentials/differential.model')(sequelize, Sequelize);
db.differentalsUnderCases = require('./differentials/differentialsUnderCase.model')(sequelize, Sequelize);
db.procedures = require('./procedures/procedure.model')(sequelize, Sequelize);
db.proceduresUnderCases = require('./procedures/proceduresUnderCase.model')(sequelize, Sequelize);
db.subProcedureTypes = require('./procedures/subProcedures/subProcedureTypes.model')(sequelize, Sequelize);
db.subProcedures = require('./procedures/subProcedures/subProcedure.model')(sequelize, Sequelize);
db.textSubProcedures = require('./procedures/subProcedures/textSubProcedure.model')(sequelize, Sequelize);
db.options = require('./procedures/subProcedures/option.model')(sequelize, Sequelize);

db.plainCases.hasMany(db.cases);
db.cases.belongsTo(db.plainCases, {
  foreignKey: 'plainCaseId',
  constraints: false,
});

db.plainDifferentials.hasMany(db.differentials);
db.differentials.belongsTo(db.plainDifferentials, {
  foreignKey: 'plainDifferentialId',
  constraints: false,
});

db.plainDifferentialGroups.hasMany(db.differentialGroups);
db.differentialGroups.belongsTo(db.plainDifferentialGroups, {
  foreignKey: 'plainDifferentialGroupId',
  constraints: false,
});

db.plainProcedures.hasMany(db.procedures);
db.procedures.belongsTo(db.plainProcedures, {
  foreignKey: 'plainProcedureId',
  constraints: false,
});

db.subProcedureTypes.hasMany(db.plainSubProcedures);
db.plainSubProcedures.belongsTo(db.subProcedureTypes, {
  foreignKey: 'subProcedureTypeId',
  constraints: false,
});

db.proceduresUnderCases.hasMany(db.plainSubProcedures);
db.plainSubProcedures.belongsTo(db.proceduresUnderCases, {
  foreignKey: 'proceduresUnderCaseId',
  constraints: false,
});

db.plainCases.belongsToMany(db.plainDifferentialGroups, {
  through: db.differentialGroupsUnderCases,
});
db.plainDifferentialGroups.belongsToMany(db.plainCases, {
  through: db.differentialGroupsUnderCases,
});

db.differentialGroupsUnderCases.belongsToMany(db.plainDifferentials, {
  through: db.differentalsUnderCases,
});
db.plainDifferentials.belongsToMany(db.differentialGroupsUnderCases, {
  through: db.differentalsUnderCases,
});

db.plainProcedures.belongsToMany(db.plainCases, {
  through: db.proceduresUnderCases,
});
db.plainCases.belongsToMany(db.plainProcedures, {
  through: db.proceduresUnderCases,
});

db.plainSubProcedures.hasMany(db.subProcedures);
db.subProcedures.belongsTo(db.plainSubProcedures, {
  foreignKey: 'plainSubProcedureId',
  constraints: false,
});

db.plainTextSubProcedures.hasMany(db.textSubProcedures);
db.textSubProcedures.belongsTo(db.plainTextSubProcedures, {
  foreignKey: 'plainTextSubProcedureId',
  constraints: false,
});

db.plainSubProcedures.hasMany(db.plainTextSubProcedures);
db.plainTextSubProcedures.belongsTo(db.plainSubProcedures, {
  foreignKey: 'plainSubProcedureId',
  constraints: false,
});

db.plainOptions.hasMany(db.options);
db.options.belongsTo(db.plainOptions, {
  foreignKey: 'plainOptionId',
  constraints: false,
});

module.exports = db;
