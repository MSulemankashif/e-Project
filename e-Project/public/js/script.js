// document.getElementById("homeIcon").addEventListener("click", function(e) {
//     e.preventDefault(); 
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }); // For scroll

// const searchIcon = document.querySelector('.fas.fa-search');
// const searchBar = document.querySelector('.search-bar input');

// searchIcon.addEventListener('click', () => {
//   searchBar.focus();
// });

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
  
  document.getElementById("show-more-btn").addEventListener("click",function(e){
    const secondRow = document.querySelector(".second-row");
    const showMoreBtn = document.getElementById("show-more-btn");
  
    if (secondRow.style.display ==="none"){
      secondRow.style.display = "contents";
      secondRow.style.transition="1s"
      showMoreBtn.innerText = "Show Less";
    } else{
      secondRow.style.display = "none";
      showMoreBtn.innerText = "Show More";
    }
  });
  e();