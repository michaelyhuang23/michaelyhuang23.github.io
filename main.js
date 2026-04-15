function showTab(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

// On load, activate tab based on hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '') || 'about';
  const tab = document.querySelector(`.tab[href="#${hash}"]`);
  if (tab) showTab(hash, tab);
});
