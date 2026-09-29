// Open Lightbox Function
function openLightbox(imageSrc) {
  const modal = document.getElementById('imageLightbox');
  const modalImg = document.getElementById('lightboxImg');
  modal.style.display = 'flex';
  modalImg.src = imageSrc;
}

// Close Lightbox Function
function closeLightbox() {
  const modal = document.getElementById('imageLightbox');
  modal.style.display = 'none';
}

// slidbar button 
const track = document.getElementById('universityTrack');
let scrollAmount = 0;
const cardWidth = 300; // card width (270px) + gap (30px)

function slideRight() {
  const maxScroll = track.scrollWidth - track.clientWidth;
  scrollAmount += cardWidth;
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

function slideLeft() {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

// testimonialTrack button
const tTrack = document.getElementById('testimonialTrack');
let tScrollAmount = 0;

function slideTestimonialsRight() {
  const cardElement = tTrack.querySelector('.testimonial-card');
  const cardFullWidth = cardElement.offsetWidth + 30;
  const maxScroll = tTrack.scrollWidth - tTrack.clientWidth;
  
  tScrollAmount += cardFullWidth;
  if (tScrollAmount > maxScroll) {
    tScrollAmount = maxScroll;
  }
  tTrack.style.transform = `translateX(-${tScrollAmount}px)`;
}

function slideTestimonialsLeft() {
  const cardElement = tTrack.querySelector('.testimonial-card');
  const cardFullWidth = cardElement.offsetWidth + 30;
  
  tScrollAmount -= cardFullWidth;
  if (tScrollAmount < 0) {
    tScrollAmount = 0;
  }
  tTrack.style.transform = `translateX(-${tScrollAmount}px)`;
}