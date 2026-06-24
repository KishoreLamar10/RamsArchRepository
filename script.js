// script.js

// 1. Navigation Scroll Spy (Active State Highlighting)
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');
  
  if (sections.length === 0 || navLinks.length === 0) return;

  function updateActiveLink() {
    let currentSection = 'portfolio'; // Default fallback
    let scrollPos = window.scrollY + 150; // offset threshold for active header transition

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentSection = sec.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Initial run
}

// 2. Projects Logic (Load Cards and Expansions)
function initProjects() {
  const gridEl = document.getElementById('projects-grid');
  const overlayEl = document.getElementById('expanded-project-overlay');
  
  if (!gridEl || !overlayEl) return;
  
  // Render Project Cards dynamically
  PROJECTS_DATA.forEach((proj) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = proj.id;
    
    // First page as card background
    const bgImgPath = `./Portfolio/${proj.pages[0]}`;
    
    card.innerHTML = `
      <div class="project-card-image-wrap">
        <img class="project-card-img" src="${bgImgPath}" alt="${proj.title}" loading="lazy" />
      </div>
      <div class="project-card-content">
        <span class="project-card-idx">PROJECT ${proj.index}</span>
        <h3>${proj.title}</h3>
        <span class="project-card-cat">${proj.category}</span>
      </div>
    `;
    
    card.addEventListener('click', () => openProject(proj));
    gridEl.appendChild(card);
  });

  // Expand Project details overlay
  function openProject(proj) {
    document.body.style.overflow = 'hidden';
    
    const leftPanel = overlayEl.querySelector('.ep-left-panel');
    const rightPanel = overlayEl.querySelector('.ep-right-panel');
    
    // Set metadata on left panel
    leftPanel.innerHTML = `
      <button class="ep-close-btn" id="close-overlay-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Grid
      </button>
      <div class="ep-meta">
        <span class="ep-index">PROJECT ${proj.index}</span>
        <h2 class="ep-title">${proj.title}</h2>
        <span class="ep-category">${proj.category}</span>
      </div>
      <div class="ep-meta-list">
        <div class="ep-meta-item"><span class="lbl">Location</span><span class="val">${proj.location || 'N/A'}</span></div>
        ${proj.university ? `<div class="ep-meta-item"><span class="lbl">Institution</span><span class="val">${proj.university}</span></div>` : ''}
        <div class="ep-meta-item"><span class="lbl">Role</span><span class="val">${proj.role || 'N/A'}</span></div>
        <div class="ep-meta-item"><span class="lbl">Software</span><span class="val">${proj.software || 'N/A'}</span></div>
      </div>
      <p class="ep-description">${proj.description}</p>
    `;

    // Render large scrollable sheet images on right panel
    rightPanel.innerHTML = `
      <div class="section-header" style="width:100%; max-width: 1000px; margin-bottom: 24px;">
        <span class="section-num">DRAWING SHEETS</span>
        <h3 class="section-title">Design <span>Drawings</span> &amp; Renders</h3>
      </div>
      ${proj.pages.map((page, idx) => `
        <div class="ep-sheet-container" data-img-src="./Portfolio/${page}">
          <img class="ep-sheet-img" src="./Portfolio/${page}" alt="Drawing sheet ${idx+1}" loading="lazy" />
          <div class="ep-sheet-overlay">SHEET ${proj.index}.${String(idx).padStart(2, '0')}</div>
        </div>
      `).join('')}
    `;

    overlayEl.classList.add('active');

    // Add close button listeners
    leftPanel.querySelector('#close-overlay-btn').addEventListener('click', closeProject);
    
    // Add lightbox click triggers to each sheet container
    rightPanel.querySelectorAll('.ep-sheet-container').forEach(sheet => {
      sheet.addEventListener('click', () => {
        const imgSrc = sheet.dataset.imgSrc;
        openLightbox(imgSrc);
      });
    });
  }

  function closeProject() {
    overlayEl.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// 3. Fullscreen Lightbox Pan/Zoom Logic
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbClose = lightbox.querySelector('.lightbox-close');
  
  if (!lightbox || !lbImg) return;
  
  let scale = 1;
  let pointX = 0;
  let pointY = 0;
  let startX = 0;
  let startY = 0;
  let isPanning = false;
  
  window.openLightbox = function(src) {
    lbImg.src = src;
    scale = 1;
    pointX = 0;
    pointY = 0;
    updateTransform();
    lightbox.classList.add('active');
  };
  
  function closeLightbox() {
    lightbox.classList.remove('active');
  }
  
  lbClose.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  // Apply transformations
  function updateTransform() {
    lbImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
  }

  // Mouse wheel zoom
  lightbox.addEventListener('wheel', (e) => {
    e.preventDefault();
    const xs = (e.clientX - pointX) / scale;
    const ys = (e.clientY - pointY) / scale;
    
    const delta = -e.deltaY;
    if (delta > 0) {
      scale = Math.min(scale * 1.15, 6);
    } else {
      scale = Math.max(scale / 1.15, 0.75);
    }
    
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    updateTransform();
  }, { passive: false });

  // Pan interactions
  lbImg.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startX = e.clientX - pointX;
    startY = e.clientY - pointY;
    isPanning = true;
    lbImg.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    pointX = e.clientX - startX;
    pointY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener('mouseup', () => {
    isPanning = false;
    lbImg.style.cursor = 'grab';
  });

  // Double click reset
  lbImg.addEventListener('dblclick', () => {
    scale = 1;
    pointX = 0;
    pointY = 0;
    updateTransform();
  });
}

// 4. Initializer
document.addEventListener('DOMContentLoaded', () => {
  initNavScrollSpy();
  initProjects();
  initLightbox();
});
