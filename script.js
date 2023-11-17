function goToStage1() {
    document.getElementById('stage1').classList.add('active');
    document.getElementById('stage2').classList.remove('active');
    document.getElementById('stage3').classList.remove('active');
    document.getElementById('stage4').classList.remove('active');
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
    // Hide all stages and buttons, but not the entire form
    document.querySelectorAll('.form-stage').forEach(stage => stage.classList.remove('active'));
    document.querySelector('.button-container').style.display = 'none';

    // Show the loading animation with fade-in
    const loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.classList.add('active');

    // Simulate a 2-second submission process
    setTimeout(() => {
        // Hide the loading animation
        loadingAnimation.classList.remove('active');

        // Show the Thank You stage with fade-in
        const thankYouStage = document.getElementById('thankYouStage');
        thankYouStage.classList.add('active');
    }, 2000); // 2000 milliseconds = 2 seconds
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
