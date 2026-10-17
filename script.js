const status = document.querySelector('#status');
const greetings = [
  'Hello from GitHub Pages!',
  'สวัสดีจาก GitHub Actions!',
  'Deployed automatically 🚀'
];
let greetIndex = 0;

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = greetings[greetIndex];
  greetIndex = (greetIndex + 1) % greetings.length;
});

// Toggle Theme (จำค่าที่เลือกไว้ใน localStorage)
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeBtn.textContent = dark ? '☀️ Light' : '🌙 Dark';
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
applyTheme(savedTheme === 'dark');

themeBtn.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});
