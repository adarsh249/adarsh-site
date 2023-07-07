/**
 * THIS IS CURRENTLY CODE NOT BEING USED. GOAL IS TO MAKE A CUSTOM HTML ELEMENT TO MAKE IT EASIER
 * TO ADD PROJECTS.
 */
class project extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const article = document.createElement('article');
        const styles = document.createElement('style');
        styles.innerHTML = `
            * {
                font-family: 'Roboto Mono', monospace;
                color: white;
            }

        `;
        this.shadowRoot.append(styles, article);
    }

    set data(data) {
        if (!data) return;

        const article = this.shadowRoot.querySelector('article');

        article.innerHTML = `
            <hr>
            <h2>Project 1</h2>
            <p> | Languages </p>
            <p> June 2020 </p> <br>
            <p>Links: </p> <a href="">Github Repo</a> <a href="">Site Link</a>
            <p> This is a short description of the project </p>

        `;
    }

}

customElements.define('project', project);