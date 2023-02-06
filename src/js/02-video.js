import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
'timeupdate',
throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000)
);

if (localStorage.getItem('videoplayer-current-time') || 0) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
