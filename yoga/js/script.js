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

    // Timer

    let deadline = "2020-01-31"

    function getTimeRemaning(endtume){
        let t = Date.parse(endtume) - Date.parse(new Date()),       // получаем переменную оставшегося времени 
        seconds = Math.floor((t / 1000) % 60),                  // Math.floor - получаем целлое округленное значение
        minutes = Math.floor((t / 1000/60) % 60 ),                      //при помощи % получаем секунды оставшиеся до минуты
        hours = Math.floor((t/(1000*60*60)));
        // hours = Math.floor((t/1000/60/60) % 24);         // При данном раскладе добавляется остатки дней
        // days = Math.floor((t/(1000*60*60*24))

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtume){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaning()
        }
    }


    setClock('timer', deadline);
});