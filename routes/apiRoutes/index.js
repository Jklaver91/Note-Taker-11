const router = require('express').Router();
const noteRoutes = require('./note-Routes');

//points to note-Routes.js
router.use(noteRoutes);

module.exports = router;