document.addEventListener('DOMContentLoaded', function() {
  // Get all required elements
  const videoPlayer = document.getElementById('videoPlayer');
  const headerPlayBtn = document.querySelector('.play-button');
  const footerPlayPauseBtn = document.getElementById('playPauseBtn');
  const volumeControl = document.getElementById('volumeControl');
  const backwardBtn = document.getElementById('backwardBtn');
  const forwardBtn = document.getElementById('forwardBtn');
  const cards = document.querySelectorAll('.card');

  // State management
  let isPlaying = false;

  // Function to update all play buttons
  function updatePlayButtons(playing) {
      isPlaying = playing;
      
      // Update header button
      headerPlayBtn.textContent = playing ? '❚❚' : '▶';
      
      // Update footer button
      if(playing) {
          footerPlayPauseBtn.classList.remove('fa-play');
          footerPlayPauseBtn.classList.add('fa-pause');
      } else {
          footerPlayPauseBtn.classList.remove('fa-pause');
          footerPlayPauseBtn.classList.add('fa-play');
      }
  }

  // Function to toggle play/pause
  function togglePlayPause() {
      if (videoPlayer.paused) {
          videoPlayer.play()
              .then(() => updatePlayButtons(true))
              .catch(error => {
                  console.error("Error playing video:", error);
                  updatePlayButtons(false);
              });
      } else {
          videoPlayer.pause();
          updatePlayButtons(false);
      }
  }

  // Card click handler
  cards.forEach(card => {
      card.addEventListener('click', function() {
          // Update footer
          const cardImage = this.querySelector('img').src;
          const cardTitle = this.querySelector('.title').textContent.trim();
          const cardArtist = this.querySelector('.description').textContent.trim();

          // Update footer display
          document.querySelector('.current-track img').src = cardImage;
          document.querySelector('.track-info p:first-child').textContent = cardTitle;
          document.querySelector('.track-info p:last-child').textContent = cardArtist;

          // Update main content
          document.querySelector('.details h2').textContent = cardTitle;
          document.querySelector('.details p').textContent = `${cardArtist} • 2020 • 1 song`;

          // Update video if data-video-src exists
          const videoSrc = this.getAttribute('data-video-src');
          if (videoSrc) {
              videoPlayer.src = videoSrc;
              videoPlayer.load();
              videoPlayer.play()
                  .then(() => updatePlayButtons(true))
                  .catch(err => console.error(err));
          }

          // Visual feedback
          cards.forEach(c => c.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Event Listeners
  headerPlayBtn.addEventListener('click', togglePlayPause);
  footerPlayPauseBtn.addEventListener('click', togglePlayPause);

  // Video controls
  volumeControl.addEventListener('input', (e) => {
      videoPlayer.volume = e.target.value / 100;
  });

  backwardBtn.addEventListener('click', () => {
      videoPlayer.currentTime -= 5;
  });

  forwardBtn.addEventListener('click', () => {
      videoPlayer.currentTime += 5;
  });

  // Video state listeners
  videoPlayer.addEventListener('play', () => updatePlayButtons(true));
  videoPlayer.addEventListener('pause', () => updatePlayButtons(false));
  videoPlayer.addEventListener('ended', () => updatePlayButtons(false));

  // Optional: Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
      if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT') {
          e.preventDefault();
          togglePlayPause();
      }
  });

  // Initialize state
  updatePlayButtons(false);
});

// Fetch songs function (if needed)
async function getSongs() {
  try {
      let response = await fetch("http://127.0.0.1:5500/src/songs/");
      let text = await response.text();
      let div = document.createElement("div");
      div.innerHTML = text;
      
      return Array.from(div.getElementsByTagName("a"))
          .filter(a => a.href.endsWith(".mp3"))
          .map(a => a.href);
  } catch (error) {
      console.error("Error fetching songs:", error);
      return [];
  }
}

// Initialize songs if needed
async function main() {
  const songs = await getSongs();
  console.log(songs);
  // Additional initialization if needed
}

main();