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

/* Global variables & consts */
let selectedSkillsPane = 'short';


/**
 * Configure menus
 */
function configMenus() {
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

/**
 * Change selected skill pane
 * @param {String} selected the selected skill pane
 * @returns 
 */
function changeSkillsPane(selected) {
  const shortPane = document.getElementsByClassName('short')[0];
  const detailedPane = document.getElementsByClassName('long')[0];
  if (selected === selectedSkillsPane) return;
  selectedSkillsPane = selected;
  shortPane.classList.toggle('active');
  detailedPane.classList.toggle('active');
}



window.onload = () => {
  configMenus();

  const keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let n = 0;

  $(document).keydown((e) => {
    if (e.keyCode === keys[n++]) {
      if (n === keys.length) {
        console.log('joker')
        n = 0;
        return false;
      }
    }
    else {
      n = 0;
    }
  })
}