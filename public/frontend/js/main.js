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

  // Hero video: only fetch on larger screens with a normal connection and motion allowed
  const heroVideo = document.querySelector('video[data-hero-video]');
  if (heroVideo) {
    const conn = navigator.connection || {};
    const slowNet = conn.saveData || /(^|-)2g|3g/.test(conn.effectiveType || '');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wideScreen = window.matchMedia('(min-width: 769px)').matches;
    if (wideScreen && !slowNet && !reduceMotion) {
      heroVideo.querySelectorAll('source[data-src]').forEach(src => { src.src = src.dataset.src; });
      heroVideo.load();
      heroVideo.play().catch(() => {});
    }
  }

  // Icon-only header buttons keep their label as a tooltip
  document.querySelectorAll('.csc-header-actions .csc-btn-outline').forEach(btn => {
    if (!btn.title) btn.title = btn.textContent.trim();
  });

  // Keyboard & screen-reader access for non-button controls (divs/spans used as buttons)
  const isArabicPage = document.body.classList.contains('lang-ar');
  const controlLabels = isArabicPage ? {
    '.csc-mobile-toggle': 'فتح القائمة',
    '.csc-drawer-close': 'إغلاق القائمة',
    '.csc-scroll-top': 'العودة للأعلى',
    '.csc-modal-close': 'إغلاق الصورة'
  } : {
    '.csc-mobile-toggle': 'Open menu',
    '.csc-drawer-close': 'Close menu',
    '.csc-scroll-top': 'Back to top',
    '.csc-modal-close': 'Close image'
  };

  function makeButtonLike(el, label) {
    if (el.tagName === 'BUTTON' || el.tagName === 'A') return;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    if (label && !el.getAttribute('aria-label')) el.setAttribute('aria-label', label);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  }

  Object.entries(controlLabels).forEach(([selector, label]) => {
    document.querySelectorAll(selector).forEach(el => makeButtonLike(el, label));
  });
  document.querySelectorAll('.csc-gallery-item[data-lightbox]').forEach(el => {
    const title = el.getAttribute('data-title') || el.querySelector('img')?.alt || '';
    makeButtonLike(el, (isArabicPage ? 'تكبير الصورة: ' : 'Enlarge photo: ') + title);
  });
  document.querySelectorAll('.csc-accordion-header').forEach(el => {
    makeButtonLike(el);
    el.setAttribute('aria-expanded', el.parentElement.classList.contains('active') ? 'true' : 'false');
  });

  let drawerReturnFocus = null;
  if (mobileToggle && mobileDrawer) {
    mobileDrawer.id = mobileDrawer.id || 'csc-mobile-drawer';
    mobileToggle.setAttribute('aria-controls', mobileDrawer.id);
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    drawerReturnFocus = document.activeElement;
    const firstLink = mobileDrawer?.querySelector('a, [role="button"]');
    if (firstLink) firstLink.focus();
  }

  function closeDrawer() {
    const wasOpen = mobileDrawer?.classList.contains('active');
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    if (wasOpen && drawerReturnFocus) drawerReturnFocus.focus();
    drawerReturnFocus = null;
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

  let lightboxReturnFocus = null;
  if (modal) {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', isArabicPage ? 'عرض الصورة' : 'Photo viewer');
  }

  function openLightbox(src, title) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = title || modalImg.alt;
    if (modalCaption) modalCaption.textContent = title || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lightboxReturnFocus = document.activeElement;
    if (modalClose) modalClose.focus();
  }

  function closeLightbox() {
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lightboxReturnFocus) lightboxReturnFocus.focus();
    lightboxReturnFocus = null;
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
          otherItem.querySelector('.csc-accordion-header')?.setAttribute('aria-expanded', 'false');
          const otherBody = otherItem.querySelector('.csc-accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      header.setAttribute('aria-expanded', isActive ? 'false' : 'true');
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
    firstFaq.querySelector('.csc-accordion-header')?.setAttribute('aria-expanded', 'true');
    const body = firstFaq.querySelector('.csc-accordion-body');
    if (body) body.style.maxHeight = body.scrollHeight + 'px';
  }

  // Inquiry Form: validation + WhatsApp / email hand-off
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    const isArabic = document.body.classList.contains('lang-ar');
    const SALES_EMAIL = 'sales@crystalsalt-eg.com';
    const SALES_PHONE = '+20 122 220 3726';
    const msg = isArabic ? {
      required: 'هذا الحقل مطلوب.',
      product: 'يُرجى اختيار نوع الملح.',
      email: 'يُرجى إدخال بريد إلكتروني صحيح، مثل name@company.com.',
      phone: 'يُرجى إدخال رقم هاتف صحيح مع كود الدولة.',
      summary: 'يُرجى تصحيح الحقول المحددة ثم المحاولة مرة أخرى.',
      whatsapp: 'تم تجهيز استفسارك في واتساب. اضغط "إرسال" هناك ليصل إلى مكتب المبيعات.',
      email_sent: 'تم فتح برنامج البريد الإلكتروني ومعه رسالتك إلى ' + SALES_EMAIL + '. اضغط "إرسال" هناك.',
      fallback: 'لم يُفتح شيء؟ اتصل بنا مباشرة على '
    } : {
      required: 'This field is required.',
      product: 'Please choose a salt product.',
      email: 'Enter a valid email address, like name@company.com.',
      phone: 'Enter a valid phone number including the country code.',
      summary: 'Please correct the highlighted fields and try again.',
      whatsapp: 'Your inquiry is ready in WhatsApp. Press "Send" there to reach our sales desk.',
      email_sent: 'Your email app opened with your inquiry to ' + SALES_EMAIL + '. Press "Send" there.',
      fallback: 'Nothing opened? Call us directly on '
    };

    const field = (name) => inquiryForm.querySelector(`[name="${name}"]`);
    const statusBox = inquiryForm.querySelector('.csc-form-status');

    function setError(input, text) {
      const group = input.closest('.csc-form-group');
      let err = group.querySelector('.csc-field-error');
      if (!text) {
        input.removeAttribute('aria-invalid');
        if (err) err.remove();
        return;
      }
      if (!err) {
        err = document.createElement('p');
        err.className = 'csc-field-error';
        err.id = input.id + '-error';
        group.appendChild(err);
      }
      err.textContent = text;
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', err.id);
    }

    function validateField(input) {
      const value = input.value.trim();
      let error = '';
      if (input.required && !value) {
        error = input.name === 'product' ? msg.product : msg.required;
      } else if (value && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        error = msg.email;
      } else if (value && input.type === 'tel' && value.replace(/\D/g, '').length < 7) {
        error = msg.phone;
      }
      setError(input, error);
      return !error;
    }

    function validateForm() {
      let firstInvalid = null;
      inquiryForm.querySelectorAll('input, select, textarea').forEach(input => {
        if (!validateField(input) && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        showStatus('error', msg.summary);
        firstInvalid.focus();
        return false;
      }
      return true;
    }

    function showStatus(type, text) {
      if (!statusBox) return;
      statusBox.hidden = false;
      statusBox.className = 'csc-form-status csc-form-full is-' + type;
      statusBox.textContent = text;
      if (type === 'success') {
        const fallback = document.createElement('span');
        fallback.className = 'csc-form-status-fallback';
        fallback.append(msg.fallback);
        const tel = document.createElement('a');
        tel.href = 'tel:00201222203726';
        tel.dir = 'ltr';
        tel.textContent = SALES_PHONE;
        fallback.appendChild(tel);
        statusBox.appendChild(fallback);
      }
    }

    function buildInquiry(forWhatsApp) {
      const b = forWhatsApp ? '*' : '';
      const product = field('product')?.selectedOptions[0]?.textContent.trim() || '';
      const rows = isArabic ? [
        ['👤', 'اسم العميل', field('name').value],
        ['📧', 'البريد الإلكتروني', field('email').value],
        ['📞', 'الهاتف', field('phone').value],
        ['🧂', 'المنتج المطلوب', product],
        ['📦', 'الكمية (طن)', field('quantity')?.value],
        ['🚢', 'ميناء الوصول', field('destination')?.value],
        ['💬', 'الرسالة', field('message').value]
      ] : [
        ['👤', 'Client Name', field('name').value],
        ['📧', 'Email', field('email').value],
        ['📞', 'Phone', field('phone').value],
        ['🧂', 'Product Required', product],
        ['📦', 'Quantity (Tons)', field('quantity')?.value],
        ['🚢', 'Destination Port', field('destination')?.value],
        ['💬', 'Message', field('message').value]
      ];
      const title = isArabic ? 'استفسار تصدير ملح جديد - شركة كريستال للملح' : 'New Salt Export Inquiry - Crystal Salt Co.';
      const lines = rows
        .filter(row => row[2] && row[2].trim())
        .map(([icon, label, value]) => `${forWhatsApp ? icon + ' ' : ''}${b}${label}:${b} ${value.trim()}`);
      return { title, product, body: `${b}${title}${b}\n` + lines.join('\n') };
    }

    function openExternal(url) {
      const win = window.open(url, '_blank');
      if (!win) window.location.href = url;
    }

    inquiryForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('blur', () => { if (input.value.trim()) validateField(input); });
      input.addEventListener('input', () => { if (input.getAttribute('aria-invalid')) validateField(input); });
      input.addEventListener('change', () => { if (input.getAttribute('aria-invalid')) validateField(input); });
    });

    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      const inquiry = buildInquiry(true);
      openExternal(`https://wa.me/201222203726?text=${encodeURIComponent(inquiry.body)}`);
      showStatus('success', msg.whatsapp);
    });

    const emailBtn = inquiryForm.querySelector('[data-inquiry-email]');
    if (emailBtn) {
      emailBtn.addEventListener('click', () => {
        if (!validateForm()) return;
        const inquiry = buildInquiry(false);
        const subject = `${inquiry.title}: ${inquiry.product}`;
        window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiry.body)}`;
        showStatus('success', msg.email_sent);
      });
    }
  }
});
