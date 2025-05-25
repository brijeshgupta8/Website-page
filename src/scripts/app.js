import '../styles/main.css';
import '../styles/landing-page.css';
import '../components/buttons/button.css';
import '../components/navbar/navbar.css';
import '../components/card/simple-card/simple-card.css';

import img_1 from '../assets/img/image-1.png';

import Navbar from "../components/navbar/navbar.js";
import Button from '../components/buttons/button.js';

const App = function() {
    const body = document.body;
    const main = body.querySelector('main');
    const sect_header = main.querySelector('#header');
    
    const navbar = Navbar.render();
    body.prepend(navbar);
    
    const header_action = sect_header.querySelector('.action'); 
    const btn_header = Button({ text: 'Register' });
    btn_header.render(header_action);

    const sect_feature_1 = main.querySelector('#feature-1');
    const action_feature_1 = sect_feature_1.querySelector('.feature .action');
    const btn_action_feature_1 = Button({ text: 'Learn More' });
    btn_action_feature_1.render(action_feature_1); 

    const sect_reviews = main.querySelector('#reviews');
    const img_reviews = sect_reviews.querySelector('#img-review');
    const action_reviews = sect_reviews.querySelector('.action');
    const btn_action_reviews = Button({ 
        text: 'Meet all customers',
        type: 'n-icon' 
    });

    btn_action_reviews.render(action_reviews);
    img_reviews.src = img_1;

    const sect_demo = main.querySelector('#demo');
    const action_demo = sect_demo.querySelector('.action');
    const btn_action_demo = Button({
        type: 'n-icon',
        text: 'Get a Demo'
    })

    btn_action_demo.render(action_demo);
}();