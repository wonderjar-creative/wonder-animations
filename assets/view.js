/**
 * Wonder Animations - front-end runtime.
 *
 * Observes elements carrying the `animate__animated` class and toggles the
 * `in-view` class as they enter/leave the viewport. When `data-wa-reset-view`
 * is set, the animation is reset on exit so it replays on re-entry.
 *
 * This file is intentionally dependency-free (no @wordpress/* packages) so the
 * front end never loads the block editor data layer. The editor UI lives in
 * build/index.js and is enqueued only in the editor.
 */
(function () {
  var observeAnimationsInViewport = function () {
    var elements = document.querySelectorAll('.animate__animated');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var element = entry.target;

        if (entry.isIntersecting) {
          // Element is in the viewport
          element.classList.add('in-view');
        } else {
          // Element is out of the viewport
          var resetView = element.getAttribute('data-wa-reset-view');
          if (resetView) {
            // Get the current animation name from the element's computed style
            var thisAnimName = window
              .getComputedStyle(element)
              .getPropertyValue('animation-name');

            // Stash it, clear it, then restore it so the animation replays
            element.setAttribute('data-animation-name', thisAnimName);
            element.style.animationName = 'none';

            setTimeout(function () {
              element.style.animationName = '';
            }, 50);

            setTimeout(function () {
              element.style.animationName = element.getAttribute('data-animation-name');
            }, 100);

            element.classList.remove('in-view');
          } else {
            element.classList.remove('in-view');
          }
        }
      });
    });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  };

  // The script loads in the footer, but guard against being added after the
  // DOMContentLoaded event has already fired.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAnimationsInViewport);
  } else {
    observeAnimationsInViewport();
  }
})();
