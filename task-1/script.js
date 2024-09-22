const thumbnail = document.getElementById('thumbnail');
const video = document.getElementById('video');

thumbnail.addEventListener('click', playVideo);

function playVideo() {
    thumbnail.style.display = 'none';
    video.style.display = 'block'; 
    video.src = "https://www.youtube.com/embed/TiMRwri1xJ8?autoplay=1"; // Embed YouTube video with autoplay
}


function toggleContent() {
    const leftSection = document.querySelector('.left-section');
    leftSection.classList.toggle('expanded');
}


const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
