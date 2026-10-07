/**
 * slider.js — Universal Arrow Button Handler
 * Works across all pages of Mamo TechnoLabs website.
 * Auto-detects sliders and arrows on any page and attaches smooth looping functionality.
 */

function initAllSliders() {

  // ─────────────────────────────────────────────────────────────
  // 1. HIRING PARTNERS & LOGO TRACKS SLIDERS
  //    Works for index.html, hire.html, internship.html, view-course.html, course pages
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('.partners-slider-container, .partners-slider-wrapper, .hiring-partners-section').forEach(container => {
    const track = container.querySelector('.partners-track, #partnersTrack');
    if (!track) return;

    const leftBtn = container.querySelector('.left-arrow, .prev-btn, .partner-nav-btn.prev-btn') ||
                    container.querySelectorAll('.arrow-btn')[0];
    const rightBtn = container.querySelector('.right-arrow, .next-btn, .partner-nav-btn.next-btn') ||
                     container.querySelectorAll('.arrow-btn')[1];

    const scrollAmt = 240;

    if (leftBtn) {
      leftBtn.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
        if (track.scrollLeft <= 15 && maxScroll > 0) {
          track.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        }
      };
    }

    if (rightBtn) {
      rightBtn.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 15 && maxScroll > 0) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      };
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 2. PLACEMENT PAGE — PLACED COMPANIES LOGOS
  //    .logos-carousel  →  .logo-track
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('.logos-carousel').forEach(carousel => {
    const logoTrack = carousel.querySelector('.logo-track');
    const prevBtn = carousel.querySelector('.slider-btn.prev') || carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.slider-btn.next') || carousel.querySelector('.next');
    if (!logoTrack) return;

    const scrollAmt = 210;

    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, logoTrack.scrollWidth - logoTrack.clientWidth);
        if (logoTrack.scrollLeft <= 15 && maxScroll > 0) {
          logoTrack.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          logoTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        }
      };
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, logoTrack.scrollWidth - logoTrack.clientWidth);
        if (logoTrack.scrollLeft + logoTrack.clientWidth >= logoTrack.scrollWidth - 15 && maxScroll > 0) {
          logoTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          logoTrack.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      };
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 3. PLACEMENT PAGE — RECENT PLACEMENTS CARDS SLIDER
  //    .carousel-navigation  →  .placements-container
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('.carousel-navigation').forEach(nav => {
    const container = document.querySelector('.placements-container') || nav.previousElementSibling;
    const [cPrev, cNext] = nav.querySelectorAll('.nav-arrow-btn, button');
    if (!container) return;

    const scrollAmt = 250;

    if (cPrev) {
      cPrev.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
        if (container.scrollLeft <= 15 && maxScroll > 0) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        }
      };
    }

    if (cNext) {
      cNext.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 15 && maxScroll > 0) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      };
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 4. UNIVERSITY TIE-UPS SLIDERS
  //    .uni-slider-arrows  →  .uni-cards-wrapper
  //    (Works in index.html, about.html, and all course pages)
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('.uni-slider-arrows').forEach(arrowsWrap => {
    const parent = arrowsWrap.closest('.uni-left, .university-container, section');
    const uniWrapper = (parent ? parent.querySelector('.uni-cards-wrapper') : null) || document.querySelector('.uni-cards-wrapper');
    if (!uniWrapper) return;

    const [uPrev, uNext] = arrowsWrap.querySelectorAll('.arrow-btn, button');

    const getScrollAmt = () => {
      const card = uniWrapper.querySelector('.uni-card');
      if (card) {
        const gap = parseFloat(window.getComputedStyle(uniWrapper).gap) || 20;
        return card.offsetWidth + gap;
      }
      return 260;
    };

    if (uPrev) {
      uPrev.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, uniWrapper.scrollWidth - uniWrapper.clientWidth);
        if (uniWrapper.scrollLeft <= 15 && maxScroll > 0) {
          uniWrapper.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          uniWrapper.scrollBy({ left: -getScrollAmt(), behavior: 'smooth' });
        }
      };
    }

    if (uNext) {
      uNext.onclick = (e) => {
        e.preventDefault();
        const maxScroll = Math.max(0, uniWrapper.scrollWidth - uniWrapper.clientWidth);
        if (uniWrapper.scrollLeft + uniWrapper.clientWidth >= uniWrapper.scrollWidth - 15 && maxScroll > 0) {
          uniWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          uniWrapper.scrollBy({ left: getScrollAmt(), behavior: 'smooth' });
        }
      };
    }
  });

  // ─────────────────────────────────────────────────────────────
  // 5. TESTIMONIALS & VIDEO REVIEWS SLIDER
  //    Works for index.html, final-year.html, view-course.html, about.html
  // ─────────────────────────────────────────────────────────────
  const testimonials = [
    {
      name: 'Princy Patel, PHP Web Development',
      stars: 5,
      review: 'The 15-day PHP web development internship was amazing. Hands-on project experience, fast-tracked learning and certification gave me real industry confidence.',
      videoTitle: 'PHP course review by Aarti Barot',
      studentName: 'Aarti Barot',
      studentRole: 'PHP Developer',
    },
    {
      name: 'Aarti Barot, PHP Developer',
      stars: 5,
      review: 'MamoTechnoLabs gave me the skills and confidence to crack my first job. The trainers were incredibly supportive and the curriculum was job-focused.',
      videoTitle: 'Digital Marketing Career Start | Real Student Story',
      studentName: 'Manishri Bajaj',
      studentRole: 'Digital Marketing',
    },
    {
      name: 'Rahul Sharma, Full Stack Developer',
      stars: 5,
      review: 'Real projects, expert mentors, and placement support — everything I needed was here. Highly recommend to every student looking to build a tech career.',
      videoTitle: 'Full Stack Development Success Review',
      studentName: 'Rahul Sharma',
      studentRole: 'Full Stack Developer',
    },
    {
      name: 'Pooja Desai, Data Analyst',
      stars: 5,
      review: 'The Data Science course was well-structured with live sessions and industry case studies. Got placed within 2 months of completing my training.',
      videoTitle: 'Data Analyst Journey & Placement Story',
      studentName: 'Pooja Desai',
      studentRole: 'Data Analyst',
    },
  ];

  const quoteBox = document.querySelector('.quote-box, .results-left .testimonial-card');
  if (quoteBox) {
    let currentTestimonial = 0;

    const nameEl = quoteBox.querySelector('.student-name, h4, h3');
    const starsEl = quoteBox.querySelector('.stars');
    const reviewEl = quoteBox.querySelector('.review-text, p');

    // Video card elements
    const videoCard = document.querySelector('.video-card');
    const videoTitleEl = videoCard ? videoCard.querySelector('.video-meta h4, .video-title-info h5') : null;
    const videoNameEl = videoCard ? videoCard.querySelector('.student-label-name, .student-label h6') : null;
    const videoRoleEl = videoCard ? videoCard.querySelector('.student-label-sub, .student-label p') : null;

    const renderTestimonial = (index) => {
      const t = testimonials[index];
      if (!t) return;

      quoteBox.style.opacity = '0';
      quoteBox.style.transform = 'translateY(6px)';

      setTimeout(() => {
        if (nameEl) nameEl.textContent = t.name;
        if (reviewEl) reviewEl.textContent = t.review;
        if (starsEl) {
          starsEl.innerHTML = Array(t.stars).fill('<i class="fa-solid fa-star"></i>').join('');
        }
        if (videoTitleEl) videoTitleEl.textContent = t.videoTitle;
        if (videoNameEl) videoNameEl.textContent = t.studentName;
        if (videoRoleEl) videoRoleEl.textContent = t.studentRole;

        quoteBox.style.opacity = '1';
        quoteBox.style.transform = 'translateY(0)';
      }, 200);
    };

    quoteBox.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

    // Left quote box arrow buttons
    const leftArrowsWrap = document.querySelector('.left-arrows, .results-left .slider-arrows');
    if (leftArrowsWrap) {
      const [prevBtn, nextBtn] = leftArrowsWrap.querySelectorAll('.arrow-btn, button');
      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
          renderTestimonial(currentTestimonial);
        };
      }
      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          renderTestimonial(currentTestimonial);
        };
      }
    }

    // Right video card arrow buttons
    const videoNavArrows = document.querySelector('.video-nav-arrows, .carousel-nav');
    if (videoNavArrows) {
      const vArrows = videoNavArrows.querySelectorAll('i, button, .nav-arrow');
      if (vArrows.length >= 2) {
        const vPrev = vArrows[0];
        const vNext = vArrows[1];
        vPrev.style.cursor = 'pointer';
        vNext.style.cursor = 'pointer';

        vPrev.onclick = (e) => {
          e.preventDefault();
          currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
          renderTestimonial(currentTestimonial);
        };
        vNext.onclick = (e) => {
          e.preventDefault();
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          renderTestimonial(currentTestimonial);
        };
      }
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 6. INFRASTRUCTURE & VISIT SLIDERS FALLBACK BINDINGS
  // ─────────────────────────────────────────────────────────────
  // Hire page infrastructure slider
  const infraTrack = document.getElementById('infraTrack');
  if (infraTrack) {
    const infraControls = document.querySelector('.infra-controls');
    if (infraControls) {
      const [infPrev, infNext] = infraControls.querySelectorAll('.infra-slider-btn, button');
      if (infPrev && typeof window.slideInfraLeft === 'function') infPrev.onclick = window.slideInfraLeft;
      if (infNext && typeof window.slideInfraRight === 'function') infNext.onclick = window.slideInfraRight;
    }
  }

  // Visit page university track
  const uniTrack = document.getElementById('universityTrack');
  if (uniTrack) {
    const uniControls = document.querySelector('.slider-controls');
    if (uniControls) {
      const [uPrev, uNext] = uniControls.querySelectorAll('.slider-btn, button');
      if (uPrev && typeof window.slideLeft === 'function') uPrev.onclick = window.slideLeft;
      if (uNext && typeof window.slideRight === 'function') uNext.onclick = window.slideRight;
    }
  }

  // Visit page testimonials track
  const tTrack = document.getElementById('testimonialTrack');
  if (tTrack) {
    const tControls = document.querySelector('.testimonial-controls');
    if (tControls) {
      const [tPrev, tNext] = tControls.querySelectorAll('.t-slider-btn, button');
      if (tPrev && typeof window.slideTestimonialsLeft === 'function') tPrev.onclick = window.slideTestimonialsLeft;
      if (tNext && typeof window.slideTestimonialsRight === 'function') tNext.onclick = window.slideTestimonialsRight;
    }
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllSliders);
} else {
  initAllSliders();
}
