const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const volumeControl = document.getElementById('volume');

const songs = [
    {
        title: 'Beanie',
        artist: 'Chizele',
        src: 'audio.mp3',
        cover: 'tugasweb5.jpg'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'song2.mp3',
        cover: 'cover2.jpg'
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = audio.mp3;
    document.getElementById('title').textContent = song.title;
    document.getElementById('artist').textContent = song.artist;
    document.querySelector('.cover img').src = song.cover;
}

function playSong() {
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    audio.pause();
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function setVolume() {
    audio.volume = volumeControl.value;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
volumeControl.addEventListener('input', setVolume);

// Load the first song on page load
loadSong(songs[currentSongIndex]);