// =======================================
// The New Generation Website (Premium)
// By Elijah Ombogo Ondieki
// =======================================

// Reading Progress Bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.width = '0%';
progressBar.style.background = '#38bdf8';
progressBar.style.boxShadow = '0 0 16px #38bdf8';
progressBar.style.zIndex = '2500';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / scrollHeight) * 100 + '%';
});

// Dark / Light Mode Toggle
const themeButton = document.createElement('button');
themeButton.textContent = '🌙';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '20px';
themeButton.style.left = '20px';
themeButton.style.width = '54px';
themeButton.style.height = '54px';
themeButton.style.borderRadius = '50%';
themeButton.style.border = 'none';
themeButton.style.cursor = 'pointer';
themeButton.style.background = '#0ea5e9';
themeButton.style.color = '#03111f';
themeButton.style.boxShadow = '0 0 18px #0ea5e9';
themeButton.style.zIndex = '1200';
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeButton.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Back To Top Button
const topButton = document.createElement('button');
topButton.textContent = '↑';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.width = '54px';
topButton.style.height = '54px';
topButton.style.borderRadius = '50%';
topButton.style.border = 'none';
topButton.style.cursor = 'pointer';
topButton.style.background = '#0ea5e9';
topButton.style.color = '#03111f';
topButton.style.boxShadow = '0 0 18px #0ea5e9';
topButton.style.display = 'none';
topButton.style.zIndex = '1200';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Loading Screen + Fade Animations
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 1800);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section, .chapter-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });
});

console.log('The New Generation Website');
console.log('Author: Elijah Ombogo Ondieki');
console.log('Premium Neon Edition Loaded Successfully');
