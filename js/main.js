/* ============================================
   ECHOSEE MAIN JAVASCRIPT
   FAQ Accordion + Contact Form
   ============================================ */

(function() {
    'use strict';

    /* --- FAQ Accordion --- */
    const faqButtons = document.querySelectorAll('.faq__button');
    if (faqButtons.length) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function expandPanel(button, panel) {
            button.setAttribute('aria-expanded', 'true');
            panel.setAttribute('aria-hidden', 'false');
            panel.hidden = false;
            if (!reduceMotion) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.addEventListener('transitionend', function onEnd() {
                    panel.style.maxHeight = 'none';
                    panel.removeEventListener('transitionend', onEnd);
                }, { once: true });
            }
        }

        function collapsePanel(button, panel) {
            button.setAttribute('aria-expanded', 'false');
            panel.setAttribute('aria-hidden', 'true');
            if (!reduceMotion) {
                const height = panel.scrollHeight;
                panel.style.maxHeight = height + 'px';
                void panel.offsetHeight;
                panel.style.maxHeight = '0px';
                panel.addEventListener('transitionend', function onEnd() {
                    panel.hidden = true;
                    panel.style.maxHeight = '';
                    panel.removeEventListener('transitionend', onEnd);
                }, { once: true });
            } else {
                panel.style.maxHeight = '0px';
                panel.hidden = true;
            }
        }

        function togglePanel(button) {
            const panelId = button.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            if (!panel) return;

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Close other panels
            if (!isExpanded) {
                faqButtons.forEach(btn => {
                    if (btn !== button && btn.getAttribute('aria-expanded') === 'true') {
                        const otherPanel = document.getElementById(btn.getAttribute('aria-controls'));
                        if (otherPanel) collapsePanel(btn, otherPanel);
                    }
                });
            }

            // Toggle current panel
            isExpanded ? collapsePanel(button, panel) : expandPanel(button, panel);
        }

        faqButtons.forEach((button, index) => {
            const panel = document.getElementById(button.getAttribute('aria-controls'));
            if (panel) {
                panel.setAttribute('aria-hidden', button.getAttribute('aria-expanded') !== 'true');
                panel.hidden = button.getAttribute('aria-expanded') !== 'true';
            }

            button.addEventListener('click', () => togglePanel(button));

            button.addEventListener('keydown', e => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    faqButtons[(index + 1) % faqButtons.length].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    faqButtons[(index - 1 + faqButtons.length) % faqButtons.length].focus();
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    faqButtons[0].focus();
                } else if (e.key === 'End') {
                    e.preventDefault();
                    faqButtons[faqButtons.length - 1].focus();
                } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    togglePanel(button);
                }
            });
        });
    }

    /* --- Contact Form --- */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('.contact__submit');
        const successMessage = document.getElementById('form-success');
        const announcer = document.getElementById('a11y-announcer');

        const fields = {
            name: {
                el: contactForm.querySelector('#name'),
                err: contactForm.querySelector('#name-error'),
                msg: 'Full Name required'
            },
            email: {
                el: contactForm.querySelector('#email'),
                err: contactForm.querySelector('#email-error'),
                pat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                msg: 'Valid email required'
            },
            subject: {
                el: contactForm.querySelector('#subject'),
                err: contactForm.querySelector('#subject-error'),
                msg: 'Subject required'
            },
            message: {
                el: contactForm.querySelector('#message'),
                err: contactForm.querySelector('#message-error'),
                min: 10,
                msg: 'Message required (10+ chars)'
            }
        };

        function updateLabelState(input) {
            input.classList.toggle('has-value', input.value.trim() !== '');
        }

        function validateField(field) {
            const input = field.el;
            let isValid = true;
            let errorText = '';

            if (field.required && !input.value.trim()) {
                isValid = false;
                errorText = field.msg;
            } else if (field.pat && !field.pat.test(input.value.trim())) {
                isValid = false;
                errorText = field.msg;
            } else if (field.min && input.value.trim().length < field.min) {
                isValid = false;
                errorText = field.msg;
            }

            input.setAttribute('aria-invalid', String(!isValid));
            field.err.textContent = errorText;
            return isValid;
        }

        // Initialize label states and event listeners
        Object.values(fields).forEach(field => {
            field.el.addEventListener('input', () => {
                updateLabelState(field.el);
                if (field.el.getAttribute('aria-invalid') === 'true') {
                    validateField(field);
                }
            });
            field.el.addEventListener('change', () => updateLabelState(field.el));
            updateLabelState(field.el);
        });

        // Form submission
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();

            let firstInvalid = null;
            Object.values(fields).forEach(field => {
                if (!validateField(field) && !firstInvalid) {
                    firstInvalid = field.el;
                }
            });

            if (firstInvalid) {
                firstInvalid.focus();
                if (announcer) announcer.textContent = 'Please fix form errors';
                return;
            }

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success
            contactForm.hidden = true;
            successMessage.hidden = false;
            if (announcer) announcer.textContent = 'Message sent successfully!';
        });
    }

    /* --- Partnership Page Scripts --- */
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn--prev');
    const nextBtn = document.querySelector('.carousel-btn--next');
    
    if (carouselContainer && carouselTrack && prevBtn && nextBtn) {
        const itemWidth = 180; // Width of carousel item + gap
        let autoScrollInterval;
        
        function getScrollPosition() {
            return parseInt(carouselTrack.style.scrollLeft) || 0;
        }
        
        function scrollByAmount(amount) {
            carouselTrack.style.scrollBehavior = 'smooth';
            carouselTrack.scrollLeft += amount;
            
            // Handle wrap-around for continuous feel
            const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
            if (carouselTrack.scrollLeft >= maxScroll) {
                carouselTrack.scrollLeft = 0;
            } else if (carouselTrack.scrollLeft <= 0) {
                carouselTrack.scrollLeft = maxScroll;
            }
        }
        
        function startAutoScroll() {
            // Don't use auto-scroll, let user control it
        }
        
        function stopAutoScroll() {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
                autoScrollInterval = null;
            }
        }
        
        prevBtn.addEventListener('click', () => {
            scrollByAmount(-itemWidth);
        });
        
        nextBtn.addEventListener('click', () => {
            scrollByAmount(itemWidth);
        });
        
        // Optional: Keyboard navigation for carousel
        carouselTrack.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                scrollByAmount(-itemWidth);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                scrollByAmount(itemWidth);
            }
        });
    }
    
    // Stat counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const animate = () => {
                        current += step;
                        if (current < target) {
                            el.textContent = Math.floor(current);
                            requestAnimationFrame(animate);
                        } else {
                            el.textContent = target;
                        }
                    };
                    
                    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    if (reduceMotion) {
                        el.textContent = target;
                    } else {
                        animate();
                    }
                    
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(el => observer.observe(el));
    }

})();
