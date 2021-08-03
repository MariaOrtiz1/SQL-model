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
  });
