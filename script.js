(function () {
  "use strict";

  const detailsForm = document.querySelector("#destination_details_form");
  const wishListContainer = document.querySelector("#destinations_container");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    // Extract form values
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destImage = event.target.elements["image"].value;
    const destDesc = event.target.elements["description"].value;

    // Clear out form fields
    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    // Create Card
    const destCard = createDestinationCard(
      destName,
      destLocation,
      destImage,
      destDesc
    );

    if (wishListContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = "My Travel Wish List";
    }

    // Add Card
    document.querySelector("#destinations_container").appendChild(destCard);
  }

  function createDestinationCard(name, location, imgURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");

    const constantImgURL = "./images/signpost.jpg";

    if (!imgURL) {
      img.src = constantImgURL;
    } else {
      img.src = imgURL;
    }

    img.setAttribute("alt", name);
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description !== 0) {
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;
  }

  function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
    if (wishListContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = "No Destinations Added!";
    }
  }
})();
