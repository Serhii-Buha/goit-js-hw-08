import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeToLocalStorage, 1000));

function saveTimeToLocalStorage() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime).catch(function (error) {
    console.log(error);
  });
}

// import throttle from 'lodash.throttle'; // импортируем функцию throttle из библиотеки lodash
// import Player from '@vimeo/player'; // импортируем класс Player из библиотеки @vimeo/player

// const iframe = document.getElementById('vimeo-player'); // получаем элемент с id "vimeo-player"
// const player = new Player(iframe); // создаем экземпляр класса Player, передавая в качестве аргумента iframe

// player.on('timeupdate', throttle(saveTimeToLocalStorage, 1000)); // вызываем метод on у объекта player, который позволяет подписаться на событие "timeupdate" (когда происходит обновление времени воспроизведения), передавая в качестве обработчика функцию saveTimeToLocalStorage, обернутую в throttle с задержкой в 1 секунду

// function saveTimeToLocalStorage() {
//   // объявляем функцию saveTimeToLocalStorage
//   player
//     .getCurrentTime() // вызываем метод getCurrentTime у объекта player, который возвращает текущее время воспроизведения видео (в секундах)
//     .then(function (seconds) {
//       // обрабатываем результат метода getCurrentTime в коллбэке метода then
//       localStorage.setItem('videoplayer-current-time', seconds); // сохраняем текущее время воспроизведения видео в локальное хранилище браузера, используя метод setItem объекта localStorage
//     })
//     .catch(function (error) {
//       // обрабатываем ошибки метода getCurrentTime в коллбэке метода catch
//       console.log(error); // выводим ошибку в консоль
//     });
// }

// const savedTime = localStorage.getItem('videoplayer-current-time'); // получаем из локального хранилища сохраненное ранее время воспроизведения видео
// if (savedTime) {
//   // если сохраненное время существует
//   player.setCurrentTime(savedTime).catch(function (error) {
//     // вызываем метод setCurrentTime у объекта player, передавая в качестве аргумента сохраненное время воспроизведения, и обрабатываем ошибки в коллбэке метода catch
//     console.log(error); // выводим ошибку в консоль
//   });
// }

//v2

// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(() => {
//     player.getCurrentTime().then(time => {
//       localStorage.setItem('videoplayer-current-time', time);
//     });
//   }, 1000)
// );

// const currentTime = localStorage.getItem('videoplayer-current-time');

// if (currentTime) {
//   player.setCurrentTime(currentTime);
// }

// import throttle from 'lodash.throttle'; - импортирует функцию throttle из библиотеки Lodash. Функция throttle используется для ограничения частоты выполнения функции, переданной в качестве аргумента, с помощью задержки.

// import Player from '@vimeo/player'; - импортирует класс Player из библиотеки Vimeo Player, необходимый для создания плеера для воспроизведения видео.

// const iframe = document.querySelector('#vimeo-player'); - находит элемент с идентификатором "vimeo-player" и сохраняет его в переменную iframe. Этот элемент - <iframe> тег, в котором загружается плеер Vimeo.

// const player = new Player(iframe); - создает новый экземпляр класса Player, передавая в конструктор элемент iframe.

// player.on('timeupdate', ...) - назначает обработчик события timeupdate для плеера. Это событие срабатывает при обновлении времени воспроизведения видео.

// throttle(() => { player.getCurrentTime().then(time => { localStorage.setItem('videoplayer-current-time', time); }); }, 1000) - создает функцию, которая будет вызываться каждую секунду (1000 миллисекунд), используя функцию throttle из Lodash. Внутри этой функции вызывается метод getCurrentTime() у плеера, который возвращает текущее время воспроизведения видео в секундах. Это время сохраняется в локальное хранилище браузера с ключом "videoplayer-current-time".

// const currentTime = localStorage.getItem('videoplayer-current-time'); - получает сохраненное значение текущего времени воспроизведения видео из локального хранилища браузера.

// if (currentTime) { player.setCurrentTime(currentTime); } - если значение текущего времени воспроизведения было сохранено в локальном хранилище, то метод setCurrentTime() устанавливает текущее время воспроизведения видео равным этому значению. Это позволяет продолжить воспроизведение видео с сохраненной позиции при перезагрузке страницы.
