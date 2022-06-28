	function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

	var fadeout_counter = 100;
	function radio_fadeout() {
	
	--fadeout_counter;
	vol = fadeout_counter/100
	 if (vol <= 0.1) {
        fadeout_counter = 0;
		sound.stop();
		//clearInterval(fadeoutTimer);
		
        //min++;
	 }
	 console.log(vol);
	 sound.volume(vol);
	 /*
        if (min >= 60) {
            min = 0;
			min_pre ="0";
            hrs++;
        }
		*/
	//if(fadeout_counter>60){}
	
	
	
  
}

        


function station(station,name)
{
	
	if(typeof  radioTimer !== 'undefined'){	
	clearInterval(radioTimer)

	}

	if(typeof fadeoutTimer !== 'undefined'){	
	//clearInterval(fadeoutTimer)
	fadeout_counter = 0;

	}
	
		var c = 0;
	var sec = 0;
	var min = 0;
	var hrs = 0;
	
			 const timerbuttonsclear = document.querySelectorAll(".playerclass");
	for (const playerclass of timerbuttonsclear) {
		//playerclass.style.display = "none";
		playerclass.remove();
	}
	
			 const timerbuttonsclear2 = document.querySelectorAll(".timerclass");
	for (const timerclass2 of timerbuttonsclear) {
		//timerclass.style.display = "none";
		timerclass2.remove();
	}

	if(typeof  sound !== 'undefined'){
		x= sound.playing()
		if(x){
			//sound.stop()
			//clearInterval(radioTimer)
			}
			else {
				localStorage.setItem("stationname", name);
				playit_pre(station);
				}
	} else {
		localStorage.setItem("stationname", name);
		playit_pre(station);
		}


}



function playit_pre(station,name)
{	

	if(typeof  radioTimer !== 'undefined'){	
	clearInterval(radioTimer)


	
	var c = 0;
	var sec = 0;
	var min = 0;
	var hrs = 0;
	}
	
		if(typeof  fadeoutTimer !== 'undefined'){	
	//clearInterval(fadeoutTimer)
	 fadeout_counter = 0;
	
		}
		
	  localStorage.setItem("radiostation", station);
	  sound = new Howl({
      src: [station],
	  html5: true, // A live stream can only be played through HTML5 Audio.
      format: ['mp3', 'aac']
    });
	
	
 
 	
	
	}
	
	
function playit(station,name)
{	
		
	  localStorage.setItem("radiostation", station);
	  sound = new Howl({
      src: [station],
	  html5: true, // A live stream can only be played through HTML5 Audio.
      format: ['mp3', 'aac']
    });
	
	
 	sound.play()
	
	
	}
	
function radiostop(daselement)
{
	sound.stop();
	clearInterval(radioTimer)
	
	//clearInterval(fadeoutTimer)
	fadeout_counter = 0;
	
	document.getElementById("timer").innerHTML = "00:00:00"; 
	
		 /*
		 const timerbuttonsclear = document.querySelectorAll(".timerclass");
	for (const timerclass of timerbuttonsclear) {
		timerclass.style.display = "none";
	}
	*/
	
	var c = 0;
	var sec = 0;
	var min = 0;
	var hrs = 0;

	
}

var c = 0;
var sec = 0;
var min = 0;
var hrs = 0;
var sec_pre = "0";
var min_pre = "0";
var hrs_pre = "0";

function radiocounter() {
	
	++c;
	sec = c
	 if (sec >= 60) {
        c = 0;
		sec_pre = "0";
        min++;
	 }
        if (min >= 60) {
            min = 0;
			min_pre ="0";
            hrs++;
        }
	if(c>60){}
	
	
	 if (sec >= 10) {sec_pre = ""}
	 if (min >= 10) {min_pre = ""}
	 if (hrs >= 10) {hrs_pre = ""}
	 if (sec >= 60) {sec_pre ="0"; sec = "0";}
	
	var output = hrs_pre+hrs+":"+min_pre+min+":"+sec_pre+sec
	
  
  //document.getElementById("timer").innerHTML = output
  
  			 const timerbuttonsclear3 = document.querySelectorAll(".timerclass");
	for (const timerclass3 of timerbuttonsclear3) {
		timerclass3.innerHTML = output
		
	}
  
}

function playitnow(daselement)
{
		document.getElementById("stationname_pre").style.display = "none";
		document.getElementById("stationname").style.display = "block";
		document.getElementById("stationname").innerHTML = localStorage.getItem("stationname"); 
		document.getElementById("timer").style.display = "block";

	
		if(typeof  sound !== 'undefined'){
		x= sound.playing()
		
		if(x){
			//sound.stop()
			}
			else {
				
				sound.play();
				//fadeoutTimer =	setInterval(radio_fadeout, 60)
				radioTimer = setInterval(radiocounter, 1000)
				}
	} else {
		sound.play();
		//fadeoutTimer = setInterval(radio_fadeout, 1000)
		radioTimer = setInterval(radiocounter, 1000)
	
	
	}
}



function playpausedeactive()
{
	const playpausebuttons = document.querySelectorAll(".playpausebutton");
	for (const playpausebutton of playpausebuttons) {
		playpausebutton.style.display = "none";
	  //console.log('playpausebutton: ', playpausebutton);
	}
}

function volumechange(volume)
{
	if(typeof  sound !== 'undefined'){
		x= sound.playing()
		if(x){
			volume = volume/100;
			sound.volume(volume)
			console.log(volume);
			}
			
	} 
}


const anderen_kanal_auswaehlen = '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="sound.stop();playpausedeactive()">Ich möchte einen <b>anderen Kanal auswählen</b>.</span>'

const playbutton = '<svg xmlns=\\"http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 30.051 30.051" style="" xml:space="preserve" id="playbutton" class="playerbutton"  onclick="playitnow(this);"><g><g xmlns="http://www.w3.org/2000/svg"><path d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z" fill="#000000" data-original="#000000" class=""></path><path d="M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021   C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518   c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z" fill="#000000" data-original="#000000" class=""></path></svg>';

const pausebutton = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 271.953 271.953" id="pausebutton" style="" xml:space="preserve" class="playerbutton" onclick="radiostop(this);"><g><g xmlns="http://www.w3.org/2000/svg"><g><path style="" d="M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977    S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22    s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z" fill="#010002" data-original="#010002" class=""></path><path style="" d="M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598    c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z" fill="#010002" data-original="#010002" class=""></path><path style="" d="M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598    S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z" fill="#010002" data-original="#010002" class=""></path></g></g></svg>';

const volumeslider = '<input type="range" min="1" max="100" value="100" class="slider" id="myRange" oninput="volumechange(this.value);">';

const text_playpausebutton_alt = '<div class="w3-container player"><div class="w3-bar"><p id="stationname"></p>'+playbutton+pausebutton+'<p></p><p id="timer">timer</p><p id="timer">Der Radiostream steht für dich bereit.</p></div> </div>'



const timer_output = '<p id="timer" class="timerclass" style="">00:00:00</p>'
const stationname_output = '<p id="stationname_pre">Der Radiostream steht bereit.</p><h3 id="stationname" style="display:none;"></h3>'

const playerdiv = '<table style="text-align: left; width: 100px;" border="0"  cellpadding="2" cellspacing="2">   <tbody>     <tr>       <td colspan="2" rowspan="1" align="center"  valign="middle">'+stationname_output+'</td>     </tr>     <tr>       <td align="center" valign="middle">'+playbutton+'</td>       <td align="center" valign="middle">'+pausebutton+'</td>     </tr>     <tr>       <td align="center" valign="middle">'+timer_output+'</td>       <td align="center" valign="middle">'+volumeslider+'</td>     </tr>   </tbody> </table>';

const text_playpausebutton = '<p id="playbutton"></p><div class="w3-container player playerclass">'+playerdiv+'</div>'; 


/*
<div class="w3-bar"><p id="stationname"></p>'+playbutton+pausebutton+'<p></p><p id="timer">timer</p><p id="timer">Der Radiostream steht für dich bereit.</p></div> </div>'
*/
const text_stationclick = '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\''

const radio_after = [
					{
					text: 'Ich möchte das Radio laufen lassen und zurück <b>zum Hauptmenü</b>.',
					next: 'frage1'
					},
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="sound.stop();playpausedeactive()">Ich möchte das <b>Radio beenden</b>.</span>',
					next: 'radio_hoeren_abbruch'
					}
					]




chat.radio_intro = {
	text: 'Au ja, lass uns ein bisschen Musik hören 😍',
	next: 'radio_kategorie_wahl'
  
}

chat.radio_kategorie_wahl = {
	text: 'Nach was ist dir gerade?',
	options: [
					{
					text: 'Elektronisch',
					next: 'radio_genre_elektronisch'
					},
					{
					text: 'Radiosender',
					next: 'radio_genre_radiosender'
					},
					{
					text: '<span style="color:rgba(0,0,0,0.4)">(Mehr Genres in Kürze)</span>',
					next: 'radio_genre_comingsoon'
					},
				]
}

chat.radio_genre_elektronisch = {
	text: 'Oh nice, Elektro. Dann such dir mal einen Sender aus 😘',
	options: [
					{
					text: 'Hirschmilch',
					next: 'station_hirschmilch'
					},

					{
					text: 'sunshine live (alle Kanäle)',
					next: 'station_sunshine_live'
					},
				]
}

//https://www.ndr.de/service/Die-Radio-Livestream-Links,livestreams101.html
chat.radio_genre_radiosender = {
	text: 'Alles klar, <b>Radiosender</b> sind gewählt. Dann such dir mal einen Sender aus 😘',
	options: [
					{
					text: 'Antenne Niedersachsen',
					next: 'station_antenne_niedersachsen'
					},
					{
					text: 'Bayerischer Rundfunk',
					next: 'station_bayerischer_Rundfunk'
					},
					{
					text: 'FFH',
					next: 'station_ffh'
					},
					{
					text: 'FFN',
					next: 'station_ffn'
					},
					{
					text: 'NDR',
					next: 'station_ndr'
					},
					{
					text: 'Radio MK',
					next: 'station_radio_mk'
					},
					{
					text: 'WDR',
					next: 'station_wdr'
					},
					
				]
}

chat.radio_genre_comingsoon = {
	text: 'Mehr Genres und Stationen folgen bald 😇',
	next: 'radio_hoeren_abbruch'
				
}


chat.radio_hoeren_abbruch = {
	text: 'Okay, Wohin soll es gehen?',
	options: [
					{
					text: 'Zeig mir nochmal die <b>Kategorien</b>, bitte.',
					next: 'radio_kategorie_wahl'
					},
					{
					text: 'Danke, aber für heute habe ich genug Radio gehört.',
					next: 'radio_exit'
					},
				]
}

chat.radio_exit = {
	text: 'Danke fürs Hören ^^',
	next: 'frage_beenden'
}


/*
Sources:
http://stream.antenne.com/
https://www.br.de/unternehmen/inhalt/technik/nutzung-mp3-livestreams-100.html
https://www.ffh.de/musik/webradio/stream-adressen.html
https://www.ffn.de/musik/streams/
https://www.ndr.de/service/Die-Radio-Livestream-Links,livestreams101.html
https://www.radiomk.de/der-sender-ueber-uns/frequenzen-empfang.html
https://www.br.de/unternehmen/inhalt/technik/hilfe-livestreams-br100.html
https://stream.sunshine-live.de/

*/