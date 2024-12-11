const User = require('../models/movieModel')


const findAll = async (req, res) => {
    try {
        const movies = await User.find();
        console.log(movies);
        res.json(movies);
    } catch {
        res.json({error: 'There is some error occuring in the findAll api.'})
    }
}

const gtMovies = async (req, res) => {
    try {
        const movies = await User.find({year : {$gte : 2022}});
        console.log(movies);
        res.json({movies});
    } catch {
        res.json({error: 'There is some error occuring in the gtMovies api.'})
    }
}

const asc = async (req, res) => {
    try {
        const asc = await User.find({runtime : {$lt : 5}}).sort({title : 1});
        res.json(asc);
    } catch {
        res.json({error : "There is a catch in asc api"})
    }
}

const win = async (req, res) => {
    try {
        const win = await User.find({'awards.wins' : {$eq : 5}}).select('title awards.wins');
        console.log(win);
        res.json(win);
    } catch {
        res.json({error: 'There is an error in the win api'})
    }
}

const updMovies = async (req, res) => {
    const runtime = req.body.runtime;
    try {
        const upd = await User.updateMany({year : {$eq : 2000}}, {$set : {runtime : runtime}});
        res.json(upd);
    } catch {
        res.json({error : "There is an error in the update api"})
    }
}

const addMovie = async (req, res) => {
    const title = req.body.title;
    const plot = req.body.plot;
    const year = req.body.year;
    const runtime = req.body.runtime;
    const type = req.body.type;
    const awards = req.body.awards;


    try {
        const add = await User.create({title, plot, year, runtime, type, awards});
        res.json(add);
    } catch {
        res.json({error: "There is an error in the add movie"});
    }
}

const delMany = async (req, res) => {
    const year = req.params.year;
    try {
        const del =await User.deleteMany({year : {$gt : year}})
        res.json(del);
    } catch {
        res.json({error : "There is an error in the del part"})
    }
}

const hit = async (req, res) => {
    try {
        const hit = await User.find({year : {$gt : 2022},
            'awards.wins' : {$lt : 5}
        });
        res.json(hit);
    } catch {
        res.json({error : "There is some error in the hit movie api"});
    }
}

const findTitle = async (req, res) => {
    try {
        // const find = await User.find({title : /^The /}).select('title'); //This is a way to search for words but it would be case sensitive
        const find = await User.find({title : {$regex : /the/ , $options : 'i'}}).select('title');
        res.json(find);
    } catch {
        res.json({error : "There is an error finding using title of the movie"});
    }
}

const list = async (req, res) => {
    try{
        const list = await User.find().limit(5).select('title runtime');
        res.json(list)
    } catch {
        res.json({error : "There is some error while fetching the list of the movies released"})
    }
}

module.exports = {findAll, gtMovies, asc, win, updMovies, addMovie, delMany, hit, findTitle, list};

// {$regex : /the/ , $options : 'i'} This can make it case insensitive