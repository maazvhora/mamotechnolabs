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

    // ── Artificial Intelligence Testimonials & Video Switcher ──────
    const testimonialsData = [
        {
            author: "Tejasvi Brahmbhatt,",
            quote: "The Artificial Intelligence and Deep Learning training at Mamo TechnoLabs helped me master neural networks and LLM integration. Building real-time computer vision models paved my way to becoming an AI Solutions Engineer.",
            videoTitle: "Tejasvi’s Artificial Intelligence success journey 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-akhil.jpg",
            studentName: "Tejasvi Brahmbhatt",
            studentRole: "AI Solutions Engineer"
        },
        {
            author: "Devesh Jadav,",
            quote: "Hands-on projects with PyTorch, LangChain, and RAG architectures gave me practical experience that textbooks never could. The mentors guided me through complex AI pipeline deployments.",
            videoTitle: "Devesh’s Generative AI & Deep Learning story 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-devesh.jpg",
            studentName: "Devesh Jadav",
            studentRole: "Generative AI Specialist"
        },
        {
            author: "Aarti Barot,",
            quote: "From training transformer models to deploying autonomous AI agents, Mamo TechnoLabs provided the perfect launchpad for my career in Artificial Intelligence and NLP.",
            videoTitle: "Aarti’s experience in cutting-edge AI systems 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-aarti.jpg",
            studentName: "Aarti Barot",
            studentRole: "NLP & AI Engineer"
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
            alert("Thank you for reaching out! Our Artificial Intelligence academic counselor will contact you shortly.");
            confusedForm.reset();
        });
    }
});
