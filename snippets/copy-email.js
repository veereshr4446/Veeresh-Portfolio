document.querySelector('#copyEmail')?.addEventListener('click', async (e) => {
  await navigator.clipboard.writeText(e.currentTarget.dataset.email);
  e.currentTarget.textContent = 'Copied!';
});
