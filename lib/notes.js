const fs = require('fs');
const path = require('path');


// create a new note and save to db.json array.
function newNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({noteArray}, null, 2)
  );
  return note;
}

// deletes note based on the id.
function deleteNote(id, notes) {
  let noteArray = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })

  // coreects the id of the otes after one is deleted
  let index = 0;
  noteArray.forEach(note => {
    note.id = index;
    index += 1;
  });

  //write to file
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({noteArray}, null, 2)
  );
  return noteArray;
}

//exports newNote and delteNote to be used elsewhere.
module.exports = {
  newNote,
  deleteNote
};