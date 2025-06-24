
document.getElementById('searchInput').addEventListener('input', function() {
  const keyword = this.value.toLowerCase();
  const videos = document.querySelectorAll('.video');
  videos.forEach(video => {
    const text = video.innerText.toLowerCase();
    video.style.display = text.includes(keyword) ? '' : 'none';
  });
});
