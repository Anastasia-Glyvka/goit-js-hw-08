import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(STORAGE_KEY, time.seconds);
  }, 1000)
);
console.log(
  player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)))
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
