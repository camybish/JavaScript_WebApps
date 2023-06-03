class NotesModel {
    constructor () {
        this.notes = [];
    }
    
    getNotes () {
        return this.notes;
    }

    addNote (newNote) {
        this.notes.push(newNote);
    }

    reset () {
        this.notes = [];
    }
}

module.exports = NotesModel;