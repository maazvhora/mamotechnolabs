let currentCategory = 'All';
let currentPage = 1;
const totalPages = 8;

// Live Search Filter Function
function filterCertificates() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.cert-card');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const category = card.getAttribute('data-category');
    
    const matchesSearch = name.includes(input);
    const matchesCategory = (currentCategory === 'All' || category === currentCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Category Filter Function
function filterByCategory(categoryName) {
  currentCategory = categoryName;
  
  // Update active UI state on list items
  const items = document.querySelectorAll('.category-list li');
  items.forEach(item => {
    if (item.innerText.includes(categoryName) || (categoryName === 'All' && item.innerText.includes('AI, Business'))) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  filterCertificates();
}

// Reset Filters Function
function resetFilters() {
  document.getElementById('searchInput').value = '';
  currentCategory = 'All';
  filterByCategory('All');
  setPage(1);
}

// Pagination Controls
function setPage(page) {
  currentPage = page;
  updatePaginationUI();
}

function changePage(direction) {
  if (direction === 'next' && currentPage < totalPages) {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  }
  updatePaginationUI();
}

function updatePaginationUI() {
  const pageNumbers = document.querySelectorAll('.page-num');
  pageNumbers.forEach(num => {
    if (parseInt(num.innerText) === currentPage) {
      num.classList.add('active');
    } else {
      num.classList.remove('active');
    }
  });
}


//slider 
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
  slideIndex = index;
  updateSlider();
}

function updateSlider() {
  const track = document.getElementById('testimonialTrack');
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  
  dots.forEach((dot, idx) => {
    if (idx === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
}, 3000);


//faq 
function toggleFaq(element) {
  const item = element.parentElement;
  
  // Optional: Close other open items so only one accordion stays open at a time
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(i => {
    if (i !== item) {
      i.classList.remove('active');
    }
  });

  // Toggle clicked item
  item.classList.toggle('active');
}