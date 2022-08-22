const page = document.querySelector('.page');
const profileUser = page.querySelector('.profile');
const userName = profileUser.querySelector('.profile__text-label');
const userProf = profileUser.querySelector('.profile__text-paragraph');


//↓↓↓↓↓↓↓ Кнопки редактирования профиля\добавления карточки\закрытия|
const buttonEditing = page.querySelector('.profile__edit-button');
const buttonAdd = page.querySelector('.profile__add-button');
//↑↑↑↑↑↑↑ Кнопки редактирования профиля\добавления карточки\закрытия|

//↓↓↓↓↓↓↓ Все popup контейнеры\закрытие popup
const popups = page.querySelectorAll('.popup');
const buttonCloseList = page.querySelectorAll('.popup__close-icon');
//↑↑↑↑↑↑↑ Все popup контейнеры 

//↓↓↓↓↓↓↓ popup блок редактирование юзера
const popupUser = document.querySelector('#popup-user-block');
const popupUserForm = popupUser.querySelector('.popup__form');
const popupInputUserName = popupUserForm.querySelector('.popup__input_user-name');
const popupInputUserProf = popupUserForm.querySelector('.popup__input_user-profession');
//↑↑↑↑↑↑↑ popup блок редактирование юзера

//↓↓↓↓↓↓↓ popup блок добавление карточки
const popupCard = document.querySelector('#popup-cards-block');
const popupCardForm = popupCard.querySelector('.popup__form');
const popupInputCardTitle = popupCardForm.querySelector('.popup__input_card-title');
const popupInputCardLink = popupCardForm.querySelector('.popup__input_card-link');
const buttonSave = popupCardForm.querySelector('.popup__button-save'); 
//↑↑↑↑↑↑↑ popup блок добавление карточки

//↓↓↓↓↓↓↓ popup блок информация о карточке 
const popupCardInfo = document.querySelector('#popup-card-info');
const popupCardInfoImg = popupCardInfo.querySelector('.popup__card-img');
const popupCardInfoTitle = popupCardInfo.querySelector('.popup__card-title');
//↑↑↑↑↑↑↑ popup блок информация о карточке 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://images.unsplash.com/photo-1660947748035-64cbc79b446a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const elementsTemplate = document.querySelector('#template').content;
const elementsOnline = document.querySelector('.elements');

function init() {

  elementsOnline.innerHTML = '';

  for (let index = 0; index < initialCards.length; index++) {

    const element = initCardView(initialCards[index].name, initialCards[index].link)
    elementsOnline.appendChild(element);
  }
}

init();

//↓↓↓↓↓↓↓ Открытие и закрытие popup
const buttonCloseUser = document.querySelector('.popup__close-icon_user');
const buttonCloseCardAdd = document.querySelector('.popup__close-icon_card-add');
const buttonCloseCardInfo = document.querySelector('.popup__close-icon_card-info');
function openPopup(item) {
  item.classList.toggle('popup_opened');
}
function closePopup(item) {
  item.classList.remove('popup_opened');
}
function userEditing() {
  popupInputUserName.value = userName.textContent;
  popupInputUserProf.value = userProf.textContent;
  openPopup(popupUser);
}
//↑↑↑↑↑↑↑ Открытие и закрытие popup

function formSubmitHandler(evt) {
    evt.preventDefault(); 

    userName.textContent = popupInputUserName.value;
    userProf.textContent = popupInputUserProf.value;

    closePopup(popupUser);
}

function formSubmitCard(evt) {
  evt.preventDefault();

  const cardItem = initCardView(popupInputCardTitle.value, popupInputCardLink.value);
  console.log(cardItem);

  elementsOnline.prepend(cardItem);

  popupInputCardTitle.value = '';
  popupInputCardLink.value = '';

  closePopup(popupCard);
};

function initCardView(title, image) {

  const element = elementsTemplate.querySelector('.element').cloneNode(true);

  element.addEventListener('click', function (e) {
    const current = e.currentTarget;

    popupCardInfoTitle.textContent = current.querySelector('.element__title').textContent;
    popupCardInfoImg.src = current.querySelector('.element__image').src

    openPopup(popupCardInfo);
  });
  element.querySelector('.element__title').textContent = title;
  element.querySelector('.element__image').src = image;
  element.querySelector('.element__like').addEventListener('click', function (e) {
    if (e.target.classList.contains('like_active') === true) {
      e.target.classList.remove('like_active');
    }
    else {
      e.target.classList.add('like_active');
    }
    e.stopPropagation();
  });
  element.querySelector('.element__trash').addEventListener('click', function (e) {
    const cartItem = e.target.closest('.element');
    cartItem.remove();
    e.stopPropagation();
  });

  return element;
}

popupUserForm.addEventListener('submit', formSubmitHandler); 
popupCardForm.addEventListener('submit', formSubmitCard); 
buttonEditing.addEventListener('click', userEditing);
buttonAdd.addEventListener('click', ()=> openPopup(popupCard));
buttonCloseUser.addEventListener('click', ()=> closePopup(popupUser));
buttonCloseCardAdd.addEventListener('click', ()=> closePopup(popupCard));
buttonCloseCardInfo.addEventListener('click', ()=> closePopup(popupCardInfo));
