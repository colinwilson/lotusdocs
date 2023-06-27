// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Tab from "/js/bootstrap/src/tab";
import Modal from "/js/bootstrap/src/modal";
import Collapse from "/js/bootstrap/src/collapse";

export default {
    Tab,
    Modal,
    Collapse
}

const search = document.getElementById('flexsearch');

const flexsearchContainer = document.getElementById('FlexSearchCollapse');

const hideFlexsearchBtn = document.getElementById('hideFlexsearch');

const configObject = { toggle: false }
const flexsearchContainerCollapse = new Collapse(flexsearchContainer, configObject) // initialized with no keyboard

if (search !== null) {
    document.addEventListener('keydown', inputFocus);
    flexsearchContainer.addEventListener('shown.bs.collapse', function () {
        search.focus();
    });
}

hideFlexsearchBtn.addEventListener('click', () =>{
    flexsearchContainerCollapse.hide()
})

function inputFocus(e) {
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        flexsearchContainerCollapse.toggle();
    }
    if (e.key === 'Escape' ) {
        search.blur();
        suggestions.classList.add('d-none');
    }
};