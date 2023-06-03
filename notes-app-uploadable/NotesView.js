const NotesModel = require("./NotesModel");

class NotesView {
    constructor (model, client) {
        this.model = model;
        this.client = client;
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note').addEventListener('click', () => {
            const wholeNewNote = document.querySelector('#note-input').value;
            this.addNewNote(wholeNewNote);
         });
    }
    addNewNote (newNote) {
        this.model.addNote(newNote);
        document.querySelectorAll('div.note').forEach(
            element => element.remove()
        )
        document.querySelector('#note-input').value = '';
        this.displayNotes();
    }
    displayNotes () {
        this.model.getNotes().forEach(
            (element) => {
                const newDiv = document.createElement('div');
                newDiv.innerText = element;
                newDiv.className = 'note';
                this.mainContainerEl.append(newDiv);
            }
        )
    }

    displayNotesFromAPI() {
        const functionExecWhenNotesLoaded = (data) => {
            this.model.notes = (data);
            console.log(data);
            this.displayNotes();
        };
        return this.client.loadNotes(functionExecWhenNotesLoaded);

    }
}

module.exports = NotesView;