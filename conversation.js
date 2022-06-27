
function zufallszahl(){
	return(Math.floor(Math.random() * 100001));
}

function returnimg_unsplash()
{
zufallszahl2 =  zufallszahl();

return '<p>Hier ist ein Zufallsbild für dich.</p><iframe width="300" height="300" frameBorder="0" src="https://source.unsplash.com/random/300x300?&bla='+zufallszahl2+'" style="max-width:90%"></iframe><p>Noch eins?</p> ';
}

function returnimg_kitten()
{
zufallszahl2 =  zufallszahl();

return '<p>Hier ist ein Zufallsbild für dich.</p><iframe width="300" height="300" frameBorder="0" src="http://theoldreader.com/kittens/300/300" style="max-width:90%"></iframe>s<p>Noch eins?</p> ';
}

function random_greeting()
{
	var textArray = [
    'Awulawulawulawula!',
    'Wie macht der Fuchs?'
];
	return textArray[Math.floor(Math.random()*textArray.length)];
}



const zufallsbild_auswahl = [
            {
                text: 'Ein Zufallsbild von Unsplash.',
                next: 'zufallsbild_unsplash',
            },
			/*
		  {
                text: 'Ein zufälliges Bild einer <b>Katze</b>.',
                next: 'zufallsbild_kitten',
            },
			*/
			{
                text: 'Eigentlich ist mir gerade nicht danach, Bilder zu sehen.',
                next: 'frage_beenden'
            },			
		]

const chat = {
    1: {
        text: begruessung+', ich bin ein kleiner Fuchsbot 🦊+🤖',
        //text: random_greeting(),
        next: 'frage1'
        //next: 'station_ffn'
        
        
    },

    frage1: {
        text: 'Wie kann ich dir weiterhelfen? 😊',
        options: [
            {
                text: 'Wie wird das Wetter heute?',
                next: 'wetter'
            },
            {
                text: 'Wann geht heute die Sonne auf und unter?',
                next: 'sonnenzeiten'
            },
            {
                text: 'Ich brauche eine Karte.',
                next: 'karte_pre'
            },
          
            /*
			{
                text: 'Was kann ich hier machen?',
                next: 'antwort1_wasmachen'
            },
			*/	
			{
                text: 'Hast du Kochrezepte für mich?',
                next: 'rezepte_intro'
            },
			
			{
                text: 'Erzähl mir einen Witz.',
                next: 'witze'
            },
			{
                text: 'Ich möchte ein Quiz machen.',
                next: 'quiz_pre'
            },
			{
                text: 'Zeig mir ein zufälliges Bild.',
                next: 'zufallsbild'
            },
			{
                text: 'Ich möchte Radio hören.',
                next: 'radio_intro'
            },
			
			  {
                text: 'Ich möchte eine Nachricht verschlüsseln / entschlüsseln.',
                next: 'crypt_pre'
            },
			
			{
                text: 'Oh, eigentlich ist mir gar nicht so nach quatschen...',
                next: 'frage_beenden'
            },
			/*
            {
                text: 'Karte',
                url: '../'
            },
			*/
        ]
    },
	
	
	    karte_pre: {
        text: 'Okidokiloki, hier kommt die Karte 😃',
		next: 'karte'
		},

	    karte: {
        text: '<a href="karte/" target="_blank"> <button>Klicke hier für die Karte</button></a>',
		next: 'frage_beenden'
		},
	
	
	
	
	    frage_beenden: {
        //text: 'Kann ich dir noch weiter behilflich sein?',
        text: 'Kann ich dir vielleicht sonst noch irgendwie weiterhelfen?',
        options: [
            {
                text: 'Ja.',
                next: 'antwort_beenden_nein'
            },
            {
                text: 'Nein.',
                next: 'antwort_beenden_ja'
            },
			/*
            {
                text: 'Karte',
                url: '../'
            },
			*/
        ]
    },
	
	
	   antwort1_wasmachen: {
        text: 'Noch nicht ganz so viel 😅 Bisher kann ich dir das aktuelle Wetter nennen und habe schon erste Kochrezepte für dich. Außerdem kann ich dir ein paar Witze erzählen.',
		        options: [
            {
                text: 'Wie wird das Wetter?',
                next: 'wetter',
            },
		  {
                text: 'Hast du Kochrezepte für mich?',
                next: 'rezepte_pre',
            },
			{
                text: 'Erzähl mir einen Witz.',
                next: 'witze'
            },
		]
    },
    antwort_beenden_ja: {
        text: 'Okay, in Ordnung. '+verabschiedung
    },
    antwort_beenden_nein: {
        text: 'Juchu, danke 😊',
		next: 'frage1',
    },
	
	
	zufallsbild: {
        text: 'Welches Zufallsbild möchtest du sehen?',
	        options: zufallsbild_auswahl
    },
		

	zufallsbild_kitten: {
       
	   text:  returnimg_kitten(),
	   // text: '<p>Hier ist ein Zufallsbild von einer Katze für dich.</p><img src="http://theoldreader.com/kittens/300/300" style="max-width:90%"><p>Noch eins?</p>',
		        options: [
            {
                text: 'Ja, gerne.',
                next: 'zufallsbild_kitten',
            },
		  {
                text: 'Danke, das genügt.',
                next: 'zufallsbild_preexit',
            },
		]
    },

	zufallsbild_unsplash: {
        
		text:  returnimg_unsplash(),
		//text: '<p>Hier ist ein Zufallsbild für dich.</p><img src="https://source.unsplash.com/random/300x300" style="max-width:90%"><p>Noch eins?</p>',
		        options: [
            {
                text: 'Ja, gerne.',
                next: 'zufallsbild_unsplash',
            },
		  {
                text: 'Danke, das genügt.',
                next: 'zufallsbild_preexit',
            },
		]
    },

	zufallsbild_preexit: {
        text: 'Möchtest du ein anderes Zufallsbild?',
		        options: [
            {
                text: 'Klar, zeig mir nochmal bitte die Auswahl.',
                next: 'zufallsbild',
            },
		  {
                text: 'Nee, für heute reicht das, danke.',
                next: 'frage_beenden',
            },
		]
    },
	
	
		sonnenzeiten: {
        text: 'Die Sonnenzeiten für heute:<br><br>Sonnenaufgang: <b>'+sonnenaufgang+' Uhr</b><br>Sonnenuntergang: <b>'+sonnenuntergang+' Uhr</b><br><br>'+mondtext,
		//<br><br>Beachte, dass es zu Abweichungen kommen kann, je nach dem, wo du wohnst. Im Extremfall (von Südwesten zum Nordosten von Deutschland), sogar eine Abweichung von bis zu fast einer Stunde 😊',
		next: 'frage_beenden'
    },

	sonnenzeiten_pre: {
        text: 'Möchtest du ein anderes Zufallsbild?',
		        options: [
            {
                text: 'Klar, zeig mir nochmal bitte die Auswahl.',
                next: 'zufallsbild',
            },
		  {
                text: 'Nee, für heute reicht das, danke.',
                next: 'frage_beenden',
            },
		]
    },
	
	
	
	
	
	
}



/*
	function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
	//alert("okay");
}
*/





/*
Wetter nach Bundesländern
*/


