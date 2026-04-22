document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MENU MOBILE
  // =========================
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    const links = menu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

  // =========================
  // ABRIR FORMULARIO
  // =========================
  const buttons = document.querySelectorAll(".open-form");
  const formulario = document.getElementById("formulario");

  if (buttons.length && formulario) {
    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Mostrar formulario (solo si no está abierto)
        if (!formulario.classList.contains("show")) {
          formulario.classList.add("show");
        }

        // Scroll suave con pequeño delay (efecto pro)
        setTimeout(() => {
          formulario.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 200);
      });
    });
  }

});


function scrollToFormulario() {
  const form = document.getElementById("contacto");
  const offset = 80;
  const target = form.getBoundingClientRect().top + window.scrollY - offset;

  const start = window.scrollY;
  const distance = target - start;
  const duration = 1200; // ⬅️ MÁS ALTO = MÁS LENTO

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const time = currentTime - startTime;

    const ease = time / duration;
    const easeInOut = ease < 0.5
      ? 2 * ease * ease
      : 1 - Math.pow(-2 * ease + 2, 2) / 2;

    window.scrollTo(0, start + distance * easeInOut);

    if (time < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll(".open-form").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToFormulario();
  });
});



document.addEventListener("DOMContentLoaded", () => {

  function scrollToFormulario() {
    const form = document.getElementById("contacto");
    const offset = 80;

    const target = form.getBoundingClientRect().top + window.scrollY - offset;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 1200;

    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const time = currentTime - startTime;

      const ease = time / duration;
      const easeInOut = ease < 0.5
        ? 2 * ease * ease
        : 1 - Math.pow(-2 * ease + 2, 2) / 2;

      window.scrollTo(0, start + distance * easeInOut);

      if (time < duration) {
        requestAnimationFrame(animation);
      } else {
        // 👇 cuando llega, activa animación
        form.classList.add("show-form");
      }
    }

    requestAnimationFrame(animation);
  }

  // todos los botones
  document.querySelectorAll(".open-form").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToFormulario();
    });
  });

});


