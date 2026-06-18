// Mobile nav toggle
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }));

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));

    // Reservation form
    const form = document.getElementById('reservaForm');
    const confirmBox = document.getElementById('reservaConfirm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get('nombre');
      const tipo = data.get('tipo');
      const cantidad = data.get('cantidad');
      const fechaInicio = data.get('fechaInicio');
      const fechaFin = data.get('fechaFin');
      const punto = data.get('punto');
      const email = data.get('email');

      confirmBox.innerHTML = `<strong>¡Solicitud recibida, ${nombre}!</strong><br>
        Has pedido ${cantidad} bici(s) tipo "${tipo}", del ${fechaInicio} al ${fechaFin}, con recogida en ${punto}.
        Te escribiremos a ${email} para confirmar la disponibilidad en menos de 24h.`;
      confirmBox.classList.add('is-active');
      form.reset();
      confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
