
import {HomeScreen} from './src/home.js'
import {ContatoScreen} from './src/contato.js'
import {ProjetosScreen} from './src/projetos.js'


const routes = {
    home: HomeScreen,
    contato: ContatoScreen,
    projetos: ProjetosScreen
};

export function navigateTo(screenPlay) {
    const screen = routes[screenPlay];
    const appCont = document.getElementById("app");

    if(screen) {
        appCont.innerHTML = screen.render();
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