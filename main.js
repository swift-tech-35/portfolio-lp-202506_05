// フェードイン（スクロール時表示）
function fadeInOnScroll(selector, offset = 0) {
  const els = document.querySelectorAll(selector);
  const onScroll = () => {
    const wh = window.innerHeight;
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < wh - offset) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
}

// 初期アニメーション
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main-visual-img').classList.add('visible');
  setTimeout(() => {
    document.querySelector('.tagline').classList.add('visible');
  }, 400);

  // セクション、カードなど順次フェードイン
  fadeInOnScroll('.section', 90);
  fadeInOnScroll('.feature-card', 80);
  fadeInOnScroll('.flow-step', 70);
  fadeInOnScroll('.cta', 100);

  // 料金プランのタブ切り替え
  const tabs = document.querySelectorAll('.plan-tab');
  const cards = document.querySelectorAll('.plan-card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const plan = tab.dataset.plan;
      cards.forEach(card => {
        if (plan === 'all') {
          card.classList.remove('hide');
        } else {
          card.classList.toggle('hide', card.dataset.type !== plan);
        }
      });
    });
  });

  // CTAボタンアニメーション
  const ctaBtn = document.getElementById('cta-btn');
  ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ctaBtn.textContent = "ありがとうございます！";
    ctaBtn.classList.add('cta-btn-success');
    setTimeout(() => {
      ctaBtn.textContent = "今すぐワクワク体験！お申込みはこちら";
      ctaBtn.classList.remove('cta-btn-success');
    }, 1800);
  });
});
