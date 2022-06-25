let quizfragen = [

    frage =
  {
	  F: "Wann schrie sie, laut Billy Idol, »Mehr, mehr, mehr!«",
	  "❌1": "Zwischen 1 und 2 Uhr.",
	  "❌2": "Zwischen 23 und 0 Uhr.",
	  "❌3": "Um kurz nach 7.",
	  "✔": "Zwischen 0 und 1 Uhr.",
  },
  
      frage =
  {
	  F: "Wann trafen sie sich, laut Roland Kaiser, täglich zum Kuchenessen?",
	  "❌1": "16:25",
	  "❌2": "18:00",
	  "❌3": "8:45",
	  "✔": "15:15",
  },
    {
	  F: "Wie schnell fuhr Harry Valentino in seinem Auto, als er in dem Lied »Im Wagen vor mir« unaufmerksam, dicht drängelnd und stalkend einer jungen Frau hinterherfuhr?",
	  "❌1": "20 km/h",
	  "❌2": "100 km/h",
	  "❌3": "80 km/h",
	  "✔": "90 km/h",
  },    
  
  {
	  F: "Was bedeuten die berühmten Worte von Julius Caesar »Alea iacta est« wörtlich?",
	  "❌1": "Die Entscheidung ist getroffen.",
	  "❌2": "So soll es sein.",
	  "❌3": "Das ist mein Urteil.",
	  "✔": "Der Würfel ist gefallen.",
  },
  {
	  F: "Welches Sternzeichen hat jemand, der am 15. Mai geboren wurde?",
	  "❌1": "Löwe",	
	  "❌2": "Waage",
	  "❌3": "Zwilling",
	  "✔": "Stier",
  },  
  {
	  F: "Wer erfand die Jeans?",
	  "❌1": "Tom Wrangler",	
	  "❌2": "Peter Diesel",
	  "❌3": "Tim Mustang",
	  "✔": "Levi Strauss",
  },
  {
	  F: "Wie hieß der erste Hund im Weltall?",
	  "❌1": "Nona",	
	  "❌2": "Nika",
	  "❌3": "Loki",
	  "✔": "Laika",
  },
  {
	  F: "Welcher vier Berge ist der höchste dieser vier Berge?",
	  "❌1": "Die Zugspitze ",	
	  "❌2": "Das Matterhorn",
	  "❌3": "Der Ätna",
	  "✔": "Der Montblanc",
  },
    {
	  F: "Wer erfand den Heißluftballon?",
	  "❌1": "Carl von Linné",	
	  "❌2": "Benjamin Franklin",
	  "❌3": "James Watt",
	  "✔": "Gebrüder Montgolfier",
  },
  
    {
	  F: "Welche vier Tiere ergeben die Bremer Stadtmusikanten?",
	  "❌1": "Krokodil, Hund, Pferd, Kanarienvogel",	
	  "❌2": "Storch, Hund, Biber, Katze",
	  "❌3": "Hund, Möwe, Maus, Kaninchen",
	  "✔": "Esel, Hund, Katze, Hahn",
  },
  
  /*
    {
	  F: "",
	  "❌1": "",	
	  "❌2": "",
	  "❌3": "",
	  "✔": "",
  },
  */
  
];

    chat.quiz_intro = {
        text: 'Wunderbar 😃 '+startquiz(),
		next: 'quiz1'
	}

var nummer = 0;
  
function startquiz()
{
	localStorage.setItem("punktestand", 0);
	return("Alles klar, dann starten wir mal das Quiz. "+quizfragen.length+" Fragen sind zu beantworten.<br>");
	//<br>Noch ein Hinweis: Die Spielpunkte werden aktuell nur gezählt, wenn du ganz genau auf den Text der Antworten drückst.");
}

function punktestand_plus()
{
	punkte = localStorage.getItem("punktestand");
	punkte = parseInt(punkte);
	punkte++;
	localStorage.setItem("punktestand",punkte);
	punkte = localStorage.getItem("punktestand");
	//alert(punkte);
	
}

function punktestand_minus()
{
	punkte = localStorage.getItem("punktestand");
	punkte = parseInt(punkte);
	//punkte--;
	//localStorage.setItem("punktestand",punkte);
	punkte = localStorage.getItem("punktestand");
	//alert(punkte);
	
}

function shuffleFragArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleFragArray(quizfragen);

quizfragen.forEach(aufdroeseln,nummer);

function antwort_ist_falsch()
{
	return "Die Antwort ist leider falsch.";
}

function antwort_ist_korrekt()
{
	return "Die Antwort ist korrekt.";
}

function backgroundtest(item)
{
	  var parent = item.parentNode;
	  parent.style.backgroundColor="#cc0000";
}




function aufdroeseln(item,nummer){
	
	nummer++;
		
	var frage1 = 
			{
                text: '<span style="cursor: help;padding:0.3em;" onclick="punktestand_minus()">'+item["❌1"]+'</span>',
                next: 'quiz'+nummer+'_falsch'
            }
		var frage2 = 
			{
                text: '<span style="cursor: help;padding:0.3em;" onclick="punktestand_minus()">'+item["❌2"]+'</span>',
                next: 'quiz'+nummer+'_falsch'
            }
		var frage3 = 
			{
                text: '<span style="cursor: help;padding:0.3em;" onclick="punktestand_minus()">'+item["❌3"]+'</span>',
                next: 'quiz'+nummer+'_falsch'
            }
		var frage4 = 
			{
              text: '<span style="cursor: help;padding:0.3em;" onclick="punktestand_plus()">'+item["✔"]+'</span>',
                //text: '<span class="antwortbutton" style="cursor: help;padding:0.3em;" onclick="backgroundtest(this)">'+item["K"]+'</span>',
                next: 'quiz'+nummer+'_korrekt'
            }				
			
		
fragarray = [frage1,frage2,frage3,frage4]
shuffleFragArray(fragarray);

	chat["quiz"+nummer] = {   text: 'Frage '+nummer+' von '+quizfragen.length+':<br>'+item["F"],
        options: [
            fragarray[0],fragarray[1],fragarray[2],fragarray[3], { text: '<span style="color:rgba(0,0,0,0.4)">(Quiz abbrechen)</span>', next: 'quizende' } 
		]
	}
	
	if(nummer<quizfragen.length){
		
	chat["quiz"+nummer+"_falsch"] = { text: antwort_ist_falsch(), next: 'quiz'+(nummer+1) } 
	chat["quiz"+nummer+"_korrekt"] = { text: antwort_ist_korrekt(), next: 'quiz'+(nummer+1)  } 

	}
	else 
	{
		chat["quiz"+nummer+"_falsch"] = { text: antwort_ist_falsch(), next: 'quizende_pre' } 
	chat["quiz"+nummer+"_korrekt"] = { text: antwort_ist_korrekt(), next: 'quizende_pre'  } 
	}
	
}

chat.quizende_pre = {
        text: 'Möchtest du nun den Punktestand erfahren?<p id="gesamtpunktzahl"><button onclick="punktestand_ergebnis()">dann klick hier</button></p>',
		next: 'quizende'
		 
    }
	
function punktestand_ergebnis()
{
	punkte = localStorage.getItem("punktestand");
	punkte = parseInt(punkte);
	//alert(punkte);
	document.getElementById("gesamtpunktzahl").innerHTML = "Gesamtpunktzahl: "+punkte+"<br>"+"Fragen: "+quizfragen.length;
}	

chat.quizende = {
        text: 'Vielen Dank, dass du am Quiz teilgenommen hast. Bald kommen bestimmt noch mehr Fragen dazu.',
		next: 'frage_beenden'
		/*
		<br><br>Möchtest du das gleiche Quiz noch einmal von vorne spielen?',
		 options: [
		  {
        text: 'Ja, gerne.',
		next: 'quiz_intro'
		 },
		 		  {
        text: 'Nein danke, das genügt.',
		next: 'frage_beenden'
		 }
		  ]	
		  */
    }	






	
	
