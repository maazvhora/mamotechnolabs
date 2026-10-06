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

    // ── Generative AI Testimonials & Video Switcher ────────────────
    const testimonialsData = [
        {
            author: "Tejasvi Brahmbhatt,",
            quote: "The Generative AI course at Mamo TechnoLabs took me deep into production RAG pipelines, Vector Databases, and fine-tuning open-source LLMs like Llama 3. Hands-on projects with LangChain helped me secure an elite role as a Generative AI Engineer.",
            videoTitle: "Tejasvi’s Generative AI journey speaks for itself 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-akhil.jpg",
            studentName: "Tejasvi Brahmbhatt",
            studentRole: "Generative AI Engineer"
        },
        {
            author: "Devesh Jadav,",
            quote: "Learning how to build autonomous multi-agent systems using LangGraph and CrewAI was a game-changer. The mentor support and architectural code reviews gave me the exact skills needed to build enterprise GenAI products.",
            videoTitle: "Devesh’s breakthrough in Autonomous AI Agents 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-devesh.jpg",
            studentName: "Devesh Jadav",
            studentRole: "Autonomous AI Agent Developer"
        },
        {
            author: "Aarti Barot,",
            quote: "From multi-modal vision-language models to enterprise prompt security and RAG evaluation frameworks, Mamo TechnoLabs delivered an unparalleled curriculum for modern AI developers.",
            videoTitle: "Aarti’s experience in enterprise LLM solutions 👇",
            videoThumb: "https://www.vtechlabs.com/wp-content/uploads/2026/05/student-aarti.jpg",
            studentName: "Aarti Barot",
            studentRole: "LLM Solutions Architect"
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
            alert("Thank you for reaching out! Our Generative AI academic counselor will contact you shortly.");
            confusedForm.reset();
        });
    }
});
