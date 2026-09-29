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