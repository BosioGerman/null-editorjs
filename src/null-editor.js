import "./style.css"



/**
 * Null Plugin for EditorJs
 * For block only
 * ©2020 affandes@gmail.com
 *
 * @typedef {object} NullData
 * @description Data structure for null.
 *
 */

class NullEditor {
    /**
     * Create new plugin and init nothing
     */

    constructor() {
        console.log('Init nothing');
        this.content = null;
    }

    render() {
        this.content = document.createElement('div');
        this.content.classList.add(NullEditor.CLASS.content);
        return this.content;
    }

    save(content) {
        return {};
    }

    static get toolbox() {
        return {
            title: 'Null',
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n' +
                '</svg>'
        };
    }

    static get CLASS() {
        return {
            content: 'aff-null-content',
        };
    }

}

export default NullEditor;