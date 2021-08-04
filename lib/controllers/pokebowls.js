import { Router } from 'express';
import Pokebowl from '../models/Pokebowl.js';

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
      const { id } = req.params;
      const pokebowl = await Pokebowl.getById(id);
      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const pokebowl = ([
        {
          base: 'half sushi rice, half greens',
          proteinChoice: 'tofu',
          proteinAddition: '',
          toppings: 'green onions',
          sauce: 'soy sauce',
          id: '1'
        }, 
        { base: 'white sushi rice',
          proteinChoice: 'salmon', 
          proteinAddition: 'tofu', 
          toppings: '', 
          sauce: 'poke sauce' ,
          id: '2'
        }
      ]);
      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  });
