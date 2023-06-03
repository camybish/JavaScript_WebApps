/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./NotesModel');
const NotesClient = require('./NotesClient');
require('jest-fetch-mock').enableMocks()

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays no notes', () => {

    const view = new NotesView();
    const model = new NotesModel();

    expect(document.querySelectorAll('div').length).toBe(1);
  });

  it('displays two notes "Eat your Greens", "Eat your beans"', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector('#add-note');

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'Eat your Greens';

    buttonEl.click();

    const input2El = document.querySelector('#note-input');
    input2El.value = 'Eat your beans';

    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it('display a user note on the page', () => {
    
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'This is a test ToDo';

    const buttonEl = document.querySelector('#add-note');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('This is a test ToDo');
  });

  it('checks if the right number of notes are on the page', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note');
    inputEl.value = 'Eat your Greens';

    buttonEl.click();

    const input2El = document.querySelector('#note-input');
    input2El.value = 'Eat your beans';

    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Eat your Greens');
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('Eat your beans');

  })

  it('takes the localhost note and displays on the page', () => {
    const model = new NotesModel();
    const client = new NotesClient();
    const view = new NotesView(model,client);

    client.loadNotes.mockImplementation((callback) => {
      callback(['note 1'])
    });

    view.displayNotesFromAPI(() => {return ['note 1']}) //maybe change
    // reads a note from the homegrown api
    // sends it to display notes
    // displays it on the page
    ///// client.loadNotes(callback);
    
    // expect(mockNotesClient.loadNotes).toEqual(['This note is coming from the server'])
    //expect(document.querySelector('div.note')).toBe('This note is coming from the server');
    expect(document.querySelector('div.note').length).toEqual(1);

  })
});

// sample
/*
it('displayes the note from the API', () => {
  const model = new NotesModel();
  const client = new NotesClient();
  const notes = new NotesView(model, client);

  client.loadNotes.mockImplementation((callback) => {
    callback(['note 1'])
  });
  
  notes.displayNotesFromApi()
  expect(document.querySelectorAll('div.note').length).toEqual(1)
});
*/