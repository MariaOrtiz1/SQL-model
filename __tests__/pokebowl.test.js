import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pokebowl from '../lib/models/Pokebowl.js';

describe('pokebowl routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates an order for a pokebowl via POST', async () => {
    const pokebowl = { base: 'white sushi rice', proteinChoice: 'salmon', proteinAddition: 'tofu', toppings: '', sauce: 'poke sauce' };
    const res = await request(app)
      .post('/api/v1/pokebowls')
      .send(pokebowl);

    expect(res.body).toEqual({
      id: '1',
      ...pokebowl
    });
  });

  it('gets a pokebowl order by id via GET', async () => {
    const pokebowlOrder = await Pokebowl.insert({
      base: 'half sushi rice, half greens',
      proteinChoice: 'tofu',
      proteinAddition: '',
      toppings: 'green onions',
      sauce: 'soy sauce'
    });

    const res = await request(app).get(`/api/v1/pokebowls/${pokebowlOrder.id}`);

    expect(res.body).toEqual(pokebowlOrder);
  });

  it('gets all pokebowl orders via GET', async () => {
    const pokebowlOrderOne = await Pokebowl.insert({
      base: 'half sushi rice, half greens',
      proteinChoice: 'tofu',
      proteinAddition: '',
      toppings: 'green onions',
      sauce: 'soy sauce'
    });

    const pokebowlOrderTwo = await Pokebowl.insert({ base: 'white sushi rice',
      proteinChoice: 'salmon', 
      proteinAddition: 'tofu', 
      toppings: '', 
      sauce: 'poke sauce' 
    });

    const res = await request(app)
      .get('/api/v1/pokebowls');

    expect(res.body).toEqual([pokebowlOrderOne, pokebowlOrderTwo]);
  });
});
