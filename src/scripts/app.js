import '../styles/main.css';
import '../styles/responsive-landing-page.css';
import '../components/buttons/button.css';
import '../components/navbar/responsive-navbar.css';
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

        // Helper to show form
        function showRegisterForm() {
            const form = document.getElementById('register-form');
            if (form) form.style.display = 'block';
        }

        // Create register form HTML directly
        const formHTML = `
            <form id="register-form" class="service-form" action="https://formsubmit.co/atlearning123brijesh@gmail.com" method="POST" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#fff; padding:2rem; box-shadow:0 2px 16px rgba(0,0,0,0.15); z-index:1000; border-radius:8px; min-width:300px;">
                <h2 style="margin-bottom:1rem;">Register Your Interest</h2>
                
                <!-- Spam Protection -->
                <input type="text" name="_honey" style="display: none;">
                
                <!-- Redirect after submission -->
                <input type="hidden" name="_next" value="/thank-you.html">
                
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required style="width:100%;margin-bottom:1rem;padding:0.5rem;border:1px solid #ddd;border-radius:4px;">

                <label for="email">Email (optional)</label>
                <input type="email" id="email" name="email" style="width:100%;margin-bottom:1rem;padding:0.5rem;border:1px solid #ddd;border-radius:4px;">

                <label for="contact">Contact Number*</label>
                <input type="tel" id="contact" name="contact" required style="width:100%;margin-bottom:1rem;padding:0.5rem;border:1px solid #ddd;border-radius:4px;">

                <label for="business">Business Name*</label>
                <input type="text" id="business" name="business" required style="width:100%;margin-bottom:1rem;padding:0.5rem;border:1px solid #ddd;border-radius:4px;">

                <button type="submit" style="width:100%;background:#4CAF50;color:#fff;padding:0.75rem;border:none;border-radius:4px;cursor:pointer;font-size:1rem;">Submit</button>
                <button type="button" id="close-form" style="width:100%;margin-top:0.5rem;background:#eee;color:#333;padding:0.5rem;border:none;border-radius:4px;cursor:pointer;">Cancel</button>
            </form>
        `;

        // Inject form into container
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.innerHTML = formHTML;
            
            // Set up event handlers
            const form = document.getElementById('register-form');
            const closeBtn = document.getElementById('close-form');
            
            if (closeBtn) {
                closeBtn.onclick = () => {
                    if (form) form.style.display = 'none';
                };
            }
            
            // FormSubmit will handle form submission - no custom JavaScript needed
        }

        const navbar = Navbar.render();
        body.prepend(navbar);

        // Connect Register button in navbar to form
        setTimeout(() => {
            const registerBtn = navbar.querySelector('button');
            if (registerBtn && registerBtn.textContent.includes('Register')) {
                registerBtn.onclick = () => {
                    const form = document.getElementById('register-form');
                    if (form) form.style.display = 'block';
                };
            }
        }, 100);

        // ...existing code for other buttons and sections...
        const sect_feature_1 = main.querySelector('#feature-1');
        const action_feature_1 = sect_feature_1.querySelector('.feature .action');
        const btn_action_feature_1 = Button({ text: 'Learn More' });
        btn_action_feature_1.render(action_feature_1);

        const sect_feature_2 = main.querySelector('#feature-2');
        const action_feature_2 = sect_feature_2.querySelector('.feature .action');
        const btn_action_feature_2 = Button({ text: 'Learn More' });
        btn_action_feature_2.render(action_feature_2);

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
        blog_1.title = 'How a Modern Website Can Transform Your Business';
        blog_1.img = img_2;
        blog_1.render(blog_articles);

        const blog_2 = BlogCard();
        blog_2.title = 'Social Media Strategies to Grow Your Brand';
        blog_2.img = img_3;
        blog_2.render(blog_articles);

        const blog_3 = BlogCard();
        blog_3.title = 'Digital Advertising: Reaching the Right Customers';
        blog_3.img = img_4;
        blog_3.render(blog_articles);

        const sect_demo = main.querySelector('#demo');
        const action_demo = sect_demo.querySelector('.action');
        const btn_action_demo = Button({
            type: 'n-icon',
            text: 'Get a Demo'
        });

        btn_action_demo.render(action_demo);
}();