export function typeText(el, text, speed = 60) {
  let i = 0;
  const id = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(id);
  }, speed);
}
