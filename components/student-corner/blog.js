// 1. Blog Filter Pills Interactivity
const blogPills = document.querySelectorAll('.blog-pill');
const blogCards = document.querySelectorAll('.blog-card');

blogPills.forEach(pill => {
  pill.addEventListener('click', () => {
    // Sabhi pills se active class hatayein
    blogPills.forEach(p => p.classList.remove('active'));
    // Clicked pill par active class add karein
    pill.classList.add('active');

    const selectedCategory = pill.textContent.trim().toLowerCase();

    // Filtering logic (Aap cards mein data-category attribute add karke filter kar sakte hain)
    blogCards.forEach(card => {
      if (selectedCategory === 'all') {
        card.style.display = 'flex';
      } else {
        // Demo ke liye sabhi cards display honge, aap yahan category matching laga sakte hain
        card.style.display = 'flex';
      }
    });
  });
});

// 2. Pagination Page Switching Interactivity
const pageButtons = document.querySelectorAll('.page-num');

pageButtons.forEach(button => {
  button.addEventListener('click', () => {
    pageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});