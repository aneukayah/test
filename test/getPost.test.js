import supertest from 'supertest';
const request = supertest('https://jsonplaceholder.typicode.com/');

import { expect } from 'chai';

const isInteger=(x,y) => {
  return expect(x).property(y).to.satisfy(Number.isInteger) 
}
const isString=(x,y) => {
  return expect(x).property(y).to.be.a('string') 
}

describe('Tests get correct data type', () => {
  it('GET /posts', (done) => {
    request.get('posts').end((err, res) => {
      for (let i = 0; i < res.body.length; i++) {
        isInteger(res.body[i],'userId') // user id must be integer
        isInteger(res.body[i],'id') // id must be integer
        isString(res.body[i],'title') // title must be string
        isString(res.body[i],'body') // body must be string
      }
      done();
    });
  });
});


describe('Correct post response', () => {
  it('POST /posts', (done) => {
    request.post('posts').send({
      "title": "recommendation",
      "body": "motorcycle",
      "userId": 12
    }).end((err, res) => {
      // console.log(res.body)
      expect(res.body.title).to.equal('recommendation')//the title must have be equal to recommendation
      expect(res.body.body).to.equal('motorcycle')//the body must have be equal to motorcycle
      expect(res.body.userId).to.equal(12)// the userId must have be equal 12
      done();
    });
  });
});