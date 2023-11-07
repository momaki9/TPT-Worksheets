const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('/dev', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/test.html'));
});

router.get('/limitingReactant', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/Limiting_Reactant/index.html'));
});

module.exports = router;