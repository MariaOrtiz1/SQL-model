import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import Pokebowl from '../lib/models/Pokebowl.js';

describe('pokebowl routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates an order for a pokebowl via POST', async () => {
    const pokebowl = { base: 'white sushi rice', protein: 'salmon', proteinAddition: 'tofu', toppings: '', sauce: 'poke sauce' };
    const res = await request(app)
      .post('/api/v1/pokebowls')
      .send(pokebowl);

    expect(res.body).toEqual({
      id: '1',
      ...pokebowl
    });
  });
});
