// ====================== Fade‑in on Scroll ======================
// Use IntersectionObserver to reveal elements with the .fade-in class
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
  // ====================== Typed.js Intro ======================
  // Typewriter effect in the hero section
  if (window.Typed) {
    new Typed("#typed-text", {
      strings: [
        "a BSCS Student",
        "a Passionate Developer",
        "a Web Enthusiast",
        "a Problem Solver"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true
    });
  }
  
  // ====================== Theme Toggle ======================
  // Toggle light/dark mode and persist choice in localStorage
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.innerHTML = document.body.classList.contains('light')
      ? `<i class="fas fa-sun"></i>`  // Sun icon for light
      : `<i class="fas fa-moon"></i>`; // Moon icon for dark
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
  // Apply saved theme on load
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
  }
  
  // ====================== Back to Top Button ======================
  // Show button when scrolled down, smooth scroll to top on click
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // ====================== Animate Skill Bars ======================
  // On DOM load, read each .skill-card's data-progress and animate its bar
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card').forEach(card => {
      const pct = card.getAttribute('data-progress'); // e.g. "80"
      const bar = card.querySelector('.progress-bar div'); // inner bar
      setTimeout(() => bar.style.width = pct + '%', 300);
    });
  });
  
  // ====================== Projects Data & Filtering ======================
  // Array of project objects with title, category, description, link
  const projects = [
    { title: "Multiplayer Chess Game", category: "cpp", description: "Socket Programming in Networks", link: "#" },
    { title: "Medicine Finder",        category: "web", description: "Web App to Find Medicines",     link: "#" },
    { title: "Bingo Game",             category: "cpp", description: "Console-Based Bingo in C++",     link: "#" },
    { title: "E-Commerce Website",     category: "csharp", description: "C# & Oracle Online Store",     link: "#" },
    { title: "Console Facebook",       category: "cpp", description: "OOP Facebook Clone in C++",      link: "#" },
    { title: "GitHub Simulation",      category: "cpp", description: "DSA Project Simulating GitHub", link: "#" }
  ];
  
  const projectList = document.getElementById('projectList');
  const filterBtns = document.querySelectorAll('.filters button');
  
  // Renders project cards filtered by category
  function renderProjects(filter = 'all') {
    projectList.innerHTML = ''; // clear existing
    projects
      .filter(p => filter === 'all' || p.category === filter)
      .forEach(p => {
        const li = document.createElement('li');
        li.className = 'project-card';
        li.innerHTML = `
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.link}" class="btn">View</a>
        `;
        projectList.appendChild(li);
      });
  }
  
  // Setup filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
  
  // Initial render = show all
  renderProjects();
  