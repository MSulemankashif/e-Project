document.addEventListener('DOMContentLoaded', function() {
    // Get all required elements
    const videoPlayer = document.getElementById('videoPlayer');
    const headerPlayBtn = document.querySelector('.play-button');
    const playBtn = document.getElementById('playBtn');
    const volumeControl = document.getElementById('volumeControl');
    const backwardBtn = document.getElementById('backwardBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const seekbar = document.getElementById('seekbar');
    const currentTimeDisplay = document.querySelector('.current-time');
    const durationDisplay = document.querySelector('.duration');
    const cards = document.querySelectorAll('.card');

    // State management
    let isPlaying = false;
    let isDragging = false;

    // Format time function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to update all play buttons
    function updatePlayButtons(playing) {
        isPlaying = playing;
        
        // Update header button
        headerPlayBtn.textContent = playing ? '❚❚' : '▶';
        
        // Update footer button
        if(playing) {
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        } else {
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
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

    // Seekbar functionality
    videoPlayer.addEventListener('loadedmetadata', () => {
        seekbar.max = Math.floor(videoPlayer.duration);
        durationDisplay.textContent = formatTime(videoPlayer.duration);
    });

    videoPlayer.addEventListener('timeupdate', () => {
        if (!isDragging) {
            seekbar.value = Math.floor(videoPlayer.currentTime);
            currentTimeDisplay.textContent = formatTime(videoPlayer.currentTime);
        }
    });

    // Improved seekbar interaction
    seekbar.addEventListener('mousedown', () => {
        isDragging = true;
        videoPlayer.pause();
    });

    seekbar.addEventListener('input', () => {
        currentTimeDisplay.textContent = formatTime(seekbar.value);
    });

    seekbar.addEventListener('change', () => {
        isDragging = false;
        videoPlayer.currentTime = seekbar.value;
        if (isPlaying) {
            videoPlayer.play();
        }
    });

    // Video controls
    volumeControl.addEventListener('input', (e) => {
        videoPlayer.volume = e.target.value / 100;
    });

    backwardBtn.addEventListener('click', () => {
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 5);
    });

    forwardBtn.addEventListener('click', () => {
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 5);
    });

    // Event Listeners
    headerPlayBtn.addEventListener('click', togglePlayPause);
    playBtn.addEventListener('click', togglePlayPause);

    // Card click handlers
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