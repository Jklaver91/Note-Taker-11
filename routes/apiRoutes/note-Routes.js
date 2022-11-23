const router = require('express').Router();
const {newNote, deleteNote} = require('../../lib/notes');
let {noteArray} = require('../../db/db');

//Sets the note ID to the next in the array.
router.post('/notes', (req, res) => {
    if(noteArray){
        req.body.id = noteArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(newNote(req.body, noteArray));
});

// Gets all notes from the db array
router.get('/notes', (req, res) => {
  let results = noteArray;
  res.json(results);
});

// deletes notes based on id.
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  noteArray = await deleteNote(id, noteArray);
  res.json(noteArray);
});

module.exports = router;