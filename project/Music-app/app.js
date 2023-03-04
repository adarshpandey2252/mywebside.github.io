let next = document.getElementById('next');
let playbtn = document.getElementById('play');
let prev = document.getElementById('prev');
let bar = document.getElementById('bar');
let img = document.getElementById('main-img')
let audio = document.getElementById('audio')


const songs = [
{
  audio: "song1.mp3",
  img: "img1.jpg",
  name: "song-1 bhakti song"
},
{
  audio: "song2.mp3",
  img: "img2.jpg",
  name: "song-2 honey singh song"
},
{
  audio: "song3.mp3",
  img: "img2.jpg",
  name: "song-3 bollywood song"
},
{
  audio: "song4.mp3",
  img: "img4.jfif",
  name: "DAKU  NEW PUNJABI SONG"
}
]

let currentSongIndex = 0;




 //update audio img and song name

 function updateCurrentSong() {
  var currentSong = songs[currentSongIndex];

  document.getElementById("main-img").src = currentSong.img;
  document.getElementById("audio").src = currentSong.audio;
  document.getElementById("name").innerHTML  = currentSong.name;
}


audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
 
audio.play()

});


next.addEventListener('click', () => {
  
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateCurrentSong();
audio.play()

});

prev.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  updateCurrentSong();
audio.play()
 
});


/// progress bar 

audio.addEventListener("timeupdate", () => {
  const progressPercentage = audio.currentTime / audio.duration * 100;
  bar.value = progressPercentage;

})

bar.addEventListener('change', () => {
  audio.currentTime = bar.value * audio.duration / 100;

})

//play and pause audio
playbtn.addEventListener("click", function () {
  if (audio.paused) {
    // audio is currently paused, so play it
    audio.play();

    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");

    two.innerHTML = audio.duration.toFixed(0).replace(/\.?0+$/, '');
    one.innerHTML = audio.currentTime.toFixed(0).replace(/\.?0+$/,);
    img.classList.add('main-img')

  }


  else {
    // audio is currently playing, so pause it
    audio.pause();
    playbtn.classList.remove("fa-pause");
    playbtn.classList.add("fa-play");
    one.innerHTML = audio.currentTime.toFixed(2).replace(/\.?0+$/, '');
    img.classList.remove('main-img')

  }
});


// currtent audio time and totaltime


