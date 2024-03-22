import './hello-world-button.scss';

class HelloWorldButton {
    btnCssClass = 'hello-world-btn';
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello world';
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-txt');
            body.appendChild(p);
        };
        button.classList.add(this.btnCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;
