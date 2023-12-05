import { menuButton, menu } from "./config.mjs";

export const Menu = () => {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("show__menu");
    });
}