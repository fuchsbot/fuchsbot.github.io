//https://schneide.blog/2018/08/08/decoding-non-utf8-server-responses-using-the-fetch-api/
function wetter(bundesland){
website = "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/text/vhdl13_"+bundesland+".html"
//website = "fetch-wetter.html"
let request = fetch(website)
  .then(response => response.arrayBuffer())
  .then(buffer => {
    let decoder = new TextDecoder("iso-8859-1");
    let text = decoder.decode(buffer);
	//text = text.slice(105);
	text = text.slice(130);
	
	x = document.getElementById("wetter")
	zufallszahl = Math.floor(Math.random() * 100001);
	x.id = "wetter"+zufallszahl;
	text= text.replace(/<pre/g,'<p');
	
	 const wetterbuttons = document.querySelectorAll(".wetterbutton");
	for (const wetterbutton of wetterbuttons) {
		wetterbutton.style.display = "none";
	}
	
	//console.log(text);
	document.getElementById("wetter"+zufallszahl).innerHTML = text;
    //handleText(text);
  });
  }
  

	  chat.wetter= {
        text: 'Von welchem Bundesland?',
        options: [
			
			{
                text: 'Baden-Württemberg',
                next: 'wetter_bw'
            },
		
		
			{
                text: 'Bayern',
                next: 'wetter_by'
            },	

			{
                text: 'Berlin',
                next: 'wetter_be'
            },					
			
			{
                text: 'Brandenburg',
                next: 'wetter_bb'
            },					
		
			{
                text: 'Bremen',
                next: 'wetter_hb'
            },

			{
                text: 'Hamburg',
                next: 'wetter_hh'
            },

			{
                text: 'Hessen',
                next: 'wetter_he'
            },		

			{
                text: 'Mecklenburg-Vorpommern',
                next: 'wetter_mv'
            },		

            {
                text: 'Nordrhein-Westfalen',
                next: 'wetter_nw'
            },  
			{
                text: 'Niedersachsen',
                next: 'wetter_ni'
            },
			
			{
                text: 'Rheinland-Pfalz',
                next: 'wetter_rp'
            },					
			
			{
                text: 'Saarland',
                next: 'wetter_sl'
            },					
			
			{
                text: 'Sachsen',
                next: 'wetter_sn'
            },			
			
			{
                text: 'Sachsen-Anhalt',
                next: 'wetter_st'
            },					
			
			{
                text: 'Schleswig-Holstein',
                next: 'wetter_sh'
            },		

			{
                text: 'Thüringen',
                next: 'wetter_th'
            },	

			

			/*
            {
                text: 'Karte',
                url: '../'
            },
			*/
        ]
    },

	
	chat.wetter_nw= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dweh\')"/>',
		next: 'wetter_after'
    },
	chat.wetter_ni= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwhg\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_hb= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwhg\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_sh= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwhh\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_hh= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwhh\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_st= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwlh\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_sn= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwlg\')"/>',
		next: 'wetter_after'
    },
    chat.wetter_th= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwli\')"/>',
		next: 'wetter_after'
    },
	   chat.wetter_by= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwmg\')"/>',
		next: 'wetter_after'
    },
	    chat.wetter_bw= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwsg\')"/>',
		next: 'wetter_after'
    },
		    chat.wetter_he= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwoh\')"/>',
		next: 'wetter_after'
    },
		    chat.wetter_rp= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwoi\')"/>',
		next: 'wetter_after'
    },
		    chat.wetter_sl= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwoi\')"/>',
		next: 'wetter_after'
    },
			    chat.wetter_bb= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwpg\')"/>',
		next: 'wetter_after'
    },
			    chat.wetter_be= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwpg\')"/>',
		next: 'wetter_after'
    },	
	chat.wetter_mv= {
        text: '<div id="wetter"></div><input type="button"  class="wetterbutton" value="Klick hier, um die Wetterinfos abzurufen" onclick="wetter(\'dwph\')"/>',
		next: 'wetter_after'
    },
	
	
	 chat.wetter_after= {
        text: 'Bitteschön, das Wetter 😃',
		next: 'frage_beenden'
		/*
        options: [
            {
                text: 'weiter',
                next: 'frage1',
            },
		]
		*/
    }