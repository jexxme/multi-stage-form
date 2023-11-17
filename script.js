function goToStage1() {
    // get the element with the id 'stage1' and add the class 'active'
    document.getElementById('stage1').classList.add('active');
    // get the element with the id 'stage2' and remove the class 'active'
    document.getElementById('stage2').classList.remove('active');
    // get the element with the id 'stage3' and remove the class 'active'
    document.getElementById('stage3').classList.remove('active');
    // get the element with the id 'stage4' and remove the class 'active'
    document.getElementById('stage4').classList.remove('active');
    // call the function updateProgressIndicator with the number 0
    updateProgressIndicator(0);
}

function goToStage2() {
    document.getElementById('stage1').classList.remove('active');
    document.getElementById('stage2').classList.add('active');
    document.getElementById('stage3').classList.remove('active');
    document.getElementById('stage4').classList.remove('active');
    updateProgressIndicator(1);
}

function goToStage3() {
    document.getElementById('stage1').classList.remove('active');
    document.getElementById('stage2').classList.remove('active');
    document.getElementById('stage3').classList.add('active');
    document.getElementById('stage4').classList.remove('active');
    updateProgressIndicator(2);
}

function goToStage4() {
    document.getElementById('stage1').classList.remove('active');
    document.getElementById('stage2').classList.remove('active');
    document.getElementById('stage3').classList.remove('active');
    document.getElementById('stage4').classList.add('active');
    updateProgressIndicator(3);
}

function finishForm() {
    const progressIndicators = document.querySelector('.progress-indicators');
    progressIndicators.classList.add('hide-progress');

    // Hide all stages and buttons
    document.querySelectorAll('.form-stage').forEach(stage => stage.classList.remove('active'));
    document.querySelector('.button-container').style.display = 'none';

    // Wait for the hiding animation of progress indicators to complete
    setTimeout(() => {
        // Ensure progress indicators are completely hidden
        progressIndicators.classList.add('hidden');

        const loadingAnimation = document.getElementById('loadingAnimation');
        loadingAnimation.classList.add('active');

        // Simulate a 2-second submission process
        setTimeout(() => {
            loadingAnimation.classList.remove('active');
            const thankYouStage = document.getElementById('thankYouStage');
            thankYouStage.classList.add('active');
        }, 2000);
    }, 500);
}




function updateProgressIndicator(stage) {

// Find the progress indicator elements
const indicators = document.querySelectorAll('.progress-indicators div');

// Loop through each indicator element
indicators.forEach((div, index) => {

// If the element is before the stage we're at, mark it as active
if (index <= stage) {
div.classList.add('active');
} else {

// If the element is after the stage we're at, remove active
div.classList.remove('active');
}
});
}

