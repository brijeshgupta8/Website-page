import '../styles/main.css';
import '../styles/landing-page.css';
import '../components/buttons/button.css';
import '../components/navbar/navbar.css';

import Navbar from "../components/navbar/navbar.js";
import Button from '../components/buttons/button.js';

const App = function() {
    const body = document.body;
    const main = body.querySelector('main');
    const sect_header = main.querySelector('#header');
    const header_action = sect_header.querySelector('.action'); 

    const navbar = Navbar.render();
    main.prepend(navbar);

    const btn_header = Button({ text: 'Register' });
    btn_header.render(header_action);
}();