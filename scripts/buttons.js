const linkedInButton = document.getElementById('linkedin');
const githubButton = document.getElementById('github');
const resumeButton = document.getElementById('resume');

linkedInButton.addEventListener('click', () => {
    window.open(
        'https://www.linkedin.com/in/adarshpatel249/',
        '_blank' //for opening new tab
    );
});

githubButton.addEventListener('click', () => {
    window.open(
        'https://github.com/adarsh249',
        '_blank'
    );
});

resumeButton.addEventListener('click', () => {
    window.open(
        './documents/Adarsh Patel Resume.pdf',
        '_blank'
    );
});