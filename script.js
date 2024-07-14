let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const formData = {};

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
    } else {
        showSummary();
    }
}

function prevStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
    }
}

function selectOption(step, field, value) {
    formData[field] = value;
    nextStep();
}

function showSummary() {
    const summary = document.getElementById('summary');
    summary.innerHTML = `
        <p>Market Size: ${formData.marketSize}</p>
        <p>Growth Potential: ${formData.growthPotential}</p>
        <p>Market Cap: ${formData.marketCap}</p>
        <p>Importance of Opportunity: ${formData.importanceOpportunity}</p>
        <p>Importance of Impact: ${formData.importanceImpact}</p>
        <p>Difficulty of Execution: ${formData.importanceDifficulty}</p>
        <p>Challenges in Construction: ${formData.importanceChallenge}</p>
    `;
}

function submitForm() {
    const results = document.getElementById('results');
    const impactScore = calculateImpact();
    results.innerHTML = `
        <h3>Your Impact Score: ${impactScore.toFixed(2)}%</h3>
    `;
    nextStep();
}

function calculateImpact() {
    const S = parseFloat(formData.marketSize);
    const P = parseFloat(formData.growthPotential);
    const D = parseFloat(formData.importanceDifficulty);
    const C = parseFloat(formData.importanceChallenge);

    const w_S = parseFloat(formData.importanceOpportunity);
    const w_P = parseFloat(formData.importanceImpact);
    const w_D = parseFloat(formData.importanceDifficulty);
    const w_C = parseFloat(formData.importanceChallenge);

    const rawImpact = (w_S * S) + (w_P * P) - (w_D * D) - (w_C * C);

    // Constants for normalization
    const minScore = -298;
    const maxScore = 399;

    const normalizedImpact = ((rawImpact - minScore) / (maxScore - minScore)) * 100;
    
    return normalizedImpact;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        nextStep();
    }
});
