import test from 'ava'
import {expect, should, assert} from 'chai'
import supertest from 'supertest'

import app from '../bin/app.js'


const request = supertest.agent(app.listen())

console.log(888)

test('test1', t=>{
  request.get('/api/article/hot')
    .expect(200)
    .end((e, r)=>{
      console.log(e, r)
      // assert
      r.body.should.be.an.Array()
    });
})
