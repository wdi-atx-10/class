var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

// GET all todos
router.get('/', function(req, res, next) {
  console.log('req.user ', req.user);
  var userId = req.user.sub;

  Todo.find({ userId: userId }, function(err, todos) {
    if (err) {
      console.log('DB Error:', err);
      res.status(500).json({});
    }

    res.json(todos);
  });
});

// GET single todo
router.get('/:todoId', function(req, res) {
  Todo.findById(req.params.todoId, function(err, todo) {
    if (err) {
      console.log('DB Error: ', err);
      res.status(500).json({});
    }

    if (!todo) {
      res.status(404).json({});
    }

    res.json(todo);
  });
});

// POST create a new todo
router.post('/', function(req, res) {
  var desc = req.body.desc;
  var userId = req.user.sub;
  var dueDate = null;

  var newTodo = new Todo({
    description: desc,
    userId: userId
  });

  newTodo.save(function(err, todo) {
    if (err) {
      console.log('DB Error: ', err);
      res.status(500).json({});
    }

    res.json(todo);
  });
});

// DELETE a todo
router.delete('/:todoId', function(req, res) {
  res.json({
    deleted: req.params.todoId
  });
});

function updateTodo(req, res) {
  res.json({
    todoId: req.params.todoId,
    updated: true
  });
}

// UPDATE an existing todo
router.put('/:todoId', updateTodo);
router.patch('/:todoId', updateTodo);






module.exports = router;
