// Function to change the image when its respective button is clicked
function changeImage(imgId) {
    // New image source based on the provided image ID
    const newSrc = `new_${imgId}.jpg`;

    // Set the new source to the image
    document.getElementById(imgId).setAttribute('src', newSrc);
}

// Function to change the video when its respective button is clicked
function changeVideo(videoId) {
    // New video source based on the provided video ID
    const newSrc = `new_${videoId}.mp4`;

    // Set the new source to the video's source element
    const videoElement = document.getElementById(videoId);
    videoElement.querySelector('source').setAttribute('src', newSrc);

    // Load and play the new video
    videoElement.load();
    videoElement.play(); // Optional: if you want the video to start playing immediately
}
