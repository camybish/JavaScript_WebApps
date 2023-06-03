class MessageView {
  constructor () {
    this.button1El = document.querySelector('#show-message-button');
    this.button2El = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.button1El.addEventListener('click', () => {
       this.displayMessage();
    });
    this.button2El.addEventListener('click', () => {
      this.hideMessage();
   });

  }

  displayMessage () {
    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.innerText = document.querySelector('#message-input').value;
    
    console.log(newDiv.innerText);
    this.mainContainerEl.append(newDiv);
  }

  hideMessage () {
    const hideDiv = document.querySelector('div#message');
    hideDiv.remove();
  }
}

module.exports = MessageView;