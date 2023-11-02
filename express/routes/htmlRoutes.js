const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/test.html'));
});

module.exports = router;