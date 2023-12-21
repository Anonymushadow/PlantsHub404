import { contentContainer } from "./config.mjs";

let btnSwitch = document.querySelector('.switch');
let color = document.querySelector(":root");

export const startTheme = () => {
    if (localStorage.getItem('active') === 'true') {
        dark();
        btnSwitch.classList.add('active');
        contentContainer.classList.add("background__dark");
    } else {
        light();
        contentContainer.classList.remove("background__dark");
    }

    function light() {
        color.style.setProperty('--color__principal', '#5DBE9B');
        color.style.setProperty('--color__principal__sombra', '#5DBE9B');
        color.style.setProperty('--color__secundario', '#8EDC9D');
        color.style.setProperty('--color__terciario', '#E5E5E5');
        color.style.setProperty('--color__cuarto', '#be5d80');
        color.style.setProperty('--color__neutro__claro', '#fff');
        color.style.setProperty('--color__neutro__oscuro', '#000');
        color.style.setProperty('--color__terciario__transparente', '#E5E5E5AA');
    }

    function dark() {
        color.style.setProperty('--color__principal', '#000');
        color.style.setProperty('--color__principal__sombra', '#fff');
        color.style.setProperty('--color__secundario', '#ddd');
        color.style.setProperty('--color__terciario', '#E5E5E5');
        color.style.setProperty('--color__cuarto', '#be5d80');
        color.style.setProperty('--color__neutro__claro', '#d0d0d0');
        color.style.setProperty('--color__neutro__oscuro', '#5DBE9B');
        color.style.setProperty('--color__terciario__transparente', '#050505ff');
    }


    btnSwitch.addEventListener('click', () => {
        if (btnSwitch.classList.contains('active')) {
            light();
            btnSwitch.classList.remove('active');
            contentContainer.classList.remove("background__dark");
        } else {
            dark();
            btnSwitch.classList.add('active');
            contentContainer.classList.add("background__dark");
        }

        if (btnSwitch.classList.contains('active')) {
            localStorage.setItem('active', 'true');
        } else {
            localStorage.setItem('active', 'false');
        }
    })
}