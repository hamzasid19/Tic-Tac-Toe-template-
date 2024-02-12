const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    items: document.querySelector('[data-id="items"]'),
    reset: document.querySelector('[data-id="resetBtn"]'),
    newRound: document.querySelector('[data-id="newBtn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
    div: document.querySelector(".action"),
  },

  currentSymbol: "fa-o",
  currentColor: "yellow",
  p1: "Player 1 is up",
  p2: "Player 2 is up",

  init() {
    App.eventListenerFunction();
    App.updateMove();
  },

  eventListenerFunction() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.items.classList.toggle("hidden");
    });

    App.$.reset.addEventListener("click", (event) => {
      console.log("reset");
    });
    App.$.newRound.addEventListener("click", (event) => {
      console.log("new round");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        if (!square.querySelector(".fa-solid")) {
          const symbol = document.createElement("i");

          symbol.classList.add(
            "fa-solid",
            `${App.currentSymbol}`,
            `${App.currentColor}`
          );
          square.appendChild(symbol);
          App.currentSymbol = App.currentSymbol === "fa-o" ? "fa-x" : "fa-o";
          App.currentColor =
            App.currentColor === "yellow" ? "turquoise" : "yellow";

          App.updateMove();
        }
      });
    });
  },
  updateMove() {
    while (App.$.div.firstChild) {
      App.$.div.removeChild(App.$.div.firstChild);
    }
    let existingIcon = App.$.div.querySelector(".fa-solid");

    if (existingIcon) {
      // If the child exists, update its classList
      existingIcon.classList.remove("fa-o", "fa-x", "yellow", "turquoise");
      existingIcon.classList.add(App.currentSymbol, App.currentColor);
    } else {
      // If no child exists, create a new one and append it
      const symbol = document.createElement("i");
      symbol.classList.add("fa-solid", App.currentSymbol, App.currentColor);
      App.$.div.appendChild(symbol);

      const moveText = document.createElement("p");
      moveText.textContent = App.currentSymbol === "fa-o" ? App.p1 : App.p2;
      moveText.classList.add(App.currentColor);
      App.$.div.appendChild(moveText);
    }
  },
};

window.addEventListener("load", App.init);
