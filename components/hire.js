// hiring partners slider
const partnersTrack = document.getElementById('partnersTrack');
const cardScrollWidth = 235; // logo width (190px) + gap (45px)

function slidePartnersRight() {
  if (!partnersTrack) return;
  const maxScroll = Math.max(0, partnersTrack.scrollWidth - partnersTrack.clientWidth);
  if (maxScroll <= 0) return;
  if (partnersTrack.scrollLeft >= maxScroll - 10) {
    partnersTrack.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    partnersTrack.scrollBy({ left: cardScrollWidth, behavior: 'smooth' });
  }
}

function slidePartnersLeft() {
  if (!partnersTrack) return;
  const maxScroll = Math.max(0, partnersTrack.scrollWidth - partnersTrack.clientWidth);
  if (maxScroll <= 0) return;
  if (partnersTrack.scrollLeft <= 10) {
    partnersTrack.scrollTo({ left: maxScroll, behavior: 'smooth' });
  } else {
    partnersTrack.scrollBy({ left: -cardScrollWidth, behavior: 'smooth' });
  }
}

// infrastructure-section
const infraTrack = document.getElementById('infraTrack');
let infraScrollAmount = 0;
const scrollCardWidth = 305; // card width (280px) + gap (25px)

function slideInfraRight() {
  if (!infraTrack) return;
  const maxScroll = Math.max(0, infraTrack.scrollWidth - infraTrack.clientWidth);
  if (maxScroll <= 0) return;
  if (infraScrollAmount >= maxScroll - 5) {
    infraScrollAmount = 0; // loop back to first
  } else {
    infraScrollAmount = Math.min(infraScrollAmount + scrollCardWidth, maxScroll);
  }
  infraTrack.style.transform = `translateX(-${infraScrollAmount}px)`;
}

function slideInfraLeft() {
  if (!infraTrack) return;
  const maxScroll = Math.max(0, infraTrack.scrollWidth - infraTrack.clientWidth);
  if (maxScroll <= 0) return;
  if (infraScrollAmount <= 5) {
    infraScrollAmount = maxScroll; // loop to last
  } else {
    infraScrollAmount = Math.max(0, infraScrollAmount - scrollCardWidth);
  }
  infraTrack.style.transform = `translateX(-${infraScrollAmount}px)`;
}

// faq part
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionBtn = item.querySelector('.faq-question');
  if (questionBtn) {
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const icon = i.querySelector('.arrow-icon');
        if (icon) icon.className = "fa-solid fa-chevron-down arrow-icon";
      });
      if (!isOpen) {
        item.classList.add('active');
        const icon = item.querySelector('.arrow-icon');
        if (icon) icon.className = "fa-solid fa-chevron-up arrow-icon";
      }
    });
  }
});