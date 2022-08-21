const page = document.querySelector('.page');
const profileUser = page.querySelector('.profile');
const userName = profileUser.querySelector('.profile__text-label');
const userProf = profileUser.querySelector('.profile__text-paragraph');


//↓↓↓↓↓↓↓ Кнопки редактирования профиля\добавления карточки\закрытия|
const editingBtn = page.querySelector('.profile__edit-button');
const addBtn = page.querySelector('.profile__add-button');
//↑↑↑↑↑↑↑ Кнопки редактирования профиля\добавления карточки\закрытия|

//↓↓↓↓↓↓↓ Все popup контейнеры\закрытие popup
const popups = page.querySelectorAll('.popup');
const closeBtn = page.querySelectorAll('.popup__close-icon');
//↑↑↑↑↑↑↑ Все popup контейнеры 

//↓↓↓↓↓↓↓ popup блок редактирование юзера
const popupUser = document.querySelector('#popup-user-block');
const popupUserForm = popupUser.querySelector('.popup__form');
const popupInputUser = popupUserForm.querySelectorAll('.popup__input');
//↑↑↑↑↑↑↑ popup блок редактирование юзера

//↓↓↓↓↓↓↓ popup блок добавление карточки
const popupCard = document.querySelector('#popup-cards-block');
const popupCardForm = popupCard.querySelector('.popup__form');
const popupInputCard = popupCardForm.querySelectorAll('.popup__input');
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

const elementsTemplate = document.querySelector('#elements').content;
const elementsOnline = document.querySelector('.elements');

function init(){
  
  while (elementsOnline.firstChild) {
    elementsOnline.removeChild(elementsOnline.lastChild);
  }

 
  for (let index = 0; index < initialCards.length; index++) {
    
    const element = elementsTemplate.querySelector('.element').cloneNode(true);

    element.addEventListener('click', function(e){
      const current = e.currentTarget;
      
      popupCardInfoTitle.textContent = current.querySelector('.element__title').textContent;
      popupCardInfoImg.src = current.querySelector('.element__image').src

      openPopup(2);
    });
    element.querySelector('.element__title').textContent = initialCards[index].name;
    element.querySelector('.element__image').src = initialCards[index].link;
    element.querySelector('.element__like').addEventListener('click', function(e){ 
        if(e.target.classList.contains('like_active') === true){
          e.target.classList.remove('like_active');
        }
        else{
          e.target.classList.add('like_active');
        }
        e.stopPropagation();
     });
     element.querySelector('.element__trash').addEventListener('click', function(e){
      const cartItem = e.target.closest('.element');
      const parentNode = cartItem.parentNode;
      parentNode.removeChild(cartItem);
      e.stopPropagation();
    });

    elementsOnline.appendChild(element);
  }
}

init();

//↓↓↓↓↓↓↓ Открытие и закрытие popup
function openPopup(item) {
  popups[item].classList.toggle('popup_opened');
}
function removePopup() {
  for (i = 0; i < popups.length; i++) {
    popups[i].classList.remove('popup_opened');
  }
}
function closePopup() {
  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', removePopup);
  }
}
closePopup();

function userEditing() {
  popupInputUser[0].value = userName.textContent;
  popupInputUser[1].value = userProf.textContent;
  openPopup(0);
}
//↑↑↑↑↑↑↑ Открытие и закрытие popup

function formSubmitHandler(evt) {
    evt.preventDefault(); 

    userName.textContent = popupInputUser[0].value;
    userProf.textContent = popupInputUser[1].value;

    removePopup()
}

buttonSave.addEventListener('click', function(evt) {
  evt.preventDefault(); 
  
  const itemCard = {};
  itemCard.name = popupInputCard[0].value;
  itemCard.link = popupInputCard[1].value;

  initialCards.unshift(itemCard);

  removePopup();
  
  init();
});

popupUserForm.addEventListener('submit', formSubmitHandler); 
editingBtn.addEventListener('click', userEditing);
addBtn.addEventListener('click', ()=> openPopup(1));