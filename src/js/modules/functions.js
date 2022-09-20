//Проверка поддрежки webp =======================================================================================================================================================================================================================
export function isWebp() {
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   //Добавление класса _webp _no-webp 
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

// Работа со спойлерами=======================================================================================================================================================================================================================


// Popup=====================================================================================================================================================================

export function popup() {
   let popupBg = document.querySelector('.popup'); // Фон попап окна
   let popup = document.querySelector('.popup__content'); // Само окно
   let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
   let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
   openPopupButtons.forEach((button) => { // Перебираем все кнопки
      button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
         popupBg.classList.add('active'); // Добавляем класс 'active' для фона
         popup.classList.add('active'); // И для самого окна
      })
   });
   closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
   });
   document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
      if (e.target === popupBg) { // Если цель клика - фот, то:
         popupBg.classList.remove('active'); // Убираем активный класс с фона
         popup.classList.remove('active'); // И с окна
      }
   });
}
