async function getSongs(){
  let a = await fetch("http://127.0.0.1:5500/src/songs/")
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div")
  div.innerHTML= response;
  let as=div.getElementsByTagName("a")
  let songs = []
  for (let index =0; index <as.length; index++){
    const element = as[index];
    if(element.href.endsWith(".mp3")){
      songs.push(element.href)
    }
  }
  return songs
   
}

async function main (){
  let songs = await getSongs()
  console.log(songs);
// var audio = new Audio(songs[0]);
//   audio.play(); 
}
main()

// document.getElementById("show-more-btn").addEventListener("click",function(e){
//   const secondRow = document.querySelector(".second-row");
//   const showMoreBtn = document.getElementById("show-more-btn");

//   if (secondRow.style.display ==="none"){
//     secondRow.style.display = "flex";
//     secondRow.style.transition="1s"
//     showMoreBtn.innerText = "Show Less";
//   } else{
//     secondRow.style.display = "none";
//     showMoreBtn.innerText = "Show More";
//   }
// });
// e();
// Get references to video and control elements
const videoPlayer = document.getElementById("videoPlayer");
const playBtn = document.getElementById("playBtn");
const volumeControl = document.getElementById("volumeControl");
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");

// Play / Pause functionality
let isPlaying = false;
playBtn.addEventListener("click", () => {
    if (isPlaying) {
        videoPlayer.pause();
        playBtn.className = "fas fa-play";  // Change icon to play
    } else {
        videoPlayer.play();
        playBtn.className = "fas fa-pause"; // Change icon to pause
    }
    isPlaying = !isPlaying;
});

// Volume control functionality
volumeControl.addEventListener("input", (e) => {
    videoPlayer.volume = e.target.value / 100;
});

// Skip backward 5 seconds
backwardBtn.addEventListener("click", () => {
    videoPlayer.currentTime -= 5;
});

// Skip forward 5 seconds
forwardBtn.addEventListener("click", () => {
    videoPlayer.currentTime += 5;
});

const mainPlayButton = document.querySelector(".details .play-button");

let isPlayingMain = false;
mainPlayButton.addEventListener("click", () => {
    if (isPlayingMain) {
        videoPlayer.pause();
        mainPlayButton.innerHTML = "▶"; // Icon for play
    } else {
        videoPlayer.play();
        mainPlayButton.innerHTML = '⏸'; // Icon for pause
    }
    isPlayingMain = !isPlayingMain;
});


// Add this in your script section
document.addEventListener('DOMContentLoaded', function() {
  const mainVideoPlayer = document.getElementById('videoPlayer');
  const songCards = document.querySelectorAll('.card');
  
  songCards.forEach(card => {
      card.addEventListener('click', function() {
          // Update main video player with the clicked song's video
          mainVideoPlayer.src = this.getAttribute('data-video-src');
          mainVideoPlayer.load(); // Reload the video
          mainVideoPlayer.play(); // Auto play the new video
          
          // Update the song details below the video
          document.querySelector('.details h2').textContent = this.querySelector('.title').textContent;
          document.querySelector('.details p').textContent = this.querySelector('.description').textContent + ' • 2020 • 1 song';
          
          // Update the footer player info
          document.querySelector('.track-info p:first-child').textContent = this.querySelector('.title').textContent;
          document.querySelector('.track-info p:last-child').textContent = this.querySelector('.description').textContent;
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const footerImage = document.getElementById('footerImage');
  const footerTitle = document.getElementById('footerTitle');
  const footerArtist = document.getElementById('footerArtist');
  
  // Get all cards
  const cards = document.querySelectorAll('.card');
  
  // Add click event listener to each card
  cards.forEach(card => {
      card.addEventListener('click', function() {
          // Get data from card's data attributes
          const songImg = this.dataset.songImg;
          const songTitle = this.dataset.songTitle;
          const songArtist = this.dataset.songArtist;
          
          // Update footer content
          footerImage.src = songImg;
          footerTitle.textContent = songTitle;
          footerArtist.textContent = songArtist;
          
          // Add animation
          footerImage.style.animation = 'fadeIn 0.3s';
          
          // Remove animation after it completes
          setTimeout(() => {
              footerImage.style.animation = '';
          }, 300);

          // Optional: Add active state to clicked card
          cards.forEach(c => c.classList.remove('active-card'));
          this.classList.add('active-card');
      });
  });
});