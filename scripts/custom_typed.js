$(window).ready(() => {
  let skills = new Typed("#typedSkills", {
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


  let introOffsetTop = document.getElementById("header").offsetTop;
  let domainName;
  let typed;

  $(window).scroll(() => {
    if (window.scrollY >= introOffsetTop && domainName === undefined && typed === undefined) {
  
      $(window).unbind("scroll");
      domainName = "<span style='color: #3fca78;'>user@network:</span><span style='color: #3f72ca'>~</span><span style='color: white'>$</span>"
      typed = new Typed("#typed", {
        strings: [
          "^1000 fetch introduction" +
          "^500 `<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.##%&#%#*/.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Joshua HAUSER</span>" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,,***///*(#/(/#(,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -------------" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.*/,..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....*,/,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Téléphone : </span><a style='color: white' href='tel:+33651026066'>06.51.02.60.66</a>" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Email : </span><a style='color: white' href='mailto:joshua.hauser@gmx.fr'>joshua.hauser@gmx.fr</a>" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,,.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Études : </span> ingénieur en informatique à l'ISTY" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.*,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Permis : </span>B" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.*,..../(*.&nbsp;&nbsp;&nbsp;*/%&,*.*/,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Dernier diplôme : </span>DUT Informatique" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,(,&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class='introductionLabel'>Poste actuel:</span> Développeur full-stack en stage chez ACENSI" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.,,,,,&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....&nbsp;&nbsp;..*,.......&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...,..&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;.*..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....,,**/(((*,.&nbsp;&nbsp;.&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..,....,.......&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<br>" +
          "&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;.......&nbsp;.....,.&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;...&nbsp;" +
          "<br><br>" +
          domainName + "`"
  
          /*<a href='mailto:joshua.hauser@gmx.fr'>joshua.hauser@gmx.fr</a><br>Numéro: <a href='tel:+33651026066'>06.51.02.60.66</a>*/
        ],
        typeSpeed: 40
      }); 
    }
  
  });
});

