window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {                                               // Функция скрытия блока
        for (let i = a; i < tabContent.length; i++) {                           // Запускаем цикл перебора блоков
            tabContent[i].classList.remove('show');                      // Удаляем блок
            tabContent[i].classList.add('hide');                                // добавляем блок
        }
    }

    hideTabContent(1);                                                         // Запускаем функцию

    function showTabContent(b) {                                                  // Функция показа блока
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {       //Функция показа или удаелния блока при нажатии на меню
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i<tabContent.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});