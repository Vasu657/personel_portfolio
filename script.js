document.addEventListener('DOMContentLoaded', function() {
  // Navigation Menu
  const navLinks = document.querySelectorAll('.nav-link');
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-links');
 
  if (navLinks && burger && navList) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('show');
      });
    });
 
    burger.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }
 
  // Theme Toggle
  const themeSwitch = document.querySelector('.theme-switch');
  const body = document.querySelector('body');
 
  if (themeSwitch && body) {
    themeSwitch.addEventListener('change', () => {
      body.classList.toggle('light-theme');
    });
  }
 
  // Scroll Indicator Animation
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollText = document.querySelector('.scroll-text');
  const scrollWheel = document.querySelector('.scroll-wheel');
 
  if (scrollIndicator && scrollText && scrollWheel) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
 
      if (scrollPosition > windowHeight) {
        scrollIndicator.style.display = 'none';
      } else {
        scrollIndicator.style.display = 'flex';
      }
    });
  }
 
  // Portfolio Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
 
  if (filterBtns && portfolioItems) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
 
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
 
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
 
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
 
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
 
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
 
  // Testimonial Slider
  const testimonialItems = document.querySelectorAll('.testimonial-item');
 
  if (testimonialItems) {
    let currentIndex = 0;
 
    function showTestimonial(index) {
      testimonialItems.forEach(item => item.style.display = 'none');
      testimonialItems[index].style.display = 'block';
    }
 
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonialItems.length;
      showTestimonial(currentIndex);
    }
 
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
  }
 
  // Contact Form Submission
  const contactSection = document.querySelector('.contact-section');
 
  if (contactSection) {
    // Create particle background
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
 
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
 
      const size = Math.random() * 5 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
 
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
 
      contactSection.appendChild(particle);
 
      animateParticle(particle);
    }
 
    function animateParticle(particle) {
      const duration = Math.random() * 3000 + 2000;
      const keyframes = [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }
      ];
 
      const animation = particle.animate(keyframes, {
        duration: duration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
 
      animation.onfinish = () => animateParticle(particle);
    }
 
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
 
    document.querySelectorAll('.info-content, .social-icons').forEach(item => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
      }
    });
 
    // Add hover effect for social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
      if (icon) {
        icon.addEventListener('mouseenter', () => {
          icon.style.transform = 'translateY(-3px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
          icon.style.transform = 'translateY(0) scale(1)';
        });
      }
    });
  }
 
  // Expandable sections functionality
  const expandableSections = document.querySelectorAll('.expandable-section');
 
  if (expandableSections) {
    expandableSections.forEach(section => {
      const title = section.querySelector('.expandable-title');
      if (title) {
        title.addEventListener('click', () => {
          section.classList.toggle('active');
        });
      }
    });
  }
 
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
 
  // Intersection Observer for fade-in effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.about-text, .about-image, .cta-container').forEach((el) => {
    if (el) {
      observer.observe(el);
    }
  });
 
  // Scroll Animation
  const skillItems = document.querySelectorAll('.skill-item');
 
  if (skillItems) {
    window.addEventListener('scroll', () => {
      skillItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
 
        if (itemPosition < screenPosition) {
          item.classList.add('animate');
        } else {
          item.classList.remove('animate');
        }
      });
    });
  }
 
const serviceCards = document.querySelectorAll('.service-card');

if (serviceCards) {
 serviceCards.forEach(card => {
   card.addEventListener('mouseenter', () => {
     card.style.transform = 'translateY(-10px) rotateX(10deg)';
     card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
   });

   card.addEventListener('mouseleave', () => {
     card.style.transform = 'none';
     card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
   });
 });
}

// Initialize AOS (Animate on Scroll)
AOS.init({
 duration: 1000,
 once: true,
});

// Blog navigation
const blogGrid = document.querySelector('.blog-grid');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (blogGrid && prevBtn && nextBtn) {
 let currentPage = 0;
 const postsPerPage = 3;

 function updateBlogNav() {
   prevBtn.disabled = currentPage === 0;
   nextBtn.disabled = (currentPage + 1) * postsPerPage >= blogGrid.children.length;
 }

 function showPage(page) {
   const start = page * postsPerPage;
   const end = start + postsPerPage;

   Array.from(blogGrid.children).forEach((post, index) => {
     post.style.display = (index >= start && index < end) ? 'block' : 'none';
   });

   updateBlogNav();
 }

 prevBtn.addEventListener('click', () => {
   if (currentPage > 0) {
     currentPage--;
     showPage(currentPage);
   }
 });

 nextBtn.addEventListener('click', () => {
   if ((currentPage + 1) * postsPerPage < blogGrid.children.length) {
     currentPage++;
     showPage(currentPage);
   }
 });

 // Initialize the blog section
 showPage(0);
}

// Parallax effect for blog section background
const blogSection = document.querySelector('.blog-section');

if (blogSection) {
 document.addEventListener('mousemove', (e) => {
   const mouseX = e.clientX / window.innerWidth;
   const mouseY = e.clientY / window.innerHeight;

   blogSection.style.backgroundPosition = `${mouseX * 50}px ${mouseY * 50}px`;
 });
}

// Estimate read time
function estimateReadTime(text) {
 const wordsPerMinute = 200;
 const wordCount = text.trim().split(/\s+/).length;
 const readTime = Math.ceil(wordCount / wordsPerMinute);
 return readTime;
}

// Update read time for each blog post
document.querySelectorAll('.blog-card').forEach(card => {
 if (card) {
   const excerpt = card.querySelector('.blog-excerpt').textContent;
   const readTime = estimateReadTime(excerpt);
   const readTimeElement = card.querySelector('.blog-read-time');
   if (readTimeElement) {
     readTimeElement.textContent = `${readTime} min read`;
   }
 }
});

// Add hover effect to blog stats
document.querySelectorAll('.blog-stats span').forEach(stat => {
 if (stat) {
   stat.addEventListener('mouseover', () => {
     stat.style.color = 'var(--primary-color)';
   });
   stat.addEventListener('mouseout', () => {
     stat.style.color = 'var(--text-color)';
   });
 }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 if (anchor) {
   anchor.addEventListener('click', function(e) {
     e.preventDefault();

     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
   });
 }
});

// Showcase Slider
const showcaseSlides = document.querySelectorAll('.showcase-slide');
const paginationDots = document.querySelectorAll('.pagination-dot');

if (showcaseSlides && paginationDots) {
 let currentSlide = 0;

 function showSlide(n) {
   showcaseSlides[currentSlide].classList.remove('active');
   paginationDots[currentSlide].classList.remove('active');
   currentSlide = (n + showcaseSlides.length) % showcaseSlides.length;
   showcaseSlides[currentSlide].classList.add('active');
   paginationDots[currentSlide].classList.add('active');
 }

 function autoSlide() {
   setInterval(() => {
     showSlide(currentSlide + 1);
   }, 5000);
 }

 function goToSlide(n) {
   showSlide(n);
 }

 autoSlide();

 paginationDots.forEach((dot, index) => {
   dot.addEventListener('click', () => goToSlide(index));
 });
}
});

document.addEventListener('DOMContentLoaded', function() {
  const gaugeProgress = document.querySelector('.gauge-progress');
  const gaugeText = document.querySelector('.gauge-text');
  const skillCards = document.querySelectorAll('.skill-card');
  const skillLevels = document.querySelectorAll('.skill-level-fill');

  const overallSkill = calculateOverallSkill();
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (overallSkill / 100) * circumference;

  gaugeProgress.style.strokeDasharray = `${circumference} ${circumference}`;
  gaugeProgress.style.strokeDashoffset = circumference;

  setTimeout(() => {
    gaugeProgress.style.strokeDashoffset = offset;
    gaugeText.textContent = `${overallSkill}%`;

    skillLevels.forEach(skillLevel => {
      const level = skillLevel.getAttribute('data-level');
      skillLevel.style.width = `${level}%`;
    });
  }, 500);

  function calculateOverallSkill() {
    let total = 0;
    skillLevels.forEach(skillLevel => {
      total += parseInt(skillLevel.getAttribute('data-level'));
    });
    return Math.round(total / skillLevels.length);
  }

  // Touch and mouse events for skill cards
  skillCards.forEach(card => {
    ['touchstart', 'mouseenter'].forEach(eventType => {
      card.addEventListener(eventType, function(e) {
        e.preventDefault();
        const skill = this.getAttribute('data-skill');
        const level = this.querySelector('.skill-level-fill').getAttribute('data-level');
        highlightCard(this);
        showSkillPercentage(this, level);
      });
    });

    ['touchend', 'mouseleave'].forEach(eventType => {
      card.addEventListener(eventType, function(e) {
        e.preventDefault();
        resetCards();
      });
    });
  });

  function highlightCard(selectedCard) {
    skillCards.forEach(card => {
      if (card === selectedCard) {
        card.classList.add('highlighted');
      } else {
        card.classList.add('dimmed');
      }
    });
  }

  function showSkillPercentage(card, level) {
    const percentageElement = card.querySelector('.skill-percentage');
    if (!percentageElement) {
      const newPercentageElement = document.createElement('div');
      newPercentageElement.classList.add('skill-percentage');
      card.appendChild(newPercentageElement);
    }
    animatePercentage(percentageElement, 0, parseInt(level));
  }

  function animatePercentage(element, start, end) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const duration = 1000; // 1 second
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current + '%';
      if (current === end) {
        clearInterval(timer);
      }
    }, stepDuration);
  }

  function resetCards() {
    skillCards.forEach(card => {
      card.classList.remove('highlighted', 'dimmed');
      const percentageElement = card.querySelector('.skill-percentage');
      if (percentageElement) {
        percentageElement.textContent = '';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
      
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.getElementById('hero');
  const floatingCard = document.querySelector('.floating-card');
  const floatingCardInner = document.querySelector('.floating-card-inner');

  function toggleFloatingCard() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > heroBottom) {
      floatingCard.style.display = 'none';
    } else {
      floatingCard.style.display = 'block';
    }
  }

  function toggleExpanded() {
    floatingCardInner.classList.toggle('expanded');
  }

  toggleFloatingCard();
  window.addEventListener('scroll', toggleFloatingCard);

  // Toggle expanded state on touch devices
  if ('ontouchstart' in window) {
    floatingCardInner.addEventListener('touchstart', function(e) {
      e.preventDefault();
      toggleExpanded();
    });
  }
});