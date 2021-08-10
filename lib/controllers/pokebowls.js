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
      const { id } = req.params;
      const { base, proteinChoice, proteinAddition, toppings, sauce } = req.body;
      const updatedPokebowl = await Pokebowl.updateById(id, { base, proteinChoice, proteinAddition, toppings, sauce });

      res.send(updatedPokebowl);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const pokebowl = await Pokebowl.deleteById(id);

      res.send({ message : `${pokebowl.base} order has been deleted!`, });
    } catch (err) {
      next(err);
    }
  });

