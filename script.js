let currentStep = 1;
const totalSteps = 4;

function nextStep(step) {
    const currentContainer = document.querySelector(`.question-container[data-step="${step}"]`);
    const nextContainer = document.querySelector(`.question-container[data-step="${step + 1}"]`);
    const inputs = currentContainer.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    const errorMessage = document.getElementById(`error-message-step-${step}`);
    let isChecked = false;

    inputs.forEach(input => {
        if (input.checked) {
            isChecked = true;
        }
    });

    if (isChecked) {
        errorMessage.style.display = 'none';
        currentContainer.classList.remove('active');
        nextContainer.classList.add('active');
        updateProgressBar(step + 1);
    } else {
        errorMessage.style.display = 'block';
    }
}

function previousStep(step) {
    const currentContainer = document.querySelector(`.question-container[data-step="${step}"]`);
    const previousContainer = document.querySelector(`.question-container[data-step="${step - 1}"]`);
    currentContainer.classList.remove('active');
    previousContainer.classList.add('active');
    updateProgressBar(step - 1);
}

function updateProgressBar(step) {
    const progressBar = document.getElementById('progress-bar');
    const progress = (step / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results-container');
    const loadingProgress = document.getElementById('loading-progress');

    quizForm.style.display = 'none';
    resultsContainer.style.display = 'block';
    loadingProgress.style.width = '100%';

    setTimeout(() => {
        displayResults();
    }, 2000); // Simulate loading time
}

function displayResults() {
    const results = document.getElementById('results');
    results.innerHTML = `
        <h2>Quiz Results</h2>
        <div class="result-card">
            <h3>Wix</h3>
            <p>For anyone afraid of building a blog from scratch, Wix has your back! You’ll have a blog set up in no time with its simple and beginner-friendly tools. It’s our overall top choice of website builder that scored an incredible 4.4/5 in our “ease of use” testing.</p>
            <a href="#">Read review</a>
            <a href="#">Visit Wix</a>
        </div>
        <div class="result-card">
            <h3>GoDaddy</h3>
            <p>GoDaddy is the best option if you’re looking to set up a blog quickly. Create a stylish blog with GoDaddy’s ADI editor – a user-friendly tool for beginners or anyone less tech-savvy. And you can get started with GoDaddy’s essential blogging features today for free.</p>
            <a href="#">Read review</a>
            <a href="#">Visit GoDaddy</a>
        </div>
        <div class="result-card">
            <h3>Squarespace</h3>
            <p>Squarespace’s high-quality templates and strong blog features position the site as the best website builder for blogging in our testing. It also got an impressive score of 4/5 for ease of use, so if you want something easy to use, Squarespace is a good fit!</p>
            <a href="#">Read review</a>
            <a href="#">Visit Squarespace</a>
        </div>
    `;
}
