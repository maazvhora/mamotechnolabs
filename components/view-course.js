// course filtering functionality
function filterCourses() {
  const searchInput = document.getElementById('courseSearchInput').value.toLowerCase();
  
  // Get checked categories
  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
  
  // Get checked durations
  const selectedDurations = Array.from(document.querySelectorAll('input[name="duration"]:checked')).map(cb => cb.value);

  const cards = document.querySelectorAll('.course-card');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const category = card.getAttribute('data-category');
    const duration = card.getAttribute('data-duration');

    const matchesSearch = name.includes(searchInput);
    const matchesCategory = (selectedCategories.length === 0 || selectedCategories.includes(category));
    const matchesDuration = (selectedDurations.length === 0 || selectedDurations.includes(duration));

    if (matchesSearch && matchesCategory && matchesDuration) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Reset filters functionality
function resetCourseFilters() {
  document.getElementById('courseSearchInput').value = '';
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  filterCourses();
}

function setCoursePage(page) {
  document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function nextCoursePage() {
  // Simple handler for next page button
  console.log("Next page clicked");
}


// number counter functionality
document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.stat-num');
            const speed = 50; // The lower the faster

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix');
                    const count = +counter.innerText.replace(/[^0-9]/g, '');

                    // Calculate increment step
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + suffix;
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + suffix; // Stop and set exact target value
                    }
                };

                updateCount();
            });
        });