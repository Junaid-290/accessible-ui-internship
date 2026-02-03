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

})();
