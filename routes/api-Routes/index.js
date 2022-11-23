const router = require('express').Router();
const notesRoutes = require('./note-Routes');

router.use(notesRoutes);

module.exports = router;