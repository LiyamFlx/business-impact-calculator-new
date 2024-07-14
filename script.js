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
    alert('Form submitted successfully!');
    console.log(formData);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        nextStep();
    }
});
