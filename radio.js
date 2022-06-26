

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
					text: 'Pop',
					next: 'radio_genre_pop'
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
chat.radio_genre_pop = {
	text: 'Alles klar, Pop ist gewählt. Dann such dir mal einen Sender aus 😘',
	options: [
					{
					text: 'NDR 1',
					next: 'station_ndr1'
					},
					{
					text: 'NDR 1 Welle Nord',
					next: 'station_ndr1_wellenord'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr903/hamburg/mp3/128/stream.mp3\');">NDR 90,3</span>',
					next: 'station_ndr903_after'
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
					text: text_stationclick+'https://hirschmilch.de:7001/chillout.mp3\');">Chillout</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: text_stationclick+'https://hirschmilch.de:7001/electronic.mp3\');">Electronic</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: text_stationclick+'https://hirschmilch.de:7001/prog-house.mp3\');">Prog-House</span>',
					next: 'station_hirschmilch_after'
					},	
					{
					text: text_stationclick+'https://hirschmilch.de:7001/progressive.mp3\');">Progressive</span>',
					next: 'station_hirschmilch_after'
					},
					{
					text: text_stationclick+'https://hirschmilch.de:7001/psytrance.mp3\');">Psytrance</span>',
					next: 'station_hirschmilch_after'
					},
				]
}

chat.station_ndr1 = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1niedersachsen/braunschweig/mp3/128/stream.mp3\');">NDR 1 Niedersachsen - Region Braunschweig</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1niedersachsen/hannover/mp3/128/stream.mp3\');">NDR 1 Niedersachsen - Region Hannover</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1niedersachsen/lueneburg/mp3/128/stream.mp3\');">NDR 1 Niedersachsen - Region Lüneburg</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1niedersachsen/oldenburg/mp3/128/stream.mp3\');">NDR 1 Niedersachsen - Region Oldenburg</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1niedersachsen/osnabrueck/mp3/128/stream.mp3\');">NDR 1 Niedersachsen - Region Osnabrück</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1radiomv/greifswald/mp3/128/stream.mp3\');">NDR 1 Radio MV - Region Greifswald</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1radiomv/neubrandenburg/mp3/128/stream.mp3\');">NDR 1 Radio MV - Region Neubrandenburg</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1radiomv/rostock/mp3/128/stream.mp3\');">NDR 1 Radio MV - Region Rostock</span>',
					next: 'station_ndr1_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1radiomv/schwerin/mp3/128/stream.mp3\');">NDR 1 Radio MV - Region Schwerin</span>',
					next: 'station_ndr1_after'
					},
				]
}







chat.station_ndr1_wellenord = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1wellenord/kiel/mp3/128/stream.mp3\');">NDR 1 Welle Nord - Region Kiel</span>',
					next: 'station_ndr1_wellenord_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1wellenord/flensburg/mp3/128/stream.mp3\');">NDR 1 Welle Nord - Region Flensburg</span>',
					next: 'station_ndr1_wellenord_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1wellenord/heide/mp3/128/stream.mp3\');">NDR 1 Welle Nord - Region Heide</span>',
					next: 'station_ndr1_wellenord_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1wellenord/luebeck/mp3/128/stream.mp3\');">NDR 1 Welle Nord - Region Lübeck</span>',
					next: 'station_ndr1_wellenord_after'
					},
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr1wellenord/norderstedt/mp3/128/stream.mp3\');">NDR 1 Welle Nord - Region Norderstedt</span>',
					next: 'station_ndr1_wellenord_after'
					},
					
				]
}

chat.station_ndr903 = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
					{
					text: text_stationclick+'http://icecast.ndr.de/ndr/ndr903/hamburg/mp3/128/stream.mp3\');">NDR 90,3</span>',
					next: 'station_ndr903_after'
					},
					

				]
}

chat.station_hirschmilch_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: 'station_hirschmilch'
					}]).concat(radio_after)
}

chat.station_ndr1_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: 'station_ndr1'
					}]).concat(radio_after)
}

chat.station_ndr903_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: 'station_ndr903'
					}]).concat(radio_after)
}

chat.station_ndr1_wellenord_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: 'station_ndr1_wellenord'
					}]).concat(radio_after)
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