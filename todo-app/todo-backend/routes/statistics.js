const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

/* GET statistics. */
router.get('/', async (_, res) => {
  const added_todos = await getAsync('added_todos') || 0

  res.send({
    added_todos: parseInt(added_todos)
  });
});

module.exports = router;