

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

chat.radio_genre_comingsoon = {
	text: 'Mehr Genres und Stationen folgen bald 😇',
	next: 'radio_hoeren_abbruch'
				
}


chat.station_hirschmilch = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\'https://hirschmilch.de:7001/chillout.mp3\');">Chillout</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\'https://hirschmilch.de:7001/electronic.mp3\');">Electronic</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\'https://hirschmilch.de:7001/prog-house.mp3\');">Prog-House</span>',
					next: 'station_hirschmilch_after'
					},	
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\'https://hirschmilch.de:7001/progressive.mp3\');">Progressive</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="station(\'https://hirschmilch.de:7001/psytrance.mp3\');">Psytrance</span>',
					next: 'station_hirschmilch_after'
					},
				]
}

chat.station_hirschmilch_after = {
	text: '<p>Okay, das Radio läuft 😎</p><button class="playpausebutton" id="playpause" style="background-color:transparent;border:none;" onclick="playitnow();">▶ / ⏹</button><p>',
	options: [
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="sound.stop();playpausedeactive()">Ich möchte einen <b>anderen Kanal auswählen</b>.</span>',
					next: 'station_hirschmilch'
					},
					{
					text: 'Ich möchte das Radio laufen lassen und zurück <b>zum Hauptmenü</b>.',
					next: 'frage1'
					},
					{
					text: '<span style="padding:0.3em;background-color:transparent;border:none;" onclick="sound.stop();playpausedeactive()">Ich möchte das <b>Radio beenden</b>.</span>',
					next: 'radio_hoeren_abbruch'
					},
				]
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