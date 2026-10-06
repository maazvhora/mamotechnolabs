// ── 1. Header (Navbar) Scroll Shrink ──────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }
});

// ── 2. Header Dropdown Click Handlers ─────────────────────────────
function initHeaderDropdowns() {
  const coursesDropdown = document.querySelector('.courses-dropdown');
  const coursesBtn = document.querySelector('#courses-btn');
  if (coursesDropdown && coursesBtn) {
    coursesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      coursesDropdown.classList.toggle('active');
    });
  }

  const studentDropdown = document.querySelector('.dropdown');
  const studentBtn = studentDropdown ? studentDropdown.querySelector('.nav-link') : null;
  if (studentDropdown && studentBtn) {
    studentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      studentDropdown.classList.toggle('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (coursesDropdown && !coursesDropdown.contains(e.target)) {
      coursesDropdown.classList.remove('active');
    }
    if (studentDropdown && !studentDropdown.contains(e.target)) {
      studentDropdown.classList.remove('active');
    }
  });
}

// ── 3. Footer Dynamic Handlers ────────────────────────────────────
function initFooterInteractions() {
  const footerYear = document.querySelector('.footer-bottom p');
  if (footerYear && !footerYear.innerText.includes(new Date().getFullYear().toString())) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} MaMo TechnoLabs. All rights reserved.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderDropdowns();
  initFooterInteractions();
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

            // ── Testimonials & Video Switcher ───────────────────
            const testimonialsData = [
                {
                    author: "Tejasvi Brahmbhatt,",
                    quote: "The training has been instrumental in my development as a data analyst. I would highly recommend this program to other students looking to build their technical skill set.",
                    videoTitle: "Akhil Hingrajiya’s journey speaks for itself 👇",
                    videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-akhil.jpg",
                    studentName: "Akhil Hingrajiya",
                    studentRole: "Software Testing"
                },
                {
                    author: "Devesh Jadav,",
                    quote: "Hands-on real-time live projects and mentor guidance helped me transition from a fresher into a confident industry-ready developer.",
                    videoTitle: "Devesh Jadav’s success review 👇",
                    videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-devesh.jpg",
                    studentName: "Devesh Jadav",
                    studentRole: "Web Developer"
                },
                {
                    author: "Aarti Barot,",
                    quote: "Mamo TechnoLabs gave me the practical coding exposure and mock interview preparation I needed to clear technical rounds with ease.",
                    videoTitle: "Aarti Barot’s experience speaks for itself 👇",
                    videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-aarti.jpg",
                    studentName: "Aarti Barot",
                    studentRole: "PHP Developer"
                }
            ];

            let activeTestimonialIdx = 0;
            const quoteCard = document.getElementById("studentQuoteCard");
            const quoteAuthor = document.getElementById("quoteAuthor");
            const quoteText = document.getElementById("quoteText");
            const videoThumb = document.getElementById("videoStudentThumb");
            const videoTitle = document.getElementById("videoHeaderTitle");
            const videoName = document.getElementById("videoStudentName");
            const videoRole = document.getElementById("videoStudentRole");

            const setTestimonial = (idx) => {
                const item = testimonialsData[idx];
                if (!item || !quoteCard) return;

                quoteCard.style.opacity = "0";
                quoteCard.style.transform = "translateY(6px)";
                if (videoThumb) videoThumb.style.opacity = "0.4";

                setTimeout(() => {
                    if (quoteAuthor) quoteAuthor.textContent = item.author;
                    if (quoteText) quoteText.textContent = item.quote;
                    if (videoThumb) videoThumb.src = item.videoThumb;
                    if (videoTitle) videoTitle.textContent = item.videoTitle;
                    if (videoName) videoName.textContent = item.studentName;
                    if (videoRole) videoRole.textContent = item.studentRole;

                    quoteCard.style.opacity = "1";
                    quoteCard.style.transform = "translateY(0)";
                    if (videoThumb) videoThumb.style.opacity = "1";
                }, 180);
            };

            const prevButtons = [document.getElementById("prevResBtn"), document.getElementById("prevVidBtn")];
            const nextButtons = [document.getElementById("nextResBtn"), document.getElementById("nextVidBtn")];

            prevButtons.forEach(btn => {
                if (btn) {
                    btn.addEventListener("click", () => {
                        activeTestimonialIdx = (activeTestimonialIdx - 1 + testimonialsData.length) % testimonialsData.length;
                        setTestimonial(activeTestimonialIdx);
                    });
                }
            });

            nextButtons.forEach(btn => {
                if (btn) {
                    btn.addEventListener("click", () => {
                        activeTestimonialIdx = (activeTestimonialIdx + 1) % testimonialsData.length;
                        setTestimonial(activeTestimonialIdx);
                    });
                }
            });

            // ── Still Confused Form Handler ─────────────────────
            const confusedForm = document.getElementById("confusedForm");
            if (confusedForm) {
                confusedForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    alert("Thank you for reaching out! Our academic counselor will contact you shortly.");
                    confusedForm.reset();
                });
            }
        });