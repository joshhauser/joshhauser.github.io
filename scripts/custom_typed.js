$(window).ready(function(){
  setTimeout(function(){
    var domainName = "<span style='color: #3fca78;'>user@network:</span><span style='color: #3f72ca'>~</span><span style='color: white'>$</span>"
    var typed = new Typed("#typed", {
      strings: [
        "^1000 cat presentation.txt"+
        "^500 `<br><br>Prénom: Joshua<br>Nom: Hauser<br>Email: <a href='mailto:joshua.hauser@gmx.fr'>joshua.hauser@gmx.fr</a><br>Numéro: <a href='tel:+33651026066'>06.51.02.60.66</a><br><br>" + domainName + "`"
        ],
      typeSpeed: 40
    }); 
  }, 1000);

  var skills = new Typed("#typedSkills", {
    strings: [
      "^500 Python",
      "^500 Java",
      "^500 JavaScript",
      "^500 PHP",
      "^500 C"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    shuffle: true,
    loop: true
  })
});