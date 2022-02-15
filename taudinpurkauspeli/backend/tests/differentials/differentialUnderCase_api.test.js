const supertest = require('supertest');
const app = require('../../app');

const api = supertest(app);
const db = require('../../models');
const helper = require('../test_helper');

const DifferentialGroupUnderCase = db.differentialGroupsUnderCases;
const Differential = db.differentials;
const DifferentialUnderCase = db.differentalsUnderCases;
const PlainCase = db.plainCases;
const PlainDifferential = db.plainDifferentials;
const PlainDifferentialGroup = db.plainDifferentialGroups;

beforeEach(async () => {
  // deletes the content from the table 'differentials'
  await db.sequelize.sync({ force: true });
  // inserts test differentials in the table 'differentials'
  await PlainDifferential.bulkCreate([{}, {}]);
  await Differential.bulkCreate(helper.initialDifferentials);
  await PlainCase.bulkCreate(helper.plainCases);
  await PlainDifferentialGroup.bulkCreate([{}, {}]);
  await DifferentialGroupUnderCase.bulkCreate(helper.initialDifferentialGroupsUnderCases);
  await DifferentialUnderCase.bulkCreate(helper.initialDifferentialsUnderCases);
});

describe('Getting case-diff-pairs from database', () => {
  test('case-diff-pairs are returned as json', async () => {
    await api
      .get('/api/differentialsUnderCases/2/fi')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all entries are returned', async () => {
    const response = await api.get('/api/differentialsUnderCases/1/fi');

    expect(response.body).toHaveLength(2);
  });
});

afterAll(async () => {
  await db.sequelize.close();
});
