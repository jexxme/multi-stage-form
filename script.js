// This function will be called when moving to stage 2
function goToStage2() {
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'block';
    // Update progress indicators
    updateProgressIndicator(1);
}

// This function will be called when the form is finished
function finishForm() {
    alert('Form Submitted!');
    // Here you can add form submission logic
    // Update progress indicators
    updateProgressIndicator(2);
}

// This function updates the progress indicators based on the current stage
function updateProgressIndicator(stage) {
    const indicators = document.querySelectorAll('.progress-indicators div');
    indicators.forEach((div, index) => {
        if (index <= stage) {
            div.classList.add('active');
        } else {
            div.classList.remove('active');
        }
    });
}
