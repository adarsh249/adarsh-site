const header = `
            <img src="./images/pfp.jpg" id="pfp">
            <h1 class="myName">Adarsh Patel</h1>
            <nav id="navBar">
                <a href="about.html">About</a>
                <a href="">Projects</a>
                <a href="contact.html">Contact</a>
            </nav>
`;
document.querySelector('.header').innerHTML = header;

const headerName = document.querySelector('.myName');
headerName.addEventListener('click', () => {
    window.location.href = "../index.html";
});

const headerImage = document.getElementById('pfp');
headerImage.addEventListener('click', () => {
    window.location.href = "../index.html";
});