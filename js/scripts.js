var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var $ulItem = document.querySelector(".pokemon-list");
    var $listItem = document.createElement("li");
    var $button = document.createElement("button");

    $button.innerText = pokemon.name;
    $button.classList.add("pokemon-button");
    $listItem.appendChild($button);
    $ulItem.appendChild($listItem);
    addEventListenerButton($button, pokemon);
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function addEventListenerButton(button, pokemon) {
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            url: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.url;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        item.imageUrl = json.sprites.front_default;
        item.height = json.height;
        item.types = Object.keys(json.types);
      });
  }

  function showModal(details) {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.innerHTML = "";

    var modal = document.createElement("div");
    modal.classList.add("modal");

    var closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", hideModal);

    var titleContent = document.createElement("h1");
    titleContent.innerText = details.name;

    var content = document.createElement("p");
    content.innerText = "Height: " + details.height;

    var img = document.createElement("img");
    img.src = details.imageUrl;
    img.classList.add("pokemon-image");

    modal.appendChild(closeButton);
    modal.appendChild(titleContent);
    modal.appendChild(img);
    modal.appendChild(content);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add("is-visible");

    window.addEventListener("keydown", e => {
      var $modalContainer = document.querySelector("#modal-container");
      if (
        e.key === "Escape" &&
        $modalContainer.classList.contains("is-visible")
      ) {
        hideModal();
      }
    });

    $modalContainer.addEventListener("click", e => {
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.classList.remove("is-visible");
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
