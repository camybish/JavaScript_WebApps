class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
  addParagraph () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(newParagraph);
  }

  clearParagraphs () {
    const paragraph = document.querySelector('#main-container');
    paragraph.remove();
  }
}

module.exports = View;