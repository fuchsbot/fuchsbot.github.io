
function station(station)
{
	
	if(typeof  sound !== 'undefined'){
		x= sound.playing()
		if(x){
			sound.stop()
			}
			else {playit(station);}
	} else {playit(station);}

}

function playit(station)
{
		
	  localStorage.setItem("radiostation", station);
	  sound = new Howl({
      src: [station],
	  html5: true, // A live stream can only be played through HTML5 Audio.
      format: ['mp3', 'aac']
    });
 
 	sound.play()
	
	}
	
function radiostop()
{
	sound.stop();
}

function playitnow()
{
		if(typeof  sound !== 'undefined'){
		x= sound.playing()
		if(x){
			sound.stop()
			}
			else {sound.play();}
	} else {sound.play();}
}

function playpausedeactive()
{
	const playpausebuttons = document.querySelectorAll(".playpausebutton");
	for (const playpausebutton of playpausebuttons) {
		playpausebutton.style.display = "none";
	  //console.log('playpausebutton: ', playpausebutton);
	}
}


const anderen_kanal_auswaehlen = '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="sound.stop();playpausedeactive()">Ich möchte einen <b>anderen Kanal auswählen</b>.</span>'

const text_playpausebutton = '<p>Okay, das Radio läuft 😎</p><button class="playpausebutton" id="playpause" style="background-color:transparent;border:none;" onclick="playitnow();">▶ / ⏹</button><p>'

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
https://www.ndr.de/service/Die-Radio-Livestream-Links,livestreams101.html
http://stream.antenne.com/

*/