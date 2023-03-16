/* function toggleMenu() {
  var x = document.getElementById("toggled-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.onclick = function(event){
  if (event.target && ((event.target.id && event.target.id !== "switch") || (event.target.class && event.target.class !== "burger"))){
    toggledMenu = document.getElementById("toggled-menu");
    if(toggledMenu.style.display === "block") toggledMenu.style.display = "none";
  }
} */

function configMenu() {
  const menus = document.getElementsByClassName('menu');
  for (let menu of menus) {
    const items = menu.childNodes;
    
    for (let item of items) {
      item.addEventListener('click', (e) => {
        const activeItem = menu.getElementsByClassName('active')[0];
        activeItem.classList.toggle('active');
        e.target.classList.toggle('active');
      })
    }
  }
}

window.onload = () => {
  configMenu();
}