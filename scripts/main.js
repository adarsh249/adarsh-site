const header = `
            <img src="./images/pfp.jpg" id="pfp">
            <h1 class="myName">Adarsh Patel</h1>
            <nav id="navBar">
                <a href="about.html">About</a>
                <a onclick="scrollToProjects()">Projects</a>
                <a href="contact.html">Contact</a>
            </nav>
`;
const footer =`
    <button class="top">Back to Top</button>
`;
document.querySelector('.header').innerHTML = header;
document.querySelector('.footer').innerHTML = footer;
const headerName = document.querySelector('.myName');
headerName.addEventListener('click', () => {
    window.location.href = "../index.html";
});

const headerImage = document.getElementById('pfp');
headerImage.addEventListener('click', () => {
    window.location.href = "../index.html";
});

const backToTopButton = document.querySelector('.top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function scrollToProjects() {
    const projectsDiv = document.querySelector('.projects');
    projectsDiv.scrollIntoView({ behavior: 'smooth' });
}