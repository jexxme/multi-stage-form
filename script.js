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
