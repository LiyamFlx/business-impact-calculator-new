document.addEventListener('DOMContentLoaded', () => {
  const steps = Array.from(document.querySelectorAll('.form-step'));
  let currentStep = 0;

  document.getElementById('next-1').addEventListener('click', () => {
    const age = document.getElementById('age-input').value;
    if (age) {
      document.getElementById('follow-up-question').textContent = age < 18 ? 'Do you have parental consent?' : 'Are you currently a student?';
      showStep(1);
    } else {
      shakeInput('age-input');
    }
  });

  document.getElementById('back-2').addEventListener('click', () => showStep(0));
  document.getElementById('next-2').addEventListener('click', () => showStep(2));
  document.getElementById('back-review').addEventListener('click', () => showStep(1));
  document.getElementById('submit').addEventListener('click', () => showStep(3));

  function showStep(index) {
    steps[currentStep].classList.remove('active');
    steps[index].classList.add('active');
    updateProgress(index);
    currentStep = index;
  }

  function updateProgress(step) {
    const progress = document.querySelector('.progress');
    progress.style.width = `${(step + 1) / steps.length * 100}%`;
    document.querySelector('.step-counter').textContent = `Step ${step + 1} of ${steps.length}`;
  }

  function shakeInput(inputId) {
    const input = document.getElementById(inputId);
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 300);
  }
});
