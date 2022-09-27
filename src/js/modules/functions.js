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

//isMobile=================================================================

export function isMob() {
   const isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhonr|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
         return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
         );

      }
   };

   if (isMobile.any()) {
      document.body.classList.add('_touch');
   } else {
      document.body.classList.add('_pc');
   }
}

//=================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
   if (document.documentElement.classList.contains('lock')) {
      bodyUnlock(delay);
   } else {
      bodyLock(delay);
   }
}
export let bodyUnlock = (delay = 500) => {
   let body = document.querySelector("body");
   if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]");
      setTimeout(() => {
         for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = '0px';
         }
         body.style.paddingRight = '0px';
         document.documentElement.classList.remove("lock");
      }, delay);
      bodyLockStatus = false;
      setTimeout(function () {
         bodyLockStatus = true;
      }, delay);
   }
}
export let bodyLock = (delay = 500) => {
   let body = document.querySelector("body");
   if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll("[data-lp]");
      for (let index = 0; index < lock_padding.length; index++) {
         const el = lock_padding[index];
         el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }
      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      document.documentElement.classList.add("lock");

      bodyLockStatus = false;
      setTimeout(function () {
         bodyLockStatus = true;
      }, delay);
   }
}

//Burger======================================================================================================
export function burger() {
   if (document.querySelector('.icon-menu')) {
      document.addEventListener('click', function (e) {
         if (bodyLockStatus && e.target.closest('.icon-menu')) {
            bodyLockToggle();
            document.documentElement.classList.toggle('menu-open');
         }
      });
   };
}

export function menuOpen() {
   bodyLock();
   document.documentElement.classList.add('menu-open');
}
export function menuClose() {
   bodyUnlock();
   document.documentElement.classList.remove('menu-open');
}
//================================================================================================================