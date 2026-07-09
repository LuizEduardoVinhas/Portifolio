
import {HomeScreen} from './src/home.js'
import {ContatoScreen} from './src/contato.js'


const routes = {
    home: HomeScreen,
    contato: ContatoScreen,
};

export function navigateTo(screenPlay,idParam = null) {
    const screen = routes[screenPlay];
    const appCont = document.getElementById("app");

    if(screen) {
        appCont.innerHTML = screen.render(idParam);
            if(screen.after_render) {
                screen.after_render(navigateTo,idParam)
            }
        }
    else {
        appCont.innerHTML = '<h2> Error </h2>'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonsMenu = document.querySelectorAll('.nav-links button[data-screen]');

    buttonsMenu.forEach(button => {
      button.addEventListener('click', () => {
        buttonsMenu.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const finalScreen = button.getAttribute('data-screen')
        navigateTo(finalScreen)
      });
    });

    navigateTo('home')
})