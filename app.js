const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    items: document.querySelector('[data-id="items"]'),
    reset: document.querySelector('[data-id="resetBtn"]'),
    newRound: document.querySelector('[data-id="newBtn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  currentSymbol: "fa-o",
  currentColor: "yellow",

  init() {
    App.eventListenerFunction();
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
        console.log(`the square with id ${square.id} was clicked`);
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
        }

        // <i class="fa-solid fa-o turquoise"></i>
        // <i class="fa-solid fa-x yellow"></i>
      });
    });
  },
};

window.addEventListener("load", App.init);
