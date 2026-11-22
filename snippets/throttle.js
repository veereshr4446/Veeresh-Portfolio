export function throttle(fn, limit = 200) {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    fn(...args); waiting = true;
    setTimeout(() => (waiting = false), limit);
  };
}
