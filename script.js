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


