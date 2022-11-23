const router = require('express').Router();
const {newNote, deleteNote} = require('../../lib/notes');
let {notesArray} = require('../../db/db');

//Sets the note ID to the next in the array.
router.post('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(newNote(req.body, notesArray));
});

// Gets all notes from the db array
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

// deletes notes based on id.
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;