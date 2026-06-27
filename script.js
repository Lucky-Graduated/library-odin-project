// select the query here

const searchArea = document.querySelectorAll(".search");
const addbtn = document.querySelector(".add button");
const cardContainer = document.querySelector(".card-container");

addbtn.addEventListener("click", () => {
  createCard(
    searchArea[0].value,
    searchArea[1].value,
    searchArea[2].value,
    searchArea[3].value,
  );
});

function createCard(bookImage, name, authorName, des) {
  if (searchArea[0] !== "") {
    // card
    const card = document.createElement("div");
    card.classList.add("card");

    // image section
    const image = document.createElement("div");
    image.classList.add("image");

    // read input section
    const readInput = document.createElement("div");
    readInput.classList.add("readInput");

    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";

		// Label
	const label = document.createElement("label");
	label.classList.add("switch");

	// Checkbox
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	// Slider
	const slider = document.createElement("span");
	slider.classList.add("slider", "round");

	// Assemble
	label.append(checkbox, slider);

    readInput.appendChild(label);

    const img = document.createElement("img");
    img.src = bookImage;
    img.alt = name;

    image.append(readInput, img);

    const info = document.createElement("div");
    info.classList.add("info");

    const bookName = document.createElement("h5");
    bookName.textContent = `Name: ${name}`;

    const author = document.createElement("h5");
    author.textContent = `Author: ${authorName}`;

    const description = document.createElement("h5");
    description.textContent = `Description: ${des}`;

    info.append(bookName, author, description);

    card.append(image, info);

    cardContainer.appendChild(card);
    searchArea.forEach((input) => (input.value = ""));
  }
}
