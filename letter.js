document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
});
const videoElement = document.getElementById('video');
videoElement.style.display = 'block';
videoElement.style.margin = '0 auto';
videoElement.style.textAlign = 'center';
const enterButton = document.getElementById('enter-btn');
enterButton.style.backgroundImage = 'url("images/15.jpg")';
enterButton.style.backgroundSize = 'cover';
enterButton.style.backgroundPosition = 'center';
enterButton.style.border = 'none';
enterButton.style.color = 'white';
enterButton.style.padding = '10px 20px';
enterButton.style.fontSize = '16px';
enterButton.style.cursor = 'pointer';