/**
 * Crystal Salt Company - Core Modern JavaScript
 * Interactivity: Mobile Menu, Sticky Nav, Gallery Filter, Lightbox, Stats Counter, WhatsApp Inquiry
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header & Back to top
  const header = document.querySelector('.csc-header');
  const scrollTopBtn = document.querySelector('.csc-scroll-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (header) {
      if (scrollPos > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  const mobileToggle = document.querySelector('.csc-mobile-toggle');
  const mobileDrawer = document.querySelector('.csc-mobile-drawer');
  const drawerOverlay = document.querySelector('.csc-drawer-overlay');
  const drawerClose = document.querySelector('.csc-drawer-close');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Stats Counter Animation
  const statNumbers = document.querySelectorAll('.csc-stat-num[data-target]');
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1800;
          const start = 0;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            // easeOutQuad
            const currentVal = Math.round(target * (progress * (2 - progress)));
            el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

            if (currentStep >= totalSteps) {
              clearInterval(timer);
              el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(num => observer.observe(num));
  }

  // Gallery Filters
  const filterBtns = document.querySelectorAll('.csc-filter-btn');
  const galleryItems = document.querySelectorAll('.csc-gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter || (category && category.includes(filter))) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Lightbox Modal
  const modal = document.querySelector('.csc-modal');
  const modalImg = document.querySelector('.csc-modal-img');
  const modalCaption = document.querySelector('.csc-modal-caption');
  const modalClose = document.querySelector('.csc-modal-close');

  function openLightbox(src, title) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = title || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-src') || el.getAttribute('href') || el.querySelector('img')?.src;
      const title = el.getAttribute('data-title') || el.querySelector('img')?.alt || '';
      if (src) openLightbox(src, title);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeLightbox);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeDrawer();
    }
  });

  // Accordion for FAQ
  const accordionHeaders = document.querySelectorAll('.csc-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.csc-accordion-body');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.csc-accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.csc-accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        if (body) body.style.maxHeight = null;
      }
    });
  });

  // Open first FAQ item by default if exists
  const firstFaq = document.querySelector('.csc-accordion-item');
  if (firstFaq) {
    firstFaq.classList.add('active');
    const body = firstFaq.querySelector('.csc-accordion-body');
    if (body) body.style.maxHeight = body.scrollHeight + 'px';
  }

  // WhatsApp Inquiry Form Handler
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = inquiryForm.querySelector('[name="name"]')?.value || '';
      const email = inquiryForm.querySelector('[name="email"]')?.value || '';
      const phone = inquiryForm.querySelector('[name="phone"]')?.value || '';
      const product = inquiryForm.querySelector('[name="product"]')?.value || 'General Inquiry';
      const quantity = inquiryForm.querySelector('[name="quantity"]')?.value || '';
      const destination = inquiryForm.querySelector('[name="destination"]')?.value || '';
      const message = inquiryForm.querySelector('[name="message"]')?.value || '';

      const isArabic = document.body.classList.contains('lang-ar');
      const text = isArabic
        ? `*استفسار تصدير ملح جديد - شركة كريستال للملح*\n` +
          `👤 *اسم العميل:* ${name}\n` +
          `📧 *البريد الإلكتروني:* ${email}\n` +
          `📞 *الهاتف:* ${phone}\n` +
          `🧂 *المنتج المطلوب:* ${product}\n` +
          (quantity ? `📦 *الكمية (طن):* ${quantity}\n` : '') +
          (destination ? `🚢 *ميناء الوصول:* ${destination}\n` : '') +
          `💬 *الرسالة:* ${message}`
        : `*New Salt Export Inquiry - Crystal Salt Co.*\n` +
          `👤 *Client Name:* ${name}\n` +
          `📧 *Email:* ${email}\n` +
          `📞 *Phone:* ${phone}\n` +
          `🧂 *Product Required:* ${product}\n` +
          (quantity ? `📦 *Quantity (Tons):* ${quantity}\n` : '') +
          (destination ? `🚢 *Destination Port:* ${destination}\n` : '') +
          `💬 *Message:* ${message}`;

      const waUrl = `https://wa.me/201222203726?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }
});
