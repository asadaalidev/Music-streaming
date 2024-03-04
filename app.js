document.addEventListener('DOMContentLoaded', function() {
    // Initialize an audio object and a variable to track the current playing song ID
    let audio = null;
    let currentPlayingId = '';

    const playButton = document.getElementById('Skitzo');
    playButton.addEventListener('click', function() {
        const songId = this.id; // Get the ID of the clicked button
        const audioSource = this.getAttribute('data-audio');

        // If there's no audio object or the clicked song is different from the current
        if (!audio || currentPlayingId !== songId) {
            // If audio is already playing, pause it first
            if (audio) {
                audio.pause();
            }

            // Create a new audio object, update the currentPlayingId, and play the new song
            audio = new Audio(audioSource);
            audio.play();
            currentPlayingId = songId;
        } else {
            // If the same button is clicked and audio exists, toggle play/pause
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize an audio object and a variable to track the current playing song ID
    let audio = null;
    let currentPlayingId = '';

    const playButton = document.getElementById('Psycho');
    playButton.addEventListener('click', function() {
        const songId = this.id; // Get the ID of the clicked button
        const audioSource = this.getAttribute('data-audio');

        // If there's no audio object or the clicked song is different from the current
        if (!audio || currentPlayingId !== songId) {
            // If audio is already playing, pause it first
            if (audio) {
                audio.pause();
            }

            // Create a new audio object, update the currentPlayingId, and play the new song
            audio = new Audio(audioSource);
            audio.play();
            currentPlayingId = songId;
        } else {
            // If the same button is clicked and audio exists, toggle play/pause
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize an audio object and a variable to track the current playing song ID
    let audio = null;
    let currentPlayingId = '';

    const playButton = document.getElementById('After');
    playButton.addEventListener('click', function() {
        const songId = this.id; // Get the ID of the clicked button
        const audioSource = this.getAttribute('data-audio');

        // If there's no audio object or the clicked song is different from the current
        if (!audio || currentPlayingId !== songId) {
            // If audio is already playing, pause it first
            if (audio) {
                audio.pause();
            }

            // Create a new audio object, update the currentPlayingId, and play the new song
            audio = new Audio(audioSource);
            audio.play();
            currentPlayingId = songId;
        } else {
            // If the same button is clicked and audio exists, toggle play/pause
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize an audio object and a variable to track the current playing song ID
    let audio = null;
    let currentPlayingId = '';

    const playButton = document.getElementById('stronger');
    playButton.addEventListener('click', function() {
        const songId = this.id; // Get the ID of the clicked button
        const audioSource = this.getAttribute('data-audio');

        // If there's no audio object or the clicked song is different from the current
        if (!audio || currentPlayingId !== songId) {
            // If audio is already playing, pause it first
            if (audio) {
                audio.pause();
            }

            // Create a new audio object, update the currentPlayingId, and play the new song
            audio = new Audio(audioSource);
            audio.play();
            currentPlayingId = songId;
        } else {
            // If the same button is clicked and audio exists, toggle play/pause
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize an audio object and a variable to track the current playing song ID
    let audio = null;
    let currentPlayingId = '';

    const playButton = document.getElementById('apparently');
    playButton.addEventListener('click', function() {
        const songId = this.id; // Get the ID of the clicked button
        const audioSource = this.getAttribute('data-audio');

        // If there's no audio object or the clicked song is different from the current
        if (!audio || currentPlayingId !== songId) {
            // If audio is already playing, pause it first
            if (audio) {
                audio.pause();
            }

            // Create a new audio object, update the currentPlayingId, and play the new song
            audio = new Audio(audioSource);
            audio.play();
            currentPlayingId = songId;
        } else {
            // If the same button is clicked and audio exists, toggle play/pause
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    });
});

