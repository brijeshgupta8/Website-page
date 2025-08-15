import SVG from "../../scripts/svg.js";
import Button from "../buttons/button.js";

const Navbar = function () {
    const template = `
    <nav class="component navbar h-padding v-padding">
        <div class="wrapper">
            <div id="left">
                <div id="logo">
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="40" viewBox="0 0 300 40">
  <text x="0" y="28" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#263238">
    NineVector
  </text>
</svg>

                </div>
            </div>
            <div id="right">
                <ul class="" id="navigations">
                        <li class="navigation"><a href="#header">Home</a></li>
                        <li class="navigation"><a href="#feature-1">Features</a></li>
                        <li class="navigation"><a href="#community">Community</a></li>
                        <li class="navigation"><a href="#blog">Blog</a></li>
                        <li class="navigation"><a href="#pricing">Pricing</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('.component');
    const indicator = document.createElement('div');
    const cont_right = component.querySelector('#right');
    const ul_navigations = cont_right.querySelector('#navigations');
    const li_navigations = ul_navigations.querySelectorAll('li');
    const button = Button({
        text: 'Register Now',
        type: 'n-icon'
    });

    button.render(cont_right);
    ul_navigations.appendChild(indicator);
    indicator.setAttribute('id', 'indicator');
    li_navigations.forEach(navigation => HoverAnimation(navigation, indicator));

    Reactivity(component, button.render());

    /**
     * Renders the component.
     * @param {HTMLElement} parent (Optional) To where the component will be appended. 
     * @returns The component if no parent is provided. 
     */
    const render = (parent) => {
        if (!parent) return component;

        if (parent && !parent.contains(component)) parent.appendChild(component);
    };

    const unrender = () => {
        const parent = component.parentElement;

        if (parent) parent.removeChild(component);
    };

    return {
        render,
        unrender
    }
}();

/* Part of Hover Animation */
let timeoutId;
function removeIndicator() {
    timeoutId = setTimeout(() => {
        indicator.classList.remove('visible');
    }, 200);
};

/**
 * Adds animation when hovering on navigations
 * @param {HTMLUListElement} navigation 
 * @param {HTMLElement} indicator 
 */
function HoverAnimation(navigation, indicator) {
    navigation.addEventListener('mouseenter', (e) => {
        e.stopPropagation();

        const rect = navigation.getBoundingClientRect();
        const width = rect.width;
        const bottom = rect.bottom;
        const left = rect.left

        if (!indicator.classList.contains('visible')) {
            indicator.classList.add('visible');
        };

        const style = `width: ${width}px; top: ${bottom}px; left: ${left}px`;
        indicator.setAttribute('style', style);

        clearTimeout(timeoutId);
    });

    navigation.addEventListener('mouseleave', () => removeIndicator());
};

/**
 * 
 * @param {HTMLElement} component 
 */
function Reactivity(component, button) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    component.appendChild(overlay);

    const side_navigation = document.createElement('div');
    side_navigation.setAttribute('id', 'side-navigation');
    component.appendChild(side_navigation);

    const button_side = Button({
        type: 'icon',
        icon: SVG.chevron()
    });
    const button_side_close = Button({
        type: 'icon',
        icon: SVG.chevron()
    });

    button_side_close.render(side_navigation);
    button_side_close.render().setAttribute('id', 'close');

    const right = component.querySelector('#right');
    const navigations = right.querySelector('#navigations');
    const items = { navigation: navigations, button };
    let windowWidth = window.innerWidth;

    if (windowWidth <= 1020) {
        side_navigation.appendChild(items.navigation);
        side_navigation.appendChild(items.button);
        button_side.render(right);
    };

    button_side.render().addEventListener('click', (e) => {
        e.stopPropagation();

        document.body.style.height = '100dvh';
        document.body.style.overflowY = 'hidden';
        side_navigation.classList.add('show');
        overlay.classList.add('show');
    });

    button_side_close.render().addEventListener('click', (e) => {
        e.stopPropagation();

        document.body.style.height = '';
        document.body.style.overflowY = '';
        side_navigation.classList.remove('show');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', (e) => {
        e.stopPropagation();

        document.body.style.height = '';
        document.body.style.overflowY = '';
        side_navigation.classList.remove('show');
        overlay.classList.remove('show');
    })

    window.addEventListener('resize', (e) => {
        windowWidth = window.innerWidth;

        if (windowWidth <= 1020) {
            side_navigation.appendChild(items.navigation);
            side_navigation.appendChild(items.button);
            button_side.render(right);
        } else {
            right.appendChild(items.navigation);
            right.appendChild(items.button);
            button_side.unrender();
        };
    });
};

export default Navbar;