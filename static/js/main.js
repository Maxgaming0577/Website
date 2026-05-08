document.addEventListener('DOMContentLoaded', () => {

  /* Auto-dismiss alerts */
  document.querySelectorAll('.alert').forEach(el => {
    setTimeout(() => {
      el.style.transition = 'opacity 0.45s, transform 0.45s';
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(-6px)';
      setTimeout(() => el.remove(), 460);
    }, 5000);
  });

  /* Mobile nav */
  const toggle = document.getElementById('navToggle');
  const center = document.getElementById('navCenter');
  if (toggle && center) {
    toggle.addEventListener('click', () => center.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !center.contains(e.target))
        center.classList.remove('open');
    });
  }

  /* Animate stat numbers */
  document.querySelectorAll('.stat-value[data-val]').forEach(el => {
    const target = parseInt(el.dataset.val, 10);
    if (isNaN(target) || target === 0) return;
    let cur  = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const id   = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur.toLocaleString();
      if (cur >= target) clearInterval(id);
    }, 20);
  });

  /* Progress bar animation */
  document.querySelectorAll('.prog-fill[data-width]').forEach(el => {
    el.style.width = '0';
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.width = el.dataset.width + '%';
      })
    );
  });
});
