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
      const pokebowl = await Pokebowl.getAll();

      res.send(pokebowl);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updatedPokebowl = {
        base: 'white sushi rice',
        proteinChoice: 'tuna',
        proteinAddition: 'salmon',
        toppings: 'tobiko',
        sauce: 'spicy mayo',
        id: '1'
      };

      res.send(updatedPokebowl);
    } catch (err) {
      next(err);
    }
  });
