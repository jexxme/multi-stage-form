function goToStage2() {
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'block';
    document.getElementById('backButton').style.display = 'inline-block'; // Show the back button
    document.getElementById('nextButton').onclick = finishForm; // Change the event to finish form
    document.getElementById('nextButton').textContent = 'Finish Now'; // Change the button text to 'Finish Now'
    updateProgressIndicator(1);
}

function goToStage1() {
    document.getElementById('stage1').style.display = 'block';
    document.getElementById('stage2').style.display = 'none';
    document.getElementById('backButton').style.display = 'none'; // Hide the back button
    document.getElementById('nextButton').onclick = goToStage2; // Change the event back to go to stage 2
    document.getElementById('nextButton').textContent = 'Next'; // Change the button text back to 'Next'
    updateProgressIndicator(0);
}

function finishForm() {
    alert('Form Submitted!');
    // Add form submission logic here
    // Optionally, update the progress indicator to reflect form submission
}

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
