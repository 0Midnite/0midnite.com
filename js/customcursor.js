document.addEventListener('DOMContentLoaded', function () {
  const customCursor = document.querySelector('.custom-cursor');
  let isCursorHidden = false;
  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    
    customCursor.style.left = x + 'px';
    customCursor.style.top = y + 'px';
  });
  
  document.addEventListener('mouseenter', function () {
    customCursor.style.opacity = 1;
  });
  
  document.addEventListener('mouseleave', function () {
    if (!isCursorHidden) {
      customCursor.style.opacity = 0;
    }
  });
  
  document.addEventListener('mousedown', function () {
    customCursor.style.transform = 'scale(0.5)';
  });
  
  document.addEventListener('mouseup', function () {
    customCursor.style.transform = 'scale(1)';
    isCursorHidden = false;
  });
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    customCursor.style.opacity = 0;
    isCursorHidden = true;
  });
});