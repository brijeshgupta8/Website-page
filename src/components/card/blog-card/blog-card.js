import Button from "../../buttons/button.js";

function BlogCard() {
    const template = `
    <article class="component blog-card fn-semi-bold" id="">
        <img alt="Blog Image" class="blog-img">
        <div class="heading">
            <p class="title">
            </p>
            <div class="action">
            </div>
        </div>
    </article>
    `;

    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('.component');
    
    const action_component = component.querySelector('.action');
    const btn_action = Button({
        type: 'n-icon',
        text: 'Read more',
        background: false
    });

    btn_action.render(action_component);
    
    const cont_title = component.querySelector('p.title');
    // const title = (title) => cont_title.textContent = title;

    const cont_img = component.querySelector('img.blog-img');
    // const img = (img) => cont_img.src = img;
    
    /**
     * 
     * @param {HTMLElement} parent 
     * @returns 
     */
    const render = (parent) => {
        if (!parent) return component;

        if (!parent.contains(component)) parent.appendChild(component);
    };

    const unrender = () => {
        const parent = component.parentElement;

        if (parent) parent.removeChild(component);
    };

    return {
        set title(title) { cont_title.textContent = title },
        set img(img) { cont_img.src = img },
        render,
        unrender
    };
};

export default BlogCard;