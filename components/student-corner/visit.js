// Open Lightbox Function
function openLightbox(imageSrc) {
  const modal = document.getElementById('imageLightbox');
  const modalImg = document.getElementById('lightboxImg');
  if (modal && modalImg) {
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
  }
}

// Close Lightbox Function
function closeLightbox() {
  const modal = document.getElementById('imageLightbox');
  if (modal) {
    modal.style.display = 'none';
  }
}

// slidbar button (University Students Visited)
const track = document.getElementById('universityTrack');
let scrollAmount = 0;
const cardWidth = 300; // card width (270px) + gap (30px)

function slideRight() {
  if (!track) return;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  if (maxScroll <= 0) return;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0; // loop back to first
  } else {
    scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

function slideLeft() {
  if (!track) return;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  if (maxScroll <= 0) return;
  if (scrollAmount <= 0) {
    scrollAmount = maxScroll; // loop to last
  } else {
    scrollAmount = Math.max(0, scrollAmount - cardWidth);
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

// testimonialTrack button
const tTrack = document.getElementById('testimonialTrack');
let tScrollAmount = 0;

function slideTestimonialsRight() {
  if (!tTrack) return;
  const cardElement = tTrack.querySelector('.testimonial-card');
  const cardFullWidth = cardElement ? (cardElement.offsetWidth + 30) : 340;
  const maxScroll = Math.max(0, tTrack.scrollWidth - tTrack.clientWidth);
  
  if (maxScroll <= 0) return;
  if (tScrollAmount >= maxScroll - 5) {
    tScrollAmount = 0; // loop to start
  } else {
    tScrollAmount = Math.min(tScrollAmount + cardFullWidth, maxScroll);
  }
  tTrack.style.transform = `translateX(-${tScrollAmount}px)`;
}

function slideTestimonialsLeft() {
  if (!tTrack) return;
  const cardElement = tTrack.querySelector('.testimonial-card');
  const cardFullWidth = cardElement ? (cardElement.offsetWidth + 30) : 340;
  const maxScroll = Math.max(0, tTrack.scrollWidth - tTrack.clientWidth);
  
  if (maxScroll <= 0) return;
  if (tScrollAmount <= 5) {
    tScrollAmount = maxScroll; // loop to end
  } else {
    tScrollAmount = Math.max(0, tScrollAmount - cardFullWidth);
  }
  tTrack.style.transform = `translateX(-${tScrollAmount}px)`;
}