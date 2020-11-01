const openingBtn= document.querySelector('.sidebar__hamburger');
const closingBtn= document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');

openingBtn.addEventListener("click", openSideBar);

function openSideBar(){
    sidebar.classList.add('sidebar--opened');
}

closingBtn.addEventListener('click', function(){
    sidebar.classList.remove('sidebar--opened');
})