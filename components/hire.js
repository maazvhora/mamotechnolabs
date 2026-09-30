//hiring partners
const partnersTrack = document.getElementById('partnersTrack');
let partnerScrollAmount = 0;
const cardScrollWidth = 235; // logo width (190px) + gap (45px)

function slidePartnersRight() {
  const maxScroll = partnersTrack.scrollWidth - partnersTrack.clientWidth;
  partnerScrollAmount += cardScrollWidth;
  if (partnerScrollAmount > maxScroll) {
    partnerScrollAmount = maxScroll;
  }
  partnersTrack.scrollTo({
    left: partnerScrollAmount,
    behavior: 'smooth'
  });
}

function slidePartnersLeft() {
  partnerScrollAmount -= cardScrollWidth;
  if (partnerScrollAmount < 0) {
    partnerScrollAmount = 0;
  }
  partnersTrack.scrollTo({
    left: partnerScrollAmount,
    behavior: 'smooth'
  });
}

// infrastructure-section
const infraTrack = document.getElementById('infraTrack');
let infraScrollAmount = 0;
const scrollCardWidth = 305; // card width (280px) + gap (25px)

function slideInfraRight() {
  const maxScroll = infraTrack.scrollWidth - infraTrack.clientWidth;
  infraScrollAmount += scrollCardWidth;
  if (infraScrollAmount > maxScroll) {
    infraScrollAmount = maxScroll;
  }
  infraTrack.style.transform = `translateX(-${infraScrollAmount}px)`;
}

function slideInfraLeft() {
  infraScrollAmount -= scrollCardWidth;
  if (infraScrollAmount < 0) {
    infraScrollAmount = 0;
  }
  infraTrack.style.transform = `translateX(-${infraScrollAmount}px)`;
}

//faq part
const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            questionBtn.addEventListener('click', () => {
                // Toggle active state
                const isOpen = item.classList.contains('active');
                
                // Close all items (optional: remove if you want multiple open at once)
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.arrow-icon').className = "fa-solid fa-chevron-down arrow-icon";
                });

                // If it wasn't open, open it
                if (!isOpen) {
                    item.classList.add('active');
                    item.querySelector('.arrow-icon').className = "fa-solid fa-chevron-up arrow-icon";
                }
            });
        });