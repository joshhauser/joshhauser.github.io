function toggleMenu() {
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
}