<pre><?php
session_start();
$_SESSION['radioanzahl'] = 0;
/*
	Some fav tracks, heard in the radio
	Elegy - Robot Invasion
	Tacit - Dangerous Pollution
	Symphonix, DJ Fabio, Moon - Open Club (Original Mix)
	
	Skunk Anansie	Hedonism (Just Because You Feel)
	Bullet For My Valentine	Bittersweet Memories
	Gong Wah	This Life
	Jimmy Eat World	Lucky Denver Mint
	ZZ Top	- Got Me Under Pressure
	Kings Of Leon - Sex On Fire
	Franz Ferdinand No You Girls
	Greta Van Fleet - Lover, Leaver
	Foo Fighters - Long Road To Ruin
	Billy Talent - Hanging Out With All The Wrong People
	The Police - So Lonely
	The Gaslight Anthem - American Slang
	Tyler Leads - Call Of The Wild
	
	BIRGITTA FUCHS - SWINGING HARP (Komponiert von: Gorter, Gertraud)
	
	
	Ritmo & Rocky - Children Of God

	https://stream.antenne.com/
	https://www.br.de/unternehmen/inhalt/technik/nutzung-mp3-livestreams-100.html
	https://www.ffh.de/musik/webradio/stream-adressen.html
	https://www.ffn.de/musik/streams/
	https://www.ndr.de/service/Die-Radio-Livestream-Links,livestreams101.html
	https://www.radiomk.de/der-sender-ueber-uns/frequenzen-empfang.html
	
	
	
*/


define('station_antenne_niedersachsen', array(		
						"Antenne Niedersachsen" => "https://stream.antenne.com/70er/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen 80er Party" => "https://stream.antenne.com/80erparty/mp3-192/stream.antenne.com/play.m3u",
				
						"Antenne Niedersachen On Air" => "https://stream.antenne.com/antenne-nds/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen 80er" => "https://stream.antenne.com/antenne-nds-80er/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen 90er" => "https://stream.antenne.com/antenne-nds-90er/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Charts" => "https://stream.antenne.com/charts/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Dance" => "https://stream.antenne.com/dance/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Deutsch" => "https://stream.antenne.com/deutsch/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Entspannt" => "https://stream.antenne.com/entspannt/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Greatest Hits" =>
						"https://stream.antenne.com/greatesthits/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen HomeOffice" =>
						"https://stream.antenne.com/homeoffice/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Love" =>
						"https://stream.antenne.com/love/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Oldies" =>
						"https://stream.antenne.com/oldies/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Region 1" =>
						"https://stream.antenne.com/reg01/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Region 2" =>
						"https://stream.antenne.com/reg02/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Region 3" =>
						"https://stream.antenne.com/reg03/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Region 4" =>
						"https://stream.antenne.com/reg04/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Region 5" =>
						"https://stream.antenne.com/reg05/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Relax" =>
						"https://stream.antenne.com/relax/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Rock" =>
						"https://stream.antenne.com/rock/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Schlager" =>
						"https://stream.antenne.com/schlager/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Schützenfest" =>
						"https://stream.antenne.com/schuetzenfest/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen Völlig Verrückt" =>
						"https://stream.antenne.com/voelligverrueckt/mp3-192/stream.antenne.com/play.m3u",
						
						"Antenne Niedersachsen X-Mas" =>
						"https://stream.antenne.com/xmas/mp3-192/stream.antenne.com/play.m3u",

));


define('station_hirschmilch', array(		
					/*
						"Hirschmilch Chillout" => "https://hirschmilch.de/chillout/listen.pls",
						"Hirschmilch Electronic" => "https://hirschmilch.de/electronic/listen.pls",
						"Hirschmilch Prog-House" => "https://hirschmilch.de/prog-house/listen.pls",
						"Hirschmilch Progressive" => "https://hirschmilch.de/progressive/listen.pls",
						"Hirschmilch Psytrance" => "https://hirschmilch.de/psytrance/listen.pls",
					*/	
						"Hirschmilch Chillout" => "https://hirschmilch.de:7001/chillout.mp3",
						"Hirschmilch Electronic" => "https://hirschmilch.de:7001/electronic.mp3",
						"Hirschmilch Prog-House" => "https://hirschmilch.de:7001/prog-house.mp3",
						"Hirschmilch Progressive" => "https://hirschmilch.de:7001/progressive.mp3",
						"Hirschmilch Psytrance" => "https://hirschmilch.de:7001/psytrance.mp3",
));


define('station_ndr', array(		

						"NDR 1 Niedersachsen - Region Hannover" => 
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen.m3u",

						"NDR 1 Niedersachsen - Region Braunschweig" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen_bs.m3u",

						"NDR 1 Niedersachsen - Region Lüneburg" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen_lg.m3u",
						
						"NDR 1 Niedersachsen - Region Oldenburg" => "https://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen_ol.m3u",
						
						"NDR 1 Niedersachsen - Region Osnabrück" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1niedersachsen_os.m3u",
						
						"NDR 1 Radio MV - Region Schwerin" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1radiomv.m3u",

						"NDR 1 Radio MV - Region Greifswald" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1radiomv_hgw.m3u",

						"NDR 1 Radio MV - Region Rostock" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1radiomv_hro.m3u",

						"NDR 1 Radio MV - Region Neubrandenburg" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1radiomv_nb.m3u",
						
						"NDR 90,3" => 
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr903.m3u",

						"NDR 1 Welle Nord - Region Kiel" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord.m3u",

						"NDR 1 Welle Nord - Region Flensburg" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord_fl.m3u",

						"NDR 1 Welle Nord - Region Heide" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord_hei.m3u",

						"NDR 1 Welle Nord - Region Lübeck" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord_hl.m3u",

						"NDR 1 Welle Nord - Region Norderstedt" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr1wellenord_nor.m3u", 
						
						"NDR 2 - Niedersachsen" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr2.m3u",

						"NDR 2 - Hamburg" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr2_hh.m3u",

						"NDR 2 - Mecklenburg-Vorpommern" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr2_mv.m3u",

						"NDR 2 - Schleswig-Holstein" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndr2_sh.m3u",
						
						"NDR Kultur" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrkultur.m3u",

						"NDR Info - Niedersachsen" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo.m3u",
						
						"NDR Info - Hamburg" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo_hh.m3u",

						"NDR Info - Mecklenburg-Vorpommern" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo_mv.m3u",
						
						"NDR Info - Schleswig-Holstein" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo_sh.m3u",

						"NDR Info Spezial" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrinfo_spezial.m3u",
						
						"N-JOY" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/n-joy.m3u",

						"NDR Blue"  =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrblue.m3u",
						
						"NDR Schlager" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrschlager.m3u",
						
						"NDR 2 Soundcheck Neue Musik (montags) 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop15.m3u",

						"NDR 2 Soundcheck Neue Musik (dienstags) 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop16.m3u",

						"NDR 2 Soundcheck Neue Musik (mittwochs) 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop17.m3u",

						"Das NDR 2 Radiokonzert 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop11.m3u",

						"NDR 2 Peter Urban Show 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop18.m3u",

						"NDR 2 Soundcheck Neue Musik (freitags) 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop21.m3u",

						"NDR 2 Soundcheck Party 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop22.m3u",

						"NDR 2 Soundcheck Easy Sounds 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop23.m3u",

						"N-JOY Abstrait 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop25.m3u",

						"N-JOY Soundfiles Hip-Hop 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop6.m3u",

						"N-JOY Soundfiles Alternative 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop5.m3u",

						"N-JOY TOP 30 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop8.m3u",

						"N-JOY In The Mix 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop28.m3u",

						"N-JOY Pop 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop29.m3u",

						"N-JOY Morningshow 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop27.m3u",

						"NDR Blue Jazz Nacht 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop19.m3u",

						"NDR Blue Nachtclub 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop20.m3u",

						"NDR Kultur Belcanto 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop2.m3u",

						"Philipps Playlist - Musikalische Gedankenreisen 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop4.m3u",

						"NDR Kultur Neo 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop24.m3u",

						"NDR Kultur Play Jazz 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop31.m3u",

						"NDR 1 Radio MV Kulthitshow 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop3.m3u",

						"NDR 1 Niedersachsen TOP 15 Hitparade 🔁" =>
						"https://www.ndr.de/resources/metadaten/audio/m3u/ndrloop1.m3u",
						
));

define('station_radio_mk', array(							


						"Radio MK - Region Nord (Altena, Balve, Hemer, Iserlohn, Menden, Nachrodt-Wiblingwerde)" =>
						"https://stream.lokalradio.nrw/445429s",
						
						"Radio MK - Region Süd (Halver, Herscheid, Kierspe, Lüdenscheid, Meinerzhagen, Neuenrade, Plettenberg, Schalksmühle, Werdohl)" =>
						"https://stream.lokalradio.nrw/44542h2",

						"Radio MK - Dein 80er Radio" =>
						"https://stream.lokalradio.nrw/444zh4j",
						
						"Radio MK - Dein 90er Radio" =>
						"https://stream.lokalradio.nrw/444zkh2",
						
						"Radio MK - Dein DeutschPop Radio" =>
						"https://stream.lokalradio.nrw/444znvj",
						
						"Radio MK - Dein Weihnachts Radio" =>
						"https://stream.lokalradio.nrw/444zr82",
						
						"Radio MK - Dein Lounge Radio" =>
						"https://stream.lokalradio.nrw/444ztmj",
						
						"Radio MK - Dein Love Radio" =>
						"https://stream.lokalradio.nrw/444zwz2",
						
						"Radio MK - Dein Rock Radio" =>
						"https://stream.lokalradio.nrw/444zzcj",
						
						"Radio MK - Dein Schlager Radio" =>
						"https://stream.lokalradio.nrw/44523r2",
						
						"Radio MK - Dein Top40 Radio" =>
						"https://stream.lokalradio.nrw/445264j",
						
						"Radio MK - Dein Urban Radio" =>
						"https://stream.lokalradio.nrw/44528h2",
						
						"Radio MK - Dein Oldie Radio" =>
						"https://stream.lokalradio.nrw/44548ss",
						
						"Radio MK - Dein Karnevals-Radio" =>
						"https://stream.lokalradio.nrw/4454c69",
));

define('station_wdr', array(		

"1LIVE" =>
"https://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3",

"1LIVE DIGGI" =>
"https://wdr-1live-diggi.icecast.wdr.de/wdr/1live/diggi/mp3/128/stream.mp3",
"1LIVE PLAN B 🔁" =>
"https://wdr-1live-planb.icecast.wdr.de/wdr/1live/planb/mp3/128/stream.mp3",
"1LIVE DJ SESSION 🔁" =>
"https://wdr-1live-djsession.icecast.wdr.de/wdr/1live/djsession/mp3/128/stream.mp3",
"1LIVE NEU FÜR DEN SEKTOR 🔁" =>
"https://wdr-1live-neufuerdensektor.icecast.wdr.de/wdr/1live/neufuerdensektor/mp3/128/stream.mp3",
"1LIVE HIPHOP 🔁" =>
"https://wdr-1live-hiphop.icecast.wdr.de/wdr/1live/hiphop/mp3/128/stream.mp3",
"1LIVE SPECIAL 🔁" =>
"https://wdr-1live-specials.icecast.wdr.de/wdr/1live/specials/mp3/128/stream.mp3",
"1LIVE FIEHE 🔁" =>
"https://wdr-1live-fiehe.icecast.wdr.de/wdr/1live/fiehe/mp3/128/stream.mp3",
"WDR 2 (Rheinland) " =>
"https://wdr-wdr2-rheinland.icecast.wdr.de/wdr/wdr2/rheinland/mp3/128/stream.mp3",
"WDR 2 (Ostwestfalen-Lippe) " =>
"https://wdr-wdr2-ostwestfalenlippe.icecast.wdr.de/wdr/wdr2/ostwestfalenlippe/mp3/128/stream.mp3",
"WDR 2 (Münsterland) " =>
"https://wdr-wdr2-muensterland.icecast.wdr.de/wdr/wdr2/muensterland/mp3/128/stream.mp3",
"WDR 2 (Ruhrgebiet) " =>
"https://wdr-wdr2-ruhrgebiet.icecast.wdr.de/wdr/wdr2/ruhrgebiet/mp3/128/stream.mp3",
"WDR 2 (Rhein und Ruhr) " =>
"https://wdr-wdr2-rheinruhr.icecast.wdr.de/wdr/wdr2/rheinruhr/mp3/128/stream.mp3",
"WDR 2 (Bergisches Land) " =>
"https://wdr-wdr2-bergischesland.icecast.wdr.de/wdr/wdr2/bergischesland/mp3/128/stream.mp3",
"WDR 2 (Südwestfalen) " =>
"https://wdr-wdr2-suedwestfalen.icecast.wdr.de/wdr/wdr2/suedwestfalen/mp3/128/stream.mp3",
"WDR 2 (Aachen und Region) " =>
"https://wdr-wdr2-aachenundregion.icecast.wdr.de/wdr/wdr2/aachenundregion/mp3/128/stream.mp3",
"WDR 3 " =>
"https://wdr-wdr3-live.icecast.wdr.de/wdr/wdr3/live/mp3/128/stream.mp3",
"WDR 3 (mp3, 256 kBit/s)" =>
"https://wdr-wdr3-live.icecast.wdr.de/wdr/wdr3/live/mp3/256/stream.mp3",
"WDR 4 " =>
"https://wdr-wdr4-live.icecast.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3",
"WDR 5 " =>
"https://wdr-wdr5-live.icecast.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3",
"WDR COSMO " =>
"https://wdr-cosmo-live.icecast.wdr.de/wdr/cosmo/live/mp3/128/stream.mp3",
"WDR COSMO Al-Saut Al-Arabi [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-alsautalarabi.icecast.wdr.de/wdr/cosmo/alsautalarabi/mp3/128/stream.mp3",
"WDR COSMO Bernama Kurdi [So 18-19 Uhr] " =>
"https://wdr-cosmo-bernamakurdikoelnradyosu.icecast.wdr.de/wdr/cosmo/bernamakurdikoelnradyosu/mp3/128/stream.mp3",

"WDR COSMO Elliniko Randevou [So 18-19 Uhr] " =>
"https://wdr-cosmo-ellinikorandevouradioforum.icecast.wdr.de/wdr/cosmo/ellinikorandevouradioforum/mp3/128/stream.mp3",

"WDR COSMO Estación Sur [So 18-19 Uhr] " =>
"https://wdr-cosmo-estacionsurradiocolonia.icecast.wdr.de/wdr/cosmo/estacionsurradiocolonia/mp3/128/stream.mp3",

"WDR COSMO Köln Radyosu [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-bernamakurdikoelnradyosu.icecast.wdr.de/wdr/cosmo/bernamakurdikoelnradyosu/mp3/128/stream.mp3",

"WDR COSMO Live 🔁" =>
"https://wdr-cosmo-coslive.icecast.wdr.de/wdr/cosmo/coslive/mp3/128/stream.mp3",

"WDR COSMO Radio po-russki [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-porusskievent.icecast.wdr.de/wdr/cosmo/porusskievent/mp3/128/stream.mp3",

"WDR COSMO Radio po polsku [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-popolskuevent.icecast.wdr.de/wdr/cosmo/popolskuevent/mp3/128/stream.mp3",

"WDR COSMO Radio Forum [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-ellinikorandevouradioforum.icecast.wdr.de/wdr/cosmo/ellinikorandevouradioforum/mp3/128/stream.mp3",

"WDR COSMO Radio Colonia [Mo-Fr 18-18.30 Uhr] " =>
"https://wdr-cosmo-estacionsurradiocolonia.icecast.wdr.de/wdr/cosmo/estacionsurradiocolonia/mp3/128/stream.mp3",

"Selektor 🔁" =>
"https://wdr-cosmo-selektor.icecast.wdr.de/wdr/cosmo/selektor/mp3/128/stream.mp3",

"Die Maus " =>
"https://wdr-diemaus-live.icecastssl.wdr.de/wdr/diemaus/live/mp3/128/stream.mp3",

"Die Maus (mp3, 56 kBit/s)" =>
"https://wdr-diemaus-live.icecastssl.wdr.de/wdr/diemaus/live/mp3/56/stream.mp3",

"WDR Event" =>
"https://wdr-wdr-event.icecast.wdr.de/wdr/wdr/event/mp3/128/stream.mp3",
"WDR VERA" =>
"https://wdr-vera-live.icecast.wdr.de/wdr/vera/live/mp3/128/stream.mp3"

));


define('station_ffh', array(		
"HIT RADIO FFH" 	=> "https://mp3.ffh.de/radioffh/hqlivestream.mp3",
"FFH+ 80ER" => "https://mp3.ffh.de/ffhplus/hq80er.mp3",
"FFH+ 90ER" => "https://mp3.ffh.de/ffhplus/hq90er.mp3",
"FFH+ CHARTS" => "https://mp3.ffh.de/ffhplus/hqcharts.mp3",
"FFH+ ROCK" => "https://mp3.ffh.de/ffhplus/hqrock.mp3",
"FFH+ WEIHNACHTEN" => "https://mp3.ffh.de/ffhplus/hqxmas.mp3",
"FFH HAPPY HITS" => "https://mp3.ffh.de/ffhchannels/hqseasons.mp3",
"FFH LEIDER GEIL" => "https://mp3.ffh.de/ffhchannels/hqvoting.mp3",
"FFH TOP 40" => "https://mp3.ffh.de/ffhchannels/hqtop40.mp3",
"FFH PARTY" 	=> "https://mp3.ffh.de/ffhchannels/hqparty.mp3",
"FFH DIE 80ER" => "https://mp3.ffh.de/ffhchannels/hq80er.mp3",
"FFH JUST 90S"	=> "https://mp3.ffh.de/ffhchannels/hq90er.mp3",
"FFH DIE 2000ER" => "https://mp3.ffh.de/ffhchannels/hq2000er.mp3",
"FFH DIE 2010ER"=> "https://mp3.ffh.de/ffhchannels/hq2010er.mp3",
"FFH EURODANCE" => "https://mp3.ffh.de/ffhchannels/hqeurodance.mp3",
"FFH ROCK"	=>  "https://mp3.ffh.de/ffhchannels/hqrock.mp3",
"FFH SUMMER FEELING" =>"https://mp3.ffh.de/ffhchannels/hqsummerfeeling.mp3",
"FFH WORKOUT"=> "https://mp3.ffh.de/ffhchannels/hqworkout.mp3",
"FFH SCHLAGERKULT"	=> "https://mp3.ffh.de/ffhchannels/hqschlager.mp3",
"FFH DEUTSCH PUR" => "https://mp3.ffh.de/ffhchannels/hqdeutsch.mp3",
"FFH BRANDNEU"	=> "https://mp3.ffh.de/ffhchannels/hqbrandneu.mp3",
"FFH LOUNGE" => "https://mp3.ffh.de/ffhchannels/hqlounge.mp3",
"FFH ACOUSTIC HITS"	=> "https://mp3.ffh.de/ffhchannels/hqacoustichits.mp3",
"FFH SOUNDTRACK" => "https://mp3.ffh.de/ffhchannels/hqsoundtrack.mp3",
"FFH WEIHNACHTSRADIO" => "https://mp3.ffh.de/ffhchannels/hqxmas.mp3",
));

define('station_ffn', array(	
"FFN Radio" => "https://stream.ffn.de/ffn/mp3-192/?", //"https://player.ffn.de/radioffn.m3u",
"FFN Hits" => "https://ffn-de-hz-fal-stream09-cluster01.radiohost.de/ffn-hits_mp3-192", // "https://player.ffn.de/ffnhits.m3u",
"FFN Rockt" => "https://ffn-stream26.radiohost.de/ffn-rockt_mp3-192?", //"https://player.ffn.de/ffnrockt.m3u",
"FFN Gold" => "https://ffn-stream22.radiohost.de/ffn-gold_mp3-192?", // "https://player.ffn.de/ffngold.m3u",
"FFN 80er" => "https://ffn-stream27.radiohost.de/ffn-80er_mp3-192?", //"https://player.ffn.de/ffn80er.m3u",
"FFN 90er" => "https://stream.ffn.de/neunziger/mp3-192/?", //"https://player.ffn.de/ffn90er.m3u",
"FFN Comedy" => "https://stream.ffn.de/ffn-comedy/mp3-192/?", //"https://player.ffn.de/ffncomedy.m3u",
"FFN Tannenbaum" => "https://stream.ffn.de/tannenbaum/mp3-192/?", //"https://player.ffn.de/ffntannenbaum.m3u" ,
"FFN Radio Bollerwagen" => "https://stream.ffn.de/radiobollerwagen/mp3-192/?", //"https://player.ffn.de/radiobollerwagen.m3u" ,
"FFN Peppermint" => "https://stream.ffn.de/peppermintfm/mp3-192/?", //"https://player.ffn.de/peppermintfm.m3u",
));

define('station_bayerischer_Rundfunk', array (
"Bayern 1 Oberbayern" => "https://dispatcher.rndfnk.com/br/br1/obb/mp3/mid", 
"Bayern 1 Niederbayern / Oberpfalz" => "https://dispatcher.rndfnk.com/br/br1/nbopf/mp3/mid", 
"Bayern 1 Schwaben" => "https://dispatcher.rndfnk.com/br/br1/schwaben/mp3/mid", 
"Bayern 1 Franken" => "https://dispatcher.rndfnk.com/br/br1/franken/mp3/mid", 
"Bayern 1 Mainfranken" => "https://dispatcher.rndfnk.com/br/br1/mainfranken/mp3/mid", 
"Bayern 2 Nord" => "https://dispatcher.rndfnk.com/br/br2/nord/mp3/mid", 
"Bayern 2 Süd" => "https://dispatcher.rndfnk.com/br/br2/sued/mp3/mid", 
"Bayern 3" => "https://dispatcher.rndfnk.com/br/br3/live/mp3/mid", 
"BR-Klassik" => "https://dispatcher.rndfnk.com/br/brklassik/live/mp3/mid", 
"BR Klassik (256 kbit/s)" => "https://dispatcher.rndfnk.com/br/brklassik/live/mp3/high",
"BR24" => "https://dispatcher.rndfnk.com/br/br24/live/mp3/mid", 
"BR24live" => "https://dispatcher.rndfnk.com/br/br24live/live/mp3/mid", 
"BR Schlager" => "https://dispatcher.rndfnk.com/br/brschlager/live/mp3/mid", 
"BR Heimat" => "https://dispatcher.rndfnk.com/br/brheimat/live/mp3/mid", 
"PULS" => "https://dispatcher.rndfnk.com/br/puls/live/mp3/mid", 			

));

define('station_sunshine_live', array(
		"sunshine live - 2000er" => 
		"https://stream.sunshine-live.de/2000er/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Die 80er" => 
		"https://stream.sunshine-live.de/80er/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - 90er" => 
		"https://stream.sunshine-live.de/90er/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - 90er LIVE" => 
		"https://stream.sunshine-live.de/90er-live/mp3-192/stream.sunshine-live.de/play.m3u",

		"Amsterdam Dance Event - Dance" => 
		"https://stream.sunshine-live.de/ade18dance/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Bunker" => 
		"https://stream.sunshine-live.de/amsterdam/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Avicii" => 
		"https://stream.sunshine-live.de/avicii/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Classics" => 
		"https://stream.sunshine-live.de/classics/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Club" => 
		"https://stream.sunshine-live.de/club/mp3-192/stream.sunshine-live.de/play.m3u",

		"Depeche Mode" => 
		"https://stream.sunshine-live.de/depechemode/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Drum 'n' Bass" => 
		"https://stream.sunshine-live.de/dnb/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - EDM" => 
		"https://stream.sunshine-live.de/edm/mp3-192/stream.sunshine-live.de/",

		"sunshine live - Eurodance" => 
		"https://stream.sunshine-live.de/eurodance/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Festival" => 
		"https://stream.sunshine-live.de/festival/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - focus" => 
		"https://stream.sunshine-live.de/focus/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Future Bass" => 
		"https://stream.sunshine-live.de/futurebass/mp3-192/stream.sunshine-live.de/play.m3u",

		"Gamescom FM" => 
		"https://stream.sunshine-live.de/gamescom/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Gaming" => 
		"https://stream.sunshine-live.de/gaming/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - German Techno LIVE" => 
		"https://stream.sunshine-live.de/german-live/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - German Techno" => 
		"https://stream.sunshine-live.de/germante/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Hands Up" => 
		"https://stream.sunshine-live.de/handsup/mp3-192/stream.sunshine-live.de/",

		"sunshine live - Hard" => 
		"https://stream.sunshine-live.de/hard/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - House" => 
		"https://stream.sunshine-live.de/house/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - I AM RAVING" => 
		"https://stream.sunshine-live.de/iamraving/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Ibiza" => 
		"https://stream.sunshine-live.de/ibiza/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Livestream" => 
		"https://stream.sunshine-live.de/live/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Lounge" => 
		"https://stream.sunshine-live.de/lounge/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Love" => 
		"https://stream.sunshine-live.de/love/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Mayday" => 
		"https://stream.sunshine-live.de/mayday/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Melodic Beats LIVE" => 
		"https://stream.sunshine-live.de/melodic-live/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Melodic Techno" => 
		"https://stream.sunshine-live.de/melodic-techno/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Mix Mission" => 
		"https://stream.sunshine-live.de/mixmission/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Nature One" => 
		"https://stream.sunshine-live.de/natureone/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - New Hits" => 
		"https://stream.sunshine-live.de/newhits/mp3-192/stream.sunshine-live.de/play.m3u",

		"notband" => 
		"https://stream.sunshine-live.de/notband/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Party" => 
		"https://stream.sunshine-live.de/party/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Clubsound Berlin" => 
		"https://stream.sunshine-live.de/playlist1/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Pop" => 
		"https://stream.sunshine-live.de/pop/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live and pride" => 
		"https://stream.sunshine-live.de/pride/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Nighttime Chill" => 
		"https://stream.sunshine-live.de/prodigy/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Quarantäne" => 
		"https://stream.sunshine-live.de/quarantaene/mp3-192/stream.sunshine-live.de/play.m3u",

		"Rave On Snow 2018" => 
		"https://stream.sunshine-live.de/raveonsnow/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live Corona" => 
		"https://stream.sunshine-live.de/referencefestival/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Relax" => 
		"https://stream.sunshine-live.de/relax/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Remix" => 
		"https://stream.sunshine-live.de/remix/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Summer Beats" => 
		"https://stream.sunshine-live.de/sp2/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Tech House" => 
		"https://stream.sunshine-live.de/sp4/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - 90s Anthems" => 
		"https://stream.sunshine-live.de/sp5/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Charts" => 
		"https://stream.sunshine-live.de/sp6/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Afterhour" => 
		"https://stream.sunshine-live.de/sp7/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Chillout" => 
		"https://stream.sunshine-live.de/sp8/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Techno" => 
		"https://stream.sunshine-live.de/techno/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Techno-Live" => 
		"https://stream.sunshine-live.de/technolive/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Techno Queens" => 
		"https://stream.sunshine-live.de/technoqueens/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Time Warp" => 
		"https://stream.sunshine-live.de/timewarp/mp3-128/stream.sunshine-live.de/play.m3u",

		"sunshine live - Trance" => 
		"https://stream.sunshine-live.de/trance/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Tropical House" => 
		"https://stream.sunshine-live.de/tropicalhouse/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Best of 20 years" => 
		"https://stream.sunshine-live.de/twenty/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Classic & Vocal House" => 
		"https://stream.sunshine-live.de/vocalhouse/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Vocal Trance" => 
		"https://stream.sunshine-live.de/vocaltrance/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Peaceful Beats" => 
		"https://stream.sunshine-live.de/winterchill/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Workout" => 
		"https://stream.sunshine-live.de/workout/mp3-192/stream.sunshine-live.de/play.m3u",

		"sunshine live - Psytrance" => 
		"https://stream.sunshine-live.de/xmas/mp3-192/stream.sunshine-live.de/play.m3u",
));

function station_curl($node_in,$station){
$output[] = "chat.".$node_in." = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',";
$output[]="	options: [";

//$playlists[$node_in] = array_slice($playlists[$node_in],0,2);



foreach($station as $name => $url)
{
	$_SESSION['radioanzahl']++;
	$playlist_endungen = array(".m3u", ".pls");
	$endung = substr($url,strrpos($url,"."));
	
	/* DEBUG
	if(in_array($endung,$playlist_endungen)){
	$inhalt = file($url);
	//print_r($inhalt);exit;
	for($a=0;$a<count($inhalt);$a++){
	$inhalt[$a] = trim($inhalt[$a]);
	if(strpos($inhalt[$a],"mp3") !== false)
	{
		$inhalt[$a]= substr($inhalt[$a],strpos($inhalt[$a],"http"));
		$url = $inhalt[$a];
	} 

	}
	}
	*/



	
	if(strpos($url,"?") !== false){$url = substr($url,0,strpos($url,"?"));}
	$base64name = (base64_encode($name));
	$base64name = str_replace("=","",$base64name);
	//$stations[] = $name."|radiostream_".$base64name;

$output[]="			{
					text: text_stationclick+'".$url."\',\'".$name."\');\">".$name."</span>',
					next: '".$node_in."_after'
					},
					";
}
$output[] = "			]
}
";

$output[] ="chat.".$node_in."_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: '".$node_in."'
					}]).concat(radio_after)
}";

$output = implode("\n",$output);
return($output);
}


$station = 'station_antenne_niedersachsen';
$output[] =station_curl($station,constant($station));


$station = 'station_hirschmilch';
$output[] =station_curl($station,constant($station));



$station = 'station_ndr';
$output[] =station_curl($station,constant($station));



$station = 'station_radio_mk';
$output[] =station_curl($station,constant($station));



$station = 'station_wdr';
$output[] =station_curl($station,constant($station));


$station = 'station_ffh';
$output[] =station_curl($station,constant($station));


$station = 'station_ffn';
$output[] =station_curl($station,constant($station));



$station = 'station_bayerischer_Rundfunk';
$output[] =station_curl($station,constant($station));


$station = 'station_sunshine_live';
$output[] =station_curl($station,constant($station));




if(!empty($output)){
$output = implode("\n",$output);

/* 
2do: push into 1st line of radio.js
$output .= "

const radioanzahl = ".$_SESSION['radioanzahl'].";";
*/
file_put_contents("stations_make.js",$output);
echo $output;
} else {echo "Leer.";}

echo "<hr>";

exit;

