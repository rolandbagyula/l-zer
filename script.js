// Enhanced functionality with language switching and loading animations
document.addEventListener('DOMContentLoaded', function() {
  // Loading animation
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  // Hide loading after page loads
  setTimeout(() => {
    if (loadingOverlay) {
      loadingOverlay.classList.add('hidden');
    }
  }, 800);

  // Language switching functionality
  let currentLanguage = 'en';
  const langButtons = document.querySelectorAll('.lang-btn');
  
  function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en][data-hu]');
    elements.forEach(element => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = text;
        } else if (element.tagName === 'OPTION') {
          element.textContent = text;
        } else {
          element.innerHTML = text;
        }
      }
    });
    
    // Update file input label
    const fileLabel = document.querySelector('.file-input-label');
    if (fileLabel && !fileLabel.textContent.includes('✓')) {
      fileLabel.textContent = lang === 'en' ? '📁 Choose CAD file or drag & drop' : '📁 Válassz CAD fájlt vagy húzd ide';
    }
    
    // Update active language button
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
  }
  
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-language') || 'en';
  updateLanguage(savedLang);
  
  // Language button event listeners
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      updateLanguage(button.dataset.lang);
    });
  });

  // File upload functionality
  const uploadForm = document.querySelector(".upload-box");
  const fileInput = document.getElementById("fileUpload");
  const fileLabel = document.querySelector(".file-input-label");
  
  if (uploadForm && fileInput && fileLabel) {
    // Handle form submission
    uploadForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // MB
        const successMsg = currentLanguage === 'en' 
          ? `✅ File uploaded successfully!\n\nFile: ${file.name}\nSize: ${fileSize} MB\nType: ${file.type || 'Unknown'}`
          : `✅ Fájl sikeresen feltöltve!\n\nFájl: ${file.name}\nMéret: ${fileSize} MB\nTípus: ${file.type || 'Ismeretlen'}`;
        alert(successMsg);
      } else {
        const errorMsg = currentLanguage === 'en' 
          ? "⚠️ Please select a CAD file first."
          : "⚠️ Kérlek, először válassz egy CAD fájlt.";
        alert(errorMsg);
      }
    });

    // Update label when file is selected
    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        const fileName = this.files[0].name;
        fileLabel.textContent = `✓ ${fileName}`;
        fileLabel.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        fileLabel.style.background = 'rgba(255, 255, 255, 0.15)';
      } else {
        const defaultText = currentLanguage === 'en' 
          ? '📁 Choose CAD file or drag & drop'
          : '📁 Válassz CAD fájlt vagy húzd ide';
        fileLabel.textContent = defaultText;
        fileLabel.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        fileLabel.style.background = 'rgba(255, 255, 255, 0.1)';
      }
    });

    // Drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      fileLabel.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      fileLabel.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileLabel.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
      fileLabel.style.borderColor = '#f44336';
      fileLabel.style.background = 'rgba(244, 67, 54, 0.1)';
    }

    function unhighlight() {
      fileLabel.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      fileLabel.style.background = 'rgba(255, 255, 255, 0.1)';
    }

    fileLabel.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      
      if (files.length > 0) {
        fileInput.files = files;
        const event = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(event);
      }
    }
  }

  // Mobile menu functionality - simplified and reliable
  const mobileMenu = document.querySelector('.mobile-menu');
  const navbar = document.querySelector('.navbar nav');
  
  if (mobileMenu && navbar) {
    // Toggle menu on click
    mobileMenu.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = navbar.classList.contains('mobile-open');
      
      if (isOpen) {
        navbar.classList.remove('mobile-open');
        this.classList.remove('active');
      } else {
        navbar.classList.add('mobile-open');
        this.classList.add('active');
      }
    });
    
    // Close menu when clicking on navigation links
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('mobile-open');
        mobileMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navbar.contains(event.target);
      const isClickOnMenu = mobileMenu.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnMenu) {
        navbar.classList.remove('mobile-open');
        mobileMenu.classList.remove('active');
      }
    });
    
    // Close menu on window resize to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navbar.classList.remove('mobile-open');
        mobileMenu.classList.remove('active');
      }
    });
  }

  // Contact form functionality
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      
      // Show loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Hide loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Show success message
        const successMsg = currentLanguage === 'en'
          ? '✅ Message sent successfully! We\'ll get back to you soon.'
          : '✅ Üzenet sikeresen elküldve! Hamarosan válaszolunk.';
        alert(successMsg);
        
        // Reset form
        this.reset();
      }, 2000);
    });
  }

  // Smooth scrolling for anchor links and logo click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      // If clicking logo or #top, scroll to top
      if (href === '#top' || this.classList.contains('logo')) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add page transition effects
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      // Show loading overlay
      if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
      }
      
      // Navigate after short delay
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});
