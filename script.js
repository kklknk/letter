const button = document.getElementById('openLetterBtn');
const letter = document.getElementById('letter');

button.addEventListener('click', () => {
  button.style.display = 'none';
  letter.classList.remove('hidden');

  setTimeout(() => {
    letter.classList.add('visible');
  }, 100); // smooth animation trigger
});
