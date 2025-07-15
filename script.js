const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to this button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    workItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filterValue === 'all' || filterValue === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});



const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
