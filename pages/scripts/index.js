let page = document.querySelector('.page');
let profileUser = page.querySelector('.profile');
let userName = profileUser.querySelector('.profile__text-label');
let userProf = profileUser.querySelector('.profile__text-paragraf');
let editingBtn = page.querySelector('.profile__edit-button');
let closeBtn = page.querySelector('.popup__close-icon-btn');
let popup = page.querySelector('.popup');

let nameInput = popup.querySelector('.popup__input-name');
let jobInput = popup.querySelector('.popup__input-aboutme');
let formElement = page.querySelector('.popup__box');

let saveBtn = popup.querySelector('.popup__button-rectangle');

let heardLike = page.querySelector('.element__like');

function likeActiv() {
    if (heardLike.classList.contains('like_activ') === true) {
        heardLike.classList.remove('like_activ');
    } else {
        heardLike.classList.add('like_activ');
    }
}

heardLike.addEventListener('click', likeActiv);

nameInput.value = userName.textContent;
jobInput.value = userProf.textContent;

function openClosePopup() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
    }
}

editingBtn.addEventListener('click', openClosePopup);
closeBtn.addEventListener('click', openClosePopup);
saveBtn.addEventListener('click', openClosePopup);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей
    userName.textContent = nameInput.value;
    userProf.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

