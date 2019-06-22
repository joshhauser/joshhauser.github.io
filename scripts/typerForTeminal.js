$(window).ready(function(){
    setTimeout(function(){
        var domainName = "<span style='color: #3fca78;'>user@network:</span><span style='color: #3f72ca'>~</span><span style='color: white'>$</span>"
        var typed = new Typed("#typed", {
            /* strings: [
            "^1000 ls ^500 <br>`test.txt<span style='padding-right: 20px'></span>helloWorld.txt<span style='padding-right: 20px'></span>index.php<br><br>" + domainName + "`"+
            "^500 cat index.php ^500 <br>`&lt;?php<br><span style='padding-right: 15px'></span>echo \"Hello\";<br>?&gt;<br><br>" + domainName + "`"+
            "^500 cd .. ^500 <br>`<span style='color: #3fca78;'>user@network:</span><span style='color: #3f72ca'>~/home</span><span style='color: white'>$</span>`"
            ], */

            strings: [
              "^1000 cat presentation.txt"+
              "^500 `<br><br>Prénom: Joshua<br>Nom: Hauser<br>Email: joshua.hauser@gmx.fr<br>Numéro: 06.51.02.60.66<br><br>" + domainName + "`"
              ],
            typeSpeed: 40
        }); 
    }, 1000);
});