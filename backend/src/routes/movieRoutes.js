const express = require('express');
const router = express.Router();
const {findAll, gtMovies, asc, win, updMovies, addMovie, delMany, hit, findTitle, list} = require('../controllers/movieController')

router.get('/', findAll);

router.get('/gtMovies', gtMovies);

router.get('/asc', asc);

router.get('/win', win);

router.put('/upd', updMovies);

router.post('/add', addMovie);

router.delete('/del/:year', delMany);

router.get('/hit', hit);

router.get('/findTitle', findTitle);

router.get('/list', list);

module.exports = router; 