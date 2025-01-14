const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playListButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playListContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playListSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

//sirasi
let index;

//dongu
let loop = true;

// music list
const songsList = [
  // 0 1 2
  {
    name: "Gelo Ew Ki Bu",
    link: "assets/gelo-ew-ki-bu.mp3",
    artist: "Aram Tigran",
    image: "assets/aram-tigran.jpeg",
  },
  {
    name: "Gitme Kal",
    link: "assets/yara-bere-icindeyim.mp3",
    artist: "Hira-i Zerdust",
    image: "assets/hirai.jpeg",
  },
  {
    name: "Aramam",
    link: "assets/aramam.mp3",
    artist: "Ibrahim Tatlises",
    image: "assets/ibrahim-tatlises.jpeg",
  },
  {
    name: "Ax Eman",
    link: "assets/ax-eman.mp3",
    artist: "Rewsan Celiker",
    image: "assets/rewsan-celiker.jpeg",
  },
  {
    name: "Dinle",
    link: "assets/dinle.mp3",
    artist: "Mahsun Kirmizigul",
    image: "assets/mahsun.jpeg",
  },
];

// sarki atama
const setSong = (arrayIndex) => {
  // bir obje icerisini  tek bir adimda disari cikarip atama , sirasina gore
  let { name, link, artist, image } = songsList[arrayIndex];
  audio.src = link;
  songName.innerHTML = name;
  songArtist.innerHTML = artist;
  songImage.src = image;

  //zamani ayarla
  audio.onloadedmetadata = () => {
    maxDuration.innerText = timeformatter(audio.duration);
  };

  playAudio();
};
// sarkiyi cal
const playAudio = () => {
  audio.play();
  pauseButton.classList.remove("hide"); // gorun
  playButton.classList.add("hide"); //kaybol
};

//sarki kendiliginden bittiginde sonrakine gec
audio.onended = () => {
  nextSong();
};
// sarkiyi durdur
const pauseAudio = () => {
  audio.pause();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
};

//sonrakine gec
const nextSong = () => {
  if (loop) {
    if (index == songsList / length - 1) {
      index = 0;
    } else {
      index += 1; //index = index+1
    }
    setSong(index);
  } else {
    let ranIndex = Math.floor(Math.random() * songsList.lenght);
  }
  playAudio();
};

//onceki sarkiya gel
const previousSong = () => {
  pauseAudio();
  if (index > 0) {
    index -= 1; // index = index - 1
  } else {
    index = songsList.length - 1;
  }
  setSong(index);
  playAudio();
};

//zaman duzenleyici
const timeformatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};

// siradaki butona tikladiginda
nextButton.addEventListener("click", nextSong);

//durdur butonuna tiklanildiginda
pauseButton.addEventListener("click", pauseAudio);
//oynat butonuna tiklanildiginda
playButton.addEventListener("click", playAudio);

// geri tusuna tiklanildiginda
prevButton.addEventListener("click", previousSong);

// ekran yukleme
window.onload = () => {
  index = 0;
  setSong(index);
};
