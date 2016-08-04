const expect = require('chai').expect;
const app = require('../src/server');
const request = require('supertest');

describe('API testing', () => {
  it('GET /', done => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.id = 1243;
        expect(res.body).to.exist;
        expect(res.body).to.have.property('id');
      })
      .expect(200, { boss: 123, id: 1243 }, done);
  });
  it('GET /whatever', done => {
    request(app)
      .get('/dsfskfjskdfjsldfkjdslf')
      .expect(404, 'Not Found')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        if (err) return done(err);
        return done();
      });
  });
});
