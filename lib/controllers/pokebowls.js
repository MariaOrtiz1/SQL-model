import { Router } from 'express';
import Pokebowl from '../models/Pokebowl';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pokebowl = {
        base: 'white sushi rice', 
        protein: 'salmon', 
        proteinAddition: 'tofu', 
        toppings: '', 
        sauce: 'poke sauce',
        id: '1' 
      };

      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  });
