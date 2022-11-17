const fs = require('fs');
const path = require('path');


// create a new note and save to db.json array.
function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// deletes note based on the id.
function deleteNote(id, notes) {
  let notesArray = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })

  // coreects the id of the otes after one is deleted
  let index = 0;
  notesArray.forEach(note => {
    note.id = index;
    index += 1;
  });

  //write to file
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return notesArray;
}

//exports newNote and delteNote to be used elsewhere.
module.exports = {
  newNote,
  deleteNote
};