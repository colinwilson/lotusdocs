// ToC Mobile Menu (Bootstrap 5 Dropdown with ScrollSpy)
var scrollArea = document.getElementById('content');
var tocBtn = document.getElementById('toc-dropdown-btn');
scrollArea.addEventListener("activate.bs.scrollspy", function(){
    var currentItem = document.querySelector('.dropdown-menu li > a.active').innerHTML;
    tocBtn.innerHTML = currentItem;
})