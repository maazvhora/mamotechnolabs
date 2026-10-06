// ── Navbar scroll shrink ──────────────────────────────────────────
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

document.addEventListener("DOMContentLoaded", () => {
    // ── Stat Numbers Counter Animation ─────────────────────────────
    const counters = document.querySelectorAll('.stat-num');
    const speed = 50; // The lower the faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const count = +counter.innerText.replace(/[^0-9]/g, '');

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + suffix;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + suffix;
            }
        };

        updateCount();
    });

    // ── Data Science Testimonials & Video Switcher ─────────────────
    const testimonialsData = [
        {
            author: "Tejasvi Brahmbhatt,",
            quote: "The Data Science program at Mamo TechnoLabs provided the ideal balance of statistics, exploratory data analysis, and predictive machine learning. Hands-on projects with Pandas and Power BI helped me land my dream role as a Data Scientist.",
            videoTitle: "Tejasvi’s Data Science journey speaks for itself 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-akhil.jpg",
            studentName: "Tejasvi Brahmbhatt",
            studentRole: "Lead Data Scientist"
        },
        {
            author: "Devesh Jadav,",
            quote: "Working with massive real-world datasets, complex SQL queries, and predictive algorithms under expert mentorship transformed my career from junior coder to senior data analyst.",
            videoTitle: "Devesh’s career acceleration in analytics 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-devesh.jpg",
            studentName: "Devesh Jadav",
            studentRole: "Senior Data Analyst"
        },
        {
            author: "Aarti Barot,",
            quote: "The interactive Power BI and Tableau visualization modules combined with Python data wrangling gave me the practical confidence needed to clear technical rounds with ease.",
            videoTitle: "Aarti’s experience in Business Intelligence & Data Science 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-aarti.jpg",
            studentName: "Aarti Barot",
            studentRole: "BI & Analytics Consultant"
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

    // ── Partners Track Horizontal Scroll (Arrows) ──────────────────
    const partnerLeftBtn = document.querySelector(".partners-slider-container .left-arrow");
    const partnerRightBtn = document.querySelector(".partners-slider-container .right-arrow");
    const partnerTrack = document.querySelector(".partners-track");

    if (partnerLeftBtn && partnerTrack) {
        partnerLeftBtn.addEventListener("click", () => {
            partnerTrack.scrollBy({ left: -220, behavior: "smooth" });
        });
    }
    if (partnerRightBtn && partnerTrack) {
        partnerRightBtn.addEventListener("click", () => {
            partnerTrack.scrollBy({ left: 220, behavior: "smooth" });
        });
    }

    // ── Still Confused Form Handler ────────────────────────────────
    const confusedForm = document.getElementById("confusedForm");
    if (confusedForm) {
        confusedForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! Our Data Science academic counselor will contact you shortly.");
            confusedForm.reset();
        });
    }
});
