// custom cursor
document.addEventListener('DOMContentLoaded', function () {
  const customcursor = document.querySelector('.custom-cursor');
  let iscursorhidden = false;
  let mousex = 0;
  let mousey = 0;
  let cursorx = 0;
  let cursory = 0;
  const easingfactor = 0.1;

  document.addEventListener('mousemove', function (e) {
    mousex = e.clientX;
    mousey = e.clientY;
  });

  function updateCursor() {
    const dx = mousex - cursorx;
    const dy = mousey - cursory;

    cursorx += dx * easingfactor;
    cursory += dy * easingfactor;

    customcursor.style.left = cursorx + 'px';
    customcursor.style.top = cursory + 'px';

    requestAnimationFrame(updateCursor);
  }

  document.addEventListener('mouseenter', function () {
    customcursor.style.opacity = 1;
    updateCursor();
  });

  document.addEventListener('mouseleave', function () {
    if (!iscursorhidden) {
      customcursor.style.opacity = 0;
    }
  });

  document.addEventListener('mousedown', function () {
    customcursor.style.transform = 'scale(0.5)';
  });

  document.addEventListener('mouseup', function () {
    customcursor.style.transform = 'scale(1)';
    iscursorhidden = false;
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    customcursor.style.opacity = 0;
    iscursorhidden = true;
  });
});

// fade in html
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

// fade out redirect
function fadeoutredirect(url) {
  document.body.style.opacity = '0';
  setTimeout(function() {
    window.location.href = url;
  }, 1000);
}