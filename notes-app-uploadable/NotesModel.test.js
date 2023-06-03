const NotesModel = require('./NotesModel');

describe('Notes Model', () => {
    it('shows an empty notes page', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });

    it('shows 2 notes', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');

        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });

    it('adds 2 notes, resets them', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset()
        expect(model.getNotes()).toEqual([]);
    });
})