/* Accessible FAQ accordion
	 - Toggles panels and updates ARIA attributes
	 - Keyboard navigation: ArrowUp/ArrowDown/Home/End
	 - Respects prefers-reduced-motion
*/

(function () {
	'use strict';

	// Select all FAQ toggle buttons
	const buttons = Array.from(document.querySelectorAll('.faq__button'));
	if (!buttons.length) return; // safe no-op if markup not present

	// Utility: determine if user prefers reduced motion
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// Open/close a panel tied to a button
	function toggle(button, expand) {
		const panelId = button.getAttribute('aria-controls');
		const panel = document.getElementById(panelId);
		if (!panel) return;

		const willExpand = typeof expand === 'boolean' ? expand : !(button.getAttribute('aria-expanded') === 'true');

		button.setAttribute('aria-expanded', String(willExpand));
		panel.setAttribute('aria-hidden', String(!willExpand));
		if (willExpand) {
			panel.hidden = false;
			// animate by setting explicit maxHeight (allow transition in CSS)
			if (!reduceMotion) panel.style.maxHeight = panel.scrollHeight + 'px';
			else panel.style.maxHeight = 'none';
		} else {
			// collapse
			if (!reduceMotion) {
				// set maxHeight to 0 to animate
				panel.style.maxHeight = panel.scrollHeight + 'px';
				// force layout then collapse
				// eslint-disable-next-line @microsoft/sdl/no-document-read
				void panel.offsetHeight;
				panel.style.maxHeight = '0px';
				// when transition ends, hide the panel
				const onTransitionEnd = function () {
					panel.hidden = true;
					panel.removeEventListener('transitionend', onTransitionEnd);
				};
				panel.addEventListener('transitionend', onTransitionEnd);
			} else {
				panel.style.maxHeight = '0px';
				panel.hidden = true;
			}
		}
	}

	// Focus navigation helpers
	function focusNext(currentIndex) {
		const next = (currentIndex + 1) % buttons.length;
		buttons[next].focus();
	}
	function focusPrev(currentIndex) {
		const prev = (currentIndex - 1 + buttons.length) % buttons.length;
		buttons[prev].focus();
	}

	// Attach event handlers
	buttons.forEach((btn, idx) => {
		// Initialize panel ARIA state based on button
		const panelId = btn.getAttribute('aria-controls');
		const panel = document.getElementById(panelId);
		if (panel) {
			panel.setAttribute('aria-hidden', String(!(btn.getAttribute('aria-expanded') === 'true')));
			// ensure collapsed panels are hidden
			if (btn.getAttribute('aria-expanded') !== 'true') panel.hidden = true;
			else panel.hidden = false;
		}

		// Click toggles
		btn.addEventListener('click', (e) => {
			toggle(btn);
		});

		// Keyboard support
		btn.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault();
					focusNext(idx);
					break;
				case 'ArrowUp':
					e.preventDefault();
					focusPrev(idx);
					break;
				case 'Home':
					e.preventDefault();
					buttons[0].focus();
					break;
				case 'End':
					e.preventDefault();
					buttons[buttons.length - 1].focus();
					break;
				default:
					break;
			}
		});
	});

	// Expose a small API for tests or future enhancements
	window.__FAQ = { toggle };

})();

