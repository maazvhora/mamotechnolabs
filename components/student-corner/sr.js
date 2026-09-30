// Toggle Dropdown Menu
function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
}

// Select Filter Item
function selectFilter(filterName) {
  document.getElementById('selectedFilterText').innerText = filterName;
  document.getElementById('dropdownMenu').classList.remove('show');

  // Update active state in menu items
  const items = document.querySelectorAll('.dropdown-item');
  items.forEach(item => {
    if (item.innerText === filterName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Filter cards logic
  const cards = document.querySelectorAll('.exp-card');
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filterName === 'All Reviews') {
      card.style.display = 'block';
    } else if (filterName === 'Google Reviews' && category === 'google') {
      card.style.display = 'block';
    } else if (filterName === 'YouTube Reviews' && category === 'youtube') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown-wrapper')) {
    document.getElementById('dropdownMenu').classList.remove('show');
  }
});