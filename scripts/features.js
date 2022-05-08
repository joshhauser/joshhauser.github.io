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
  const menu = document.getElementById('menu');
  const menuItems = menu.childNodes
  for (let i = 0; i < menuItems.length; i++) {
    console.log(menuItems)
    menuItems[i].addEventListener('click', (e) => {
      const activeItem = menu.getElementsByClassName('active')[0];
      activeItem.classList.toggle('active');
      console.log(e.target)
      e.target.classList.toggle('active');
    })
  } 
}

window.onload = () => {
  configMenu();
}