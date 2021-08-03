import { Router } from 'express';
import Pokebowl from '../models/Pokebowl';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pokebowl = await Pokebowl.insert(req.body);

      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const pokebowl = {
        base: 'half sushi rice, half greens',
        proteinChoice: 'tofu',
        proteinAddition: '',
        toppings: 'green onions',
        sauce: 'soy sauce',
        id: '1'
      };
      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  });
