const colors = ['#ffd700', '#ffa500', '#ff4500', '#ffff00', '#ff6347'];
const dotsCount = 12; // মোট ডট সংখ্যা
const dots = [];

// ডট তৈরি ও DOM এ যোগ করা
for (let i = 0; i < dotsCount; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // রং এলোমেলো
  dot.style.backgroundColor = colors[i % colors.length];

  // সাইজ এলোমেলো 6px থেকে 12px
  const size = 6 + Math.random() * 6;
  dot.style.width = size + 'px';
  dot.style.height = size + 'px';

  // হালকা শেডো
  dot.style.boxShadow = `0 0 8px ${dot.style.backgroundColor}`;

  document.body.appendChild(dot);
  dots.push({
    el: dot,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    size: size,
  });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  let x = mouseX;
  let y = mouseY;

  dots.forEach((dot, index) => {
    dot.x += (x - dot.x) * 0.3;
    dot.y += (y - dot.y) * 0.3;
    dot.el.style.left = dot.x + 'px';
    dot.el.style.top = dot.y + 'px';

    // ছোট থেকে বড়ের দিকে স্কেলিং
    const scale = (dots.length - index) / dots.length;
    dot.el.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // অপাসিটি ধীরে কমছে
    dot.el.style.opacity = scale;

    // পরের ডটের জন্য পজিশন আপডেট
    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animate);
}

animate();
