const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');
const NotesClient = require('./NotesClient');

console.log('The notes app is running');
const client = new NotesClient ();
const model = new NotesModel ();
const view = new NotesView (model, client);
view.displayNotesFromAPI();
console.log('But the notes are not printing');