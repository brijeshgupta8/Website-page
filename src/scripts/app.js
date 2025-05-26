import '../styles/main.css';
import '../styles/landing-page.css';
import '../components/buttons/button.css';
import '../components/navbar/navbar.css';
import '../components/card/simple-card/simple-card.css';
import '../components/card/blog-card/blog-card.css';

import img_1 from '../assets/img/image-1.png';
import img_2 from '../assets/img/image-2.png';
import img_3 from '../assets/img/image-3.png';
import img_4 from '../assets/img/image-4.png';

import Navbar from "../components/navbar/navbar.js";
import Button from '../components/buttons/button.js';
import BlogCard from '../components/card/blog-card/blog-card.js';

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
        type: 'n-icon',
        background: false
    });

    btn_action_reviews.render(action_reviews);
    img_reviews.src = img_1;

    const sect_blog = main.querySelector('#blog');
    const blog_articles = sect_blog.querySelector('#blog-articles');

    const blog_1 = BlogCard();
    blog_1.title = 'Creating Streamlined Safeguarding Processes with OneRen';
    blog_1.img = img_2;
    blog_1.render(blog_articles);
    
    const blog_2 = BlogCard();
    blog_2.title = 'What are your safeguarding responsibilities and how can you manage them?';
    blog_2.img = img_3;
    blog_2.render(blog_articles);
    
    const blog_3 = BlogCard();
    blog_3.title = 'Revamping the Membership Model with Triathlon Australia';
    blog_3.img = img_4;
    blog_3.render(blog_articles);


    const sect_demo = main.querySelector('#demo');
    const action_demo = sect_demo.querySelector('.action');
    const btn_action_demo = Button({
        type: 'n-icon',
        text: 'Get a Demo'
    })

    btn_action_demo.render(action_demo);
}();