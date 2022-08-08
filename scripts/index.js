let page = document.querySelector('.page');
let profileUser = page.querySelector('.profile');
let userName = profileUser.querySelector('.profile__text-label');
let userProf = profileUser.querySelector('.profile__text-paragraph');
let editingBtn = page.querySelector('.profile__edit-button');
let closeBtn = page.querySelector('.popup__close-icon');
let popup = page.querySelector('.popup');

let popupInput = popup.querySelectorAll('.popup__input');
let formElement = page.querySelector('.popup__form');

let saveBtn = popup.querySelector('.popup__button-save');

let heardLike = page.querySelectorAll('.element__like');


// ↓↓↓↓↓ Функция "Лайка", замена с прозрачного на черное ↓↓↓↓

// function likeActive(i) {
//     if (heardLike[i].classList.contains('like_active') === true) {
//         heardLike[i].classList.remove('like_active');
//     } else {
//         heardLike[i].classList.add('like_active');
//     }
// }
// function init(){
// 	for (let i = 0; i < heardLike.length; i++) {
//         heardLike[i].addEventListener('click', function(){ likeActive(i); });
//     }
// }

// init();



popupInput[0].value = userName.textContent;
popupInput[1].value = userProf.textContent;

function openClosePopup() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    } else {
        popup.classList.add('popup_opened');
    }
}

editingBtn.addEventListener('click', openClosePopup);
closeBtn.addEventListener('click', openClosePopup);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей
    userName.textContent = popupInput[0].value;
    userProf.textContent = popupInput[1].value;
    // Вставьте новые значения с помощью textContent
    openClosePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 