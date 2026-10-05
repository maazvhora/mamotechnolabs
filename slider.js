/**
 * slider.js — Universal Arrow Button Handler
 * Works across all pages of Mamo Technolabs website.
 * Auto-detects sliders on the page and attaches functionality.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────────────────────────
  // 1. HIRING PARTNERS SLIDER  (index.html)
  //    .left-arrow / .right-arrow  →  .partners-track
  // ─────────────────────────────────────────────────────────────
  const partnersTrack = document.querySelector('.partners-track');
  if (partnersTrack) {
    const leftArrow  = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const scrollAmt  = 220;

    if (leftArrow)  leftArrow.addEventListener('click',  () => partnersTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
    if (rightArrow) rightArrow.addEventListener('click', () => partnersTrack.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
  }


  // ─────────────────────────────────────────────────────────────
  // 2. TESTIMONIALS SLIDER  (index.html + final-year.html etc.)
  //    .left-arrows / .slider-arrows  →  .quote-box items
  // ─────────────────────────────────────────────────────────────
  const testimonials = [
    {
      name:   'Princy Patel, PHP Web Development',
      stars:  5,
      review: 'The 15-day PHP web development internship was amazing. Hands-on project experience, fast-tracked learning and certification gave me real industry confidence.',
    },
    {
      name:   'Aarti Barot, PHP Developer',
      stars:  5,
      review: 'MamoTechnoLabs gave me the skills and confidence to crack my first job. The trainers were incredibly supportive and the curriculum was job-focused.',
    },
    {
      name:   'Rahul Sharma, Full Stack Developer',
      stars:  5,
      review: 'Real projects, expert mentors, and placement support — everything I needed was here. Highly recommend to every student looking to build a tech career.',
    },
    {
      name:   'Pooja Desai, Data Analyst',
      stars:  5,
      review: 'The Data Science course was well-structured with live sessions and industry case studies. Got placed within 2 months of completing my training.',
    },
  ];

  const quoteBox = document.querySelector('.quote-box');
  if (quoteBox) {
    let currentTestimonial = 0;

    const nameEl   = quoteBox.querySelector('.student-name');
    const starsEl  = quoteBox.querySelector('.stars');
    const reviewEl = quoteBox.querySelector('.review-text');

    const renderTestimonial = (index) => {
      const t = testimonials[index];
      if (!t || !nameEl || !reviewEl) return;

      // Fade out
      quoteBox.style.opacity = '0';
      quoteBox.style.transform = 'translateY(6px)';

      setTimeout(() => {
        nameEl.textContent   = t.name;
        reviewEl.textContent = t.review;
        if (starsEl) {
          starsEl.innerHTML = Array(t.stars).fill('<i class="fa-solid fa-star"></i>').join('');
        }
        // Fade in
        quoteBox.style.opacity   = '1';
        quoteBox.style.transform = 'translateY(0)';
      }, 220);
    };

    // Smooth transition style
    quoteBox.style.transition = 'opacity 0.22s ease, transform 0.22s ease';

    // Bind to .left-arrows buttons (prev/next pair)
    const leftArrowsWrap = document.querySelector('.left-arrows');
    if (leftArrowsWrap) {
      const [prevBtn, nextBtn] = leftArrowsWrap.querySelectorAll('.arrow-btn');
      if (prevBtn) prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(currentTestimonial);
      });
      if (nextBtn) nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonial(currentTestimonial);
      });
    }

    // Bind to video-nav-arrows (right side)
    const videoNavArrows = document.querySelector('.video-nav-arrows');
    if (videoNavArrows) {
      const [vPrev, vNext] = videoNavArrows.querySelectorAll('i');
      if (vPrev) vPrev.style.cursor = 'pointer';
      if (vNext) vNext.style.cursor = 'pointer';
      if (vPrev) vPrev.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(currentTestimonial);
      });
      if (vNext) vNext.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonial(currentTestimonial);
      });
    }

    // Auto-play every 5s
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial(currentTestimonial);
    }, 5000);
  }


  // ─────────────────────────────────────────────────────────────
  // 3. UNIVERSITY / GENERIC  2-card slider
  //    .uni-slider-arrows  →  .uni-cards-wrapper
  // ─────────────────────────────────────────────────────────────
  const uniArrows = document.querySelector('.uni-slider-arrows');
  const uniWrapper = document.querySelector('.uni-cards-wrapper');
  if (uniArrows && uniWrapper) {
    const [uPrev, uNext] = uniArrows.querySelectorAll('.arrow-btn');
    const scrollAmt = 260;
    if (uPrev) uPrev.addEventListener('click', () => uniWrapper.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
    if (uNext) uNext.addEventListener('click', () => uniWrapper.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
  }


  // ─────────────────────────────────────────────────────────────
  // 4. PLACEMENT PAGE — placed companies logos carousel
  //    .slider-btn.prev / .slider-btn.next  →  .logo-track
  // ─────────────────────────────────────────────────────────────
  const logoTrack = document.querySelector('.logo-track');
  if (logoTrack) {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const scrollAmt = 200;
    if (prevBtn) prevBtn.addEventListener('click', () => logoTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => logoTrack.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
  }


  // ─────────────────────────────────────────────────────────────
  // 5. PLACEMENT PAGE — companies carousel (.nav-arrow-btn)
  //    .carousel-navigation  →  first scrollable sibling
  // ─────────────────────────────────────────────────────────────
  const carouselNav = document.querySelector('.carousel-navigation');
  if (carouselNav) {
    const [cPrev, cNext] = carouselNav.querySelectorAll('.nav-arrow-btn');
    // Find closest scrollable track above this element
    const carouselTrack =
      document.querySelector('.companies-carousel-track') ||
      document.querySelector('.placement-carousel') ||
      carouselNav.previousElementSibling;

    if (carouselTrack) {
      const scrollAmt = 280;
      if (cPrev) cPrev.addEventListener('click', () => carouselTrack.scrollBy({ left: -scrollAmt, behavior: 'smooth' }));
      if (cNext) cNext.addEventListener('click', () => carouselTrack.scrollBy({ left:  scrollAmt, behavior: 'smooth' }));
    }
  }


  // ─────────────────────────────────────────────────────────────
  // 6. SKILL PAGE — testimonial track slider
  //    .testimonial-slider-wrapper arrows  →  #testimonialTrack
  // ─────────────────────────────────────────────────────────────
  const testimonialTrack = document.getElementById('testimonialTrack');
  if (testimonialTrack) {
    const wrapper = document.querySelector('.testimonial-slider-wrapper');
    if (wrapper) {
      const tPrev = wrapper.querySelector('.t-prev') || wrapper.querySelector('[data-dir="prev"]');
      const tNext = wrapper.querySelector('.t-next') || wrapper.querySelector('[data-dir="next"]');
      const cardWidth = () => {
        const card = testimonialTrack.querySelector('.testimonial-card');
        return card ? card.offsetWidth + 24 : 320; // 24 = gap
      };
      if (tPrev) tPrev.addEventListener('click', () => testimonialTrack.scrollBy({ left: -cardWidth(), behavior: 'smooth' }));
      if (tNext) tNext.addEventListener('click', () => testimonialTrack.scrollBy({ left:  cardWidth(), behavior: 'smooth' }));
    }
  }


  // ─────────────────────────────────────────────────────────────
  // 7. GENERIC CARD CAROUSELS — any .card-track with
  //    sibling [data-dir] or .prev-btn / .next-btn buttons
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-slider]').forEach(sliderEl => {
    const track   = sliderEl.querySelector('[data-track]');
    const prevBtn = sliderEl.querySelector('[data-dir="prev"]');
    const nextBtn = sliderEl.querySelector('[data-dir="next"]');
    if (!track || !prevBtn || !nextBtn) return;

    const getCardWidth = () => {
      const card = track.firstElementChild;
      return card ? card.offsetWidth + parseInt(getComputedStyle(track).gap || 0) : 300;
    };

    prevBtn.addEventListener('click', () => track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left:  getCardWidth(), behavior: 'smooth' }));
  });


  // ─────────────────────────────────────────────────────────────
  // 8. SCROLL-BASED ARROW DISABLE — hide prev arrow at start,
  //    next arrow at end for any scrollable track
  // ─────────────────────────────────────────────────────────────
  const updateArrowState = (track, prevBtn, nextBtn) => {
    if (!track || !prevBtn || !nextBtn) return;
    const update = () => {
      prevBtn.style.opacity = track.scrollLeft <= 5 ? '0.35' : '1';
      nextBtn.style.opacity = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5 ? '0.35' : '1';
    };
    track.addEventListener('scroll', update, { passive: true });
    update();
  };

  if (partnersTrack) {
    const leftArrow  = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    updateArrowState(partnersTrack, leftArrow, rightArrow);
  }
  if (logoTrack) {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    updateArrowState(logoTrack, prevBtn, nextBtn);
  }

});
