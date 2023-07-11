// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Tab from "/js/bootstrap/src/tab";
import Modal from "/js/bootstrap/src/modal";
import Collapse from "/js/bootstrap/src/collapse";
import Dropdown from "/js/bootstrap/src/dropdown";
import ScrollSpy from "js/bootstrap/src/scrollspy";

export default {
    Tab,
    Modal,
    Collapse,
    Dropdown,
    ScrollSpy
}

window.Collapse = Collapse;