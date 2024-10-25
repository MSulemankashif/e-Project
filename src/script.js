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