<?php 
$uniqid = uniqid();?><!DOCTYPE html>
<html lang="de">
<title>Fuchsbot</title>
<!-- 
		Thx, Peekobot! 
		https://github.com/Peekobot/peekobot
		https://twitter.com/magicroundabout/
-->
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, max-image-preview:none, notranslate" />
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦊'</text></svg>">
<!--<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">-->
<link rel="stylesheet" href="vonextern/w3.css">
<meta charset="utf-8">
 <!-- Peekobot custom properties (CSS variables) - set these! -->
    <style>
        :root {
            --peekobot-height: 80vh;
            --peekobot-avatar: url();
        }
    </style>
    <!-- Peekobot styles -->
    <link rel="stylesheet" href="peekobot.css?decache=<?php echo $uniqid; ?>">
<body>

    <div id="peekobot-container">
        <div id="peekobot-inner">
            <div id="peekobot"></div>
        </div>
    </div>
  


<script>
function randomnr()
{
	return Math.floor(Math.random() * 100000);
}



function wetterget(bundesland)
{
	randomnummer = randomnr();
	return('<button id="wetterbutton'+randomnummer+'" onclick="wetterget2(&apos;'+bundesland+'&apos;,&apos;'+randomnummer+'&apos;)">Klick hier, um die Wetterinfos abzurufen</button><p id="info'+randomnummer+'">Falls das Wetter nicht angezeigt wird, wähle ein anderes Bundesland oder lade die Seite neu.</p><div id="wettershow'+randomnummer+'"></div>');
	//return(wetterget2("ni"));
}


	function wetterget2(bundesland,randomnummer)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "vonextern/dwd_fuer_peekobot.php?bundesland="+bundesland, false ); // false for synchronous request
    xmlHttp.send( null );
    //return xmlHttp.responseText;
	var info = "info"+randomnummer;
	var wetterbutton = "wetterbutton"+randomnummer;
	var wettershow = "wettershow"+randomnummer;
	//alert(wettershow);
	document.getElementById(info).style.display="none";
	document.getElementById(wetterbutton).style.display="none";
	document.getElementById(wettershow).innerHTML = xmlHttp.responseText;
	//alert("okay");
}


function zufallszahl(){
	return(Math.floor(Math.random() * 100001));
}


var zahl = 0;





var datum = new Date()
var stunde = datum.getHours()
var begruessung = "Hallo und guten Tag";
if(stunde>=0 && stunde<=3){begruessung = "Hallo";}
if(stunde>=4 && stunde<=11){begruessung = "Hallo und guten Morgen";}
if(stunde>=12 && stunde<=14){begruessung = "Hallo und guten Mittag";}
if(stunde>=15 && stunde<=17){begruessung = "Hallo und guten Nachmittag";}
if(stunde>=18 && stunde<=23){begruessung = "Hallo und guten Abend";}

var verabschiedung = "Hab noch einen schönen Tag 😊";
if(stunde>=0 && stunde<=3){verabschiedung = "Hab noch eine gute Nacht 😊";}
if(stunde>=4 && stunde<=11){verabschiedung = "Hab noch einen guten Start in den Tag 😊";}
if(stunde>=12 && stunde<=14){verabschiedung = "Hab noch einen schönen Mittag 😊";}
if(stunde>=15 && stunde<=17){verabschiedung = "Hab noch einen schönen Nachmittag 😊";}
if(stunde>=18 && stunde<=23){verabschiedung = "Hab noch einen schönen Abend 😊";}



</script>

<script src="vonextern/suntimes.js?decache=<?php echo $uniqid; ?>"></script>
<script src="vonextern/moontimes.js?decache=<?php echo $uniqid; ?>"></script>

<script src="conversation.js?decache=<?php echo $uniqid; ?>"></script>
<script src="rezepte.js?decache=<?php echo $uniqid; ?>"></script>
<script src="witze.js?decache=<?php echo $uniqid; ?>"></script>
<!--<script src="gedichte.js?decache=<?php echo $uniqid; ?>"></script>-->
<script src="radio.js?decache=<?php echo $uniqid; ?>"></script>
<script src="vonextern/howler.core.js?decache=<?php echo $uniqid; ?>"></script>


<script type="text/javascript" src="vonextern/alphacrypt2/alphac.js?decache=<?php echo $uniqid; ?>"></script>
<script type="text/javascript" src="vonextern/alphacrypt2/md5.js?decache=<?php echo $uniqid; ?>"></script>
<script type="text/javascript" src="vonextern/alphacrypt2/timer.js?decache=<?php echo $uniqid; ?>"></script>
<script type="text/javascript">
function process(on) {
var fe = document.fe;
var ke = fe.key.value;
var re = fe.re;
var f = timer(function() {
re.value = alphac(re.value, ke, md5(ke), on)
});
var t = f();
var d = re.value.length;
var r = Math.round(d / t * 1000);
fe.time.value = r + 'B/s ' + t + 'ms ' + d + 'B';
}
</script>
<script src="cryptit.js?decache=<?php echo $uniqid; ?>"></script>


<script src="addons/quiz/quiz_de.js?decache=<?php echo $uniqid; ?>"></script>


<script src="peekobot.js?decache=<?php echo $uniqid; ?>"></script>

	
</body>
</html>