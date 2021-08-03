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
  });
