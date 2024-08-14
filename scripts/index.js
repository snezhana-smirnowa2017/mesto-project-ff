// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");
const addButton = document.querySelector(".profile__add-button");

// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}
// @todo: Функция добавления карточек на страницу
function addCards() {
  initialCards.forEach((cardData) => {
    const cardItem = createCard(cardData, deleteCard);
    cardList.append(cardItem);
  });
}

// @todo: Добавление карточек при клике на кнопку
addButton.addEventListener("click", addCards);
