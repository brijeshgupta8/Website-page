import SVG from '../../scripts/svg.js';

function Button({
    text = 'Button',
    type = 'normal',
    icon = SVG.arrow(),
    side = 'right'
} = {}) {
    const template = `
    <button type="button" class="component simple b-radius">
    </button>
    `;

    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('.component');

    switch (type) {
        case 'normal':
            NormalButton(component, text);
            break;
        case 'n-icon':
            NormalButton(component, text);
            IconButton(component, icon, side);
            break;
        case 'icon':
            IconButton(component, icon, side);
            break;
    };

    /**
     * Renders the component.
     * @param {HTMLElement} parent To where the component must be appended.
     * @returns The component if no parent. 
     */
    const render = (parent) => {
        if (!parent) return component;

        if (!parent.contains(component)) parent.appendChild(component);
    };

    /**
     * Unrenders the component.
     */
    const unrender = () => {
        const parent = component.parentElement;

        if (parent) parent.removeChild(component);
    };

    return {
        render,
        unrender
    };
};

/**
 * 
 * @param {HTMLButtonElement} component 
 * @param {String} text 
 */
function NormalButton(component, text) {
    const span_text = document.createElement('span');
    span_text.classList.add('text');
    component.appendChild(span_text);

    for (let index = 0; index < text.length; index++) {
        const span_letter = document.createElement('span');

        span_letter.classList.add('letter');
        span_letter.textContent = text.charAt(index);
        span_text.appendChild(span_letter);
    };

    TextAnimation(component);
};

/**
 * 
 * @param {HTMLButtonElement} component 
 * @param {String} icon 
 * @param {String} side 
 */
function IconButton(component, icon, side) {
    const span_icon = document.createElement('span');

    span_icon.classList.add('icon');
    span_icon.appendChild(icon);

    if (side === 'left') component.appendChild(span_icon);
    else component.prepend(span_icon);

    IconAnimation(component)
};

/**
 * 
 * @param {HTMLButtonElement} component 
 */
function TextAnimation(component) {
    component.addEventListener("mouseenter", (e) => {
        e.stopPropagation();

        const span_letters = component.querySelectorAll('.letter');

        span_letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('hover');
                setTimeout(() => {
                    letter.classList.remove('hover');
                }, (index + 1) * 50);
            }, (index + 1) * 50);
        });
    });

    component.addEventListener("focus", (e) => {
        e.stopPropagation();

        const span_letters = component.querySelectorAll('.letter');

        span_letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('hover');
                setTimeout(() => {
                    letter.classList.remove('hover');
                }, (index + 1) * 50);
            }, (index + 1) * 50);
        });
    });
};

/**
 * 
 * @param {HTMLButtonElement} component 
 */
function IconAnimation(component) {
    const span_icon = component.querySelector('.icon');

    component.addEventListener('mouseenter', (e) => {
        e.stopPropagation();

        span_icon.classList.add('hover');
        setTimeout(() => {
            span_icon.classList.remove('hover');
        }, 500);
    });

    component.addEventListener('focus', (e) => {
        e.stopPropagation();

        span_icon.classList.add('hover');
        setTimeout(() => {
            span_icon.classList.remove('hover');
        }, 500);
    });
};

export default Button;