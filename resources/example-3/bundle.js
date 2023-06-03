(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.button1El = document.querySelector("#show-message-button");
          this.button2El = document.querySelector("#hide-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.button1El.addEventListener("click", () => {
            this.displayMessage();
          });
          this.button2El.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const newDiv = document.createElement("div");
          newDiv.id = "message";
          newDiv.innerText = document.querySelector("#message-input").value;
          console.log(newDiv.innerText);
          this.mainContainerEl.append(newDiv);
        }
        hideMessage() {
          const hideDiv = document.querySelector("div#message");
          hideDiv.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
