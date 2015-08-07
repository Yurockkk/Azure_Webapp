var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();
console.log('In route/movies.js' );

router.route('/movies').get(function(req,res){
  console.log('In route/movies.js: /movies, get()');
  Movie.find(function(err,movies){
    if(err){
      return res.send(err);
    }

    res.json(movies);
  });
})
.post(function(req,res){
  console.log('In route/movies.js: /movies, post()');
  var movie = new Movie(req.body);

  movie.save(function(err){
    if(err){
      return res.send(err);
    }
    res.send({message: 'Movie Added'});
  });
});

router.route('/movies/:id').put(function(req,res){
  console.log('In route/movies.js: /movies/:id, put()' );
  Movie.findOne({_id: req.params.id},function(err,movie){
    if(err){
      return res.send(err);
    }

    for(prop in req.body){
      movie[prop]=req.body[prop];
    }
    //save the movie
    movie.save(function(err){
      if(err){
        return res.send(err);
      }

      res.json({message: 'Movie updated!!'});
    });
  });
});

router.route('/movies/:id').get(function(req,res){
  console.log('In route/movies.js: /movies/:id, get()' );
  Movie.findOne({_id: req.params.id},function(err,movie){
    if(err){
      return res.send(err);
    }

    res.json(movie);
  });
});

router.route('/movies/:id').delete(function(req,res){
  console.log('In route/movies.js: /movies/:id, delete()' );
  Movie.remove({_id: req.params.id},function(err.movie){
    if(err){
      return res.send(err);
    }

    res.json({message: 'Successfully deleted!'});
  });
});

module.exports =router;

