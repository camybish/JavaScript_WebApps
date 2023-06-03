/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('enters message, clicks the button and displays the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    
    const inputEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#show-message-button');
    inputEl.value = 'This is a text message'

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a text message');
  });

  it('removes the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const button1El = document.querySelector('#show-message-button');
    button1El.click();
    const button2El = document.querySelector('#hide-message-button');
    button2El.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});