
 const rezepte_abort =    {
                text: 'Nee, lieber doch kein Rezept..',
                next: 'rezepte_abort',
            }
			
 chat.rezepte_abort = {
        text: 'Ok, gerne. Bald kommen noch viel mehr Rezepte hinzu. Frag mich demnächst gerne wieder nach Rezepten 😊',
		next: 'frage_beenden'
    }
const rezepte_abort_enough =    {
                text: 'Och, an Rezepten genügt mir das fürs Erste.',
                next: 'rezepte_abort',
            }
			chat.rezepte_intro = {
        text: 'Ich liebe es zu kochen 😊 Ich habe sicherlich ein paar interessante Rezepte für dich. Ein paar Rezepte sind vegetarisch, ein paar Rezepte sind vegan. Aber alle sind supereasy zu machen und superlecker.',
		next: 'rezepte'
    }
	
	const rezepte_categories = [
	{
		text: 'Aufstrich',
		next: 'rezepte_category_aufstrich'
    },
	{
		text: 'Backen',
		next: 'rezepte_category_backen'
    },
	{
		text: 'Eintopf',
		next: 'rezepte_category_eintopf'
    },
	{
		text: 'Eis',
		next: 'rezepte_category_eis'
    },
	{
		text: 'Gewürze',
		next: 'rezepte_category_gewürze'
    },
	{
		text: 'Haltbares',
		next: 'rezepte_category_haltbares'
    },
	{
		text: 'Kartoffeln',
		next: 'rezepte_category_kartoffeln'
    },
	{
		text: 'Nachtisch',
		next: 'rezepte_category_nachtisch'
    },
	{
		text: 'Nudeln',
		next: 'rezepte_category_nudeln'
    },
	{
		text: 'Reis',
		next: 'rezepte_category_reis'
    },
	{
		text: 'Salat',
		next: 'rezepte_category_salat'
    },
	{
		text: 'Sauce',
		next: 'rezepte_category_sauce'
    },
	{
		text: 'Sonstiges',
		next: 'rezepte_category_sonstiges'
    },
	{
		text: 'Trinken',
		next: 'rezepte_category_trinken'
    },
	{
		text: 'Zwischendurch',
		next: 'rezepte_category_zwischendurch'
    }
]

		chat.rezepte_category_aufstrich = {
        text: 'Kategorie Aufstrich. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Apfel-Zwiebel-Schmalz',
                next: 'QXVmc3RyaWNoX0FwZmVsLVp3aWViZWwtU2NobWFsei50eHQ'
            }
	,
	            {
                text: 'Mett (vegan)',
                next: 'QXVmc3RyaWNoX01ldHQgKHZlZ2FuKS50eHQ'
            }
	,
	            {
                text: 'Studentenfutter-Brotaufstrich',
                next: 'QXVmc3RyaWNoX1N0dWRlbnRlbmZ1dHRlci1Ccm90YXVmc3RyaWNoLnR4dA'
            }
	]
		}
		
		chat.rezepte_category_backen = {
        text: 'Kategorie Backen. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Butterkekse',
                next: 'QmFja2VuX0J1dHRlcmtla3NlLnR4dA'
            }
	,
	            {
                text: 'Börek mit Hirtenkäse',
                next: 'QmFja2VuX0LDtnJlayBtaXQgSGlydGVua8Okc2UudHh0'
            }
	,
	            {
                text: 'Mamas Mohnkuchen',
                next: 'QmFja2VuX01hbWFzIE1vaG5rdWNoZW4udHh0'
            }
	,
	            {
                text: 'Mamas Zitronenkuchen',
                next: 'QmFja2VuX01hbWFzIFppdHJvbmVua3VjaGVuLnR4dA'
            }
	]
		}
		
		chat.rezepte_category_eintopf = {
        text: 'Kategorie Eintopf. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Der Sieben-Liter-Eintopf',
                next: 'RWludG9wZl9EZXIgU2llYmVuLUxpdGVyLUVpbnRvcGYudHh0'
            }
	,
	            {
                text: 'Schmackofatz-Eintopf',
                next: 'RWludG9wZl9TY2htYWNrb2ZhdHotRWludG9wZi50eHQ'
            }
	]
		}
		
		chat.rezepte_category_eis = {
        text: 'Kategorie Eis. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Bananeneis',
                next: 'RWlzX0JhbmFuZW5laXMudHh0'
            }
	]
		}
		
		chat.rezepte_category_gewürze = {
        text: 'Kategorie Gewürze. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Pommessalz I',
                next: 'R2V3w7xyemVfUG9tbWVzc2FseiBJLnR4dA'
            }
	,
	            {
                text: 'Pommessalz II',
                next: 'R2V3w7xyemVfUG9tbWVzc2FseiBJSS50eHQ'
            }
	]
		}
		
		chat.rezepte_category_haltbares = {
        text: 'Kategorie Haltbares. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Sauerkraut',
                next: 'SGFsdGJhcmVzX1NhdWVya3JhdXQudHh0'
            }
	]
		}
		
		chat.rezepte_category_kartoffeln = {
        text: 'Kategorie Kartoffeln. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Rösti nach Berner Art',
                next: 'S2FydG9mZmVsbl9Sw7ZzdGkgbmFjaCBCZXJuZXIgQXJ0LnR4dA'
            }
	]
		}
		
		chat.rezepte_category_nachtisch = {
        text: 'Kategorie Nachtisch. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Haferflocken mit Backkakao und Zucker',
                next: 'TmFjaHRpc2NoX0hhZmVyZmxvY2tlbiBtaXQgQmFja2tha2FvIHVuZCBadWNrZXIudHh0'
            }
	,
	            {
                text: 'Kraftkugeln II',
                next: 'TmFjaHRpc2NoX0tyYWZ0a3VnZWxuIElJLnR4dA'
            }
	,
	            {
                text: 'Kraftkugeln »Haferkraft«',
                next: 'TmFjaHRpc2NoX0tyYWZ0a3VnZWxuIMK7SGFmZXJrcmFmdMKrLnR4dA'
            }
	,
	            {
                text: 'Milchreis',
                next: 'TmFjaHRpc2NoX01pbGNocmVpcy50eHQ'
            }
	,
	            {
                text: 'Schnelle Crêpes',
                next: 'TmFjaHRpc2NoX1NjaG5lbGxlIENyw6pwZXMudHh0'
            }
	,
	            {
                text: 'Wobbly-Pfannkuchen',
                next: 'TmFjaHRpc2NoX1dvYmJseS1QZmFubmt1Y2hlbi50eHQ'
            }
	]
		}
		
		chat.rezepte_category_nudeln = {
        text: 'Kategorie Nudeln. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Gebratene Nudeln mit Ei',
                next: 'TnVkZWxuX0dlYnJhdGVuZSBOdWRlbG4gbWl0IEVpLnR4dA'
            }
	,
	            {
                text: 'One-Pot Tomatennudeln',
                next: 'TnVkZWxuX09uZS1Qb3QgVG9tYXRlbm51ZGVsbi50eHQ'
            }
	]
		}
		
		chat.rezepte_category_reis = {
        text: 'Kategorie Reis. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Reis mit Gemüse',
                next: 'UmVpc19SZWlzIG1pdCBHZW3DvHNlLnR4dA'
            }
	]
		}
		
		chat.rezepte_category_salat = {
        text: 'Kategorie Salat. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Nudelsalat',
                next: 'U2FsYXRfTnVkZWxzYWxhdC50eHQ'
            }
	]
		}
		
		chat.rezepte_category_sauce = {
        text: 'Kategorie Sauce. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Bolognesesauce',
                next: 'U2F1Y2VfQm9sb2duZXNlc2F1Y2UudHh0'
            }
	,
	            {
                text: 'Chilisauce',
                next: 'U2F1Y2VfQ2hpbGlzYXVjZS50eHQ'
            }
	,
	            {
                text: 'Käseähnliche Sauce (vegan)',
                next: 'U2F1Y2VfS8Okc2XDpGhubGljaGUgU2F1Y2UgKHZlZ2FuKS50eHQ'
            }
	]
		}
		
		chat.rezepte_category_sonstiges = {
        text: 'Kategorie Sonstiges. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Eier (perfekt)',
                next: 'U29uc3RpZ2VzX0VpZXIgKHBlcmZla3QpLnR4dA'
            }
	,
	            {
                text: 'Gebackener Camembert',
                next: 'U29uc3RpZ2VzX0dlYmFja2VuZXIgQ2FtZW1iZXJ0LnR4dA'
            }
	,
	            {
                text: 'Gemüsebrühe',
                next: 'U29uc3RpZ2VzX0dlbcO8c2VicsO8aGUudHh0'
            }
	,
	            {
                text: 'Sonnenblumenkerne keimen, sprossen lassen',
                next: 'U29uc3RpZ2VzX1Nvbm5lbmJsdW1lbmtlcm5lIGtlaW1lbiwgc3Byb3NzZW4gbGFzc2VuLnR4dA'
            }
	]
		}
		
		chat.rezepte_category_trinken = {
        text: 'Kategorie Trinken. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Apfel-Ingwer-Zitrone-Shot',
                next: 'VHJpbmtlbl9BcGZlbC1Jbmd3ZXItWml0cm9uZS1TaG90LnR4dA'
            }
	,
	            {
                text: 'Eistee',
                next: 'VHJpbmtlbl9FaXN0ZWUudHh0'
            }
	,
	            {
                text: 'Ricola Heißgetränk',
                next: 'VHJpbmtlbl9SaWNvbGEgSGVpw59nZXRyw6Ruay50eHQ'
            }
	,
	            {
                text: 'Wasser mit Orangensaft',
                next: 'VHJpbmtlbl9XYXNzZXIgbWl0IE9yYW5nZW5zYWZ0LnR4dA'
            }
	,
	            {
                text: 'Wasser mit Zitronensaft',
                next: 'VHJpbmtlbl9XYXNzZXIgbWl0IFppdHJvbmVuc2FmdC50eHQ'
            }
	]
		}
		
		chat.rezepte_category_zwischendurch = {
        text: 'Kategorie Zwischendurch. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'Armer Ritter',
                next: 'Wndpc2NoZW5kdXJjaF9Bcm1lciBSaXR0ZXIudHh0'
            }
	]}
			const rezepte_aufstrich_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Aufstrich-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_aufstrich',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_backen_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Backen-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_backen',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_eintopf_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Eintopf-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_eintopf',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_eis_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Eis-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_eis',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_gewürze_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Gewürze-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_gewürze',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_haltbares_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Haltbares-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_haltbares',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_kartoffeln_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Kartoffeln-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_kartoffeln',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_nachtisch_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Nachtisch-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_nachtisch',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_nudeln_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Nudeln-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_nudeln',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_reis_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Reis-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_reis',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_salat_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Salat-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_salat',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_sauce_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Sauce-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_sauce',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_sonstiges_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Sonstiges-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_sonstiges',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_trinken_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Trinken-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_trinken',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
		
			]
		
			
			const rezepte_zwischendurch_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Zwischendurch-Rezepte-Übersicht</b>.',
                next: 'rezepte_category_zwischendurch',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'rezepte',
        },
			rezepte_abort_enough
		
			]
	chat.QXVmc3RyaWNoX0FwZmVsLVp3aWViZWwtU2NobWFsei50eHQ = {
			text: 'Apfel-Zwiebel-Schmalz<br><br>Zutaten:<br>6 EL Palmfett<br>1 Hand getrockneter Apfelstücke<br>1 Hand Röstzwiebeln<br>1 EL Salz<br>(Knoblauch)<br><br>Zubereitung:<br>Die getrockneten Apfelstücke und die Röstzwiebeln in einem Mixer zerkleinern.<br>Das Palmfett in einer Pfanne schmelzen, mit einem Deckel oder Spritzschutz abdecken, damit es nicht spritzt.<br>Die Pfanne vom Herd nehmen.<br>Die getrockneten Apfelstücke und die Röstzwiebeln und das Salz hinzugeben.<br>Auf dem Weg zum Erkalten das Schmalz immer wieder umrühren, damit sich die Apfel-Zwiebel-Mischung gut verteilt.<br><br>Notizen:<br>Das Schmalz kann auch mit frischem Knoblauch verfeinert werden. Das schmeckt sehr gut.',
		options: rezepte_aufstrich_options
		}
		,
		chat.QXVmc3RyaWNoX01ldHQgKHZlZ2FuKS50eHQ = {
			text: 'Mett (vegan)<br><br>Zutaten:<br>1 Packung Reiswaffeln Natur mit Meersalz<br>1 Päckchen (500 ml) passierte Tomatenmark<br>1 EL Hackfleischgewürzmischung<br>0,5 TL Pfeffer<br>etwas Wasser<br>(Zwiebel)<br><br>Zubereitung:<br>Die Reiswaffeln in einer großen Schüssel schön klein bröseln. Die Gewürze mit den zerbröselten Reiswaffeln vermischen. 500 ml passierte Tomaten dazu geben, kräftig durchrühren. Etwas Wasser dazugeben, bis eine gute Konsistenz erreicht ist. Die Reiswaffeln saugen noch etwas Wasser auf. Über Nacht im Kühlschrank ziehen lassen, denn es schmeckt am darauffolgenden Tag noch besser.',
		options: rezepte_aufstrich_options
		}
		,
		chat.QXVmc3RyaWNoX1N0dWRlbnRlbmZ1dHRlci1Ccm90YXVmc3RyaWNoLnR4dA = {
			text: 'Studentenfutter-Brotaufstrich<br><br>Zutaten:<br>1 Packung Studentenfutter<br>etwas Wasser<br><br>Zubereitung:<br>Das Studentenfutter im Foodprocessor zerkleinern.<br>Mit ein wenig Wasser vermengen.<br><br>Notizen:<br>Im Kühlschrank aufbewahren.',
		options: rezepte_aufstrich_options
		}
		,
		chat.QmFja2VuX0J1dHRlcmtla3NlLnR4dA = {
			text: 'Butterkekse<br><br>Zutaten:<br>500 g Mehl (½ Tüte)<br>½ Packung Margarine (einfach nach Augenmaß teilen)<br>1 Kakao-Tasse voll Zucker<br>1 Päckchen Vanillepudding<br>2 Päckchen Vanillezucker<br><br>Zubereitung:<br>Die Margarine im Topf auf höchster Stufe schmelzen. Den Zucker mit einem Schneebesen einrühren und flüssig werden lassen. Sobald es zähflüssig blubbert, Das Puddingpulver einrühren. Danach den Vanillezucker einrühren. Den Topf vom Herd nehmen. Das Mehl einrühren. Erst mit einem Schneebesen, dann mit einem Löffel (weil es zu klumpig wird). Man hat dann quasi Butterstreusel.<br><br>Den Teig etwas erkalten lassen und etwas Wasser (ein oder zwei Hand voll, muss man testen) zum Teig hinzugeben und durchkneten.<br><br>Auf einem mit Backpapier ausgelegten Backblech mit Hilfe eines kleinen, dickwandigen Glases verteilen (oder mit einem kleinen Teigroller). Ist das Backblech damit belegt, mit einem Pizzaschneider kleine Streifen schneiden. Ich hab es so geschnitten, dass die Streifen von oben nach unten etwas breiter waren, die Streifen von links nach rechts etwas enger. So ergaben sich kleine, leicht längliche Kekse.<br><br>Bei 180 °C für ca. 10 Minuten im Backofen backen, auskühlen lassen. Nicht zu hart ausbacken: Die Kekse härten noch nach.',
		options: rezepte_backen_options
		}
		,
		chat.QmFja2VuX0LDtnJlayBtaXQgSGlydGVua8Okc2UudHh0 = {
			text: 'Börek mit Hirtenkäse<br><br>Zutaten:<br>2 Rollen Blätterteig<br>1 Hirtenkäse<br><br>Zubereitung:<br>Den Hirtenkäse öffnen, das Wasser abgießen und den Hirtenkäse fein zerkrümeln.<br>Ein Backblech mit Backpapier auslegen.<br>Einen Blätterteig ausrollen.<br>1/2 Hirtenkäse auf dem Blätterteig verteilen.<br>Den Blätterteig zu einer engen Rolle formen.<br>Den Blätterteig zu einer Wurst drücken. Hochheben und die Schwerkraft dazu benutzen, den Teig noch mehr in die Länge zu ziehen, bis er kurz davor ist, zu reißen.<br>Aus dem Teig eine Schnecke formen.<br>Die Schnecke auf dem Backblech platt drücken.<br>Genau so mit der zweiten Schnecke verfahren.<br>Bei 200 °C Ober- und Unterhitze im Backofen auf der mittleren Schiene für ca. 12 Minuten backen.',
		options: rezepte_backen_options
		}
		,
		chat.QmFja2VuX01hbWFzIE1vaG5rdWNoZW4udHh0 = {
			text: 'Mamas Mohnkuchen<br><br>Zutaten:<br>450 g Butter<br>3 Eier<br>150 g Grieß<br>1 Würfel frische Hefe (42 g) oder 2 Tüten Trockenhefe<br>500 g Mehl (+ etwas Mehl nach Augenmaß)<br>1 l Milch<br>250 g gemahlener Mohn<br>150 g Rosinen<br>1/4 TL Salz<br>1 Päckchen Vanillezucker<br>380 g Zucker<br><br>Zubereitung:<br>Zerbrösle die lauwarme Hefe in der lauwarmen Milch und verrühre sie nur ganz kurz.<br>Gib eine Prise Zucker dazu und lasse die Hefenmilch 10 Minuten stehen.<br>Gib das Mehl, die Eier, das Ei, das Salz und den Zucker in eine Schüssel und knete es gut durch.<br>Gib die Milch in einen Topf und schmelze die Butter darin.<br>Schalte die Hitze des Herdes auf eine niedrige Stufe, sobald die Milch kocht.<br>Gib den Grieß dazu und rühre für ein paar Minuten kräftig durch, bis der Gries quellt und die typische Grießkonsistenz hat.<br>Gib alle Zutaten, außer die Rosinen, hinzu und lasse die Mohnmasse danach noch 20 Minuten quellen.<br>Füge nun die Rosinen dazu und lasse die Masse abkühlen.<br>Möchtest du einen dünnen Teig für den Mohnkuchen, so nimm 1/4 des Teiges ab.<br>Rolle den Teig auf einem gefetteten Backblech aus.<br>Aus dem Rest des Teiges kannst du Brötchen formen und sie im Ofen ausbacken.<br>Möchtest du den Teig dicker haben, so nimm die ganze Menge des Teiges.<br>Streiche die Mohnmasse über den Teig.<br>Schmelze die Butter, gib den Zucker und ein wenig Mehl hinzu.<br>Füge nach Augenmaß wenig Mehl hinzu, so dass die Streuselmasse nicht zu dünn und nicht zu dick wird.<br>Gib nach Bedarf und Augenmaß immer ein kleines bisschen Mehl hinzu und rühre das Ganze mit einem Holzlöffel (oder anderem Löffel), bis du eine Streuselmasse hast.<br>Lass die Streuselmasse abkühlen.<br>Die Masse quellt noch etwas auf und wird etwas trockener.<br>Reibe die Streuselmasse durch die Hände gleichmäßig über die Mohnmasse.<br>Backe Alles bei 190 °C Ober-  Unterhitze in der Mitte des Ofens für ca. 25 Minuten.<br><br>Notizen:<br>für den Boden:<br>1/4 l Milch<br>500 g Mehl<br>1 Würfel frische Hefe (42 g) oder 2 Tüten Trockenhefe<br>80 g Zucker<br>14 TL Salz<br>1 Prise Zucker<br>1 Ei<br>120 g Butter<br><br>für den Belag:<br>3/4 l Milch<br>2 Eier<br>80 g Butter<br>150 g Zucker<br>150 g Grieß<br>1 Päckchen Vanillezucker<br>250 g gemahlener Mohn<br>150 g Rosinen<br><br>für die Streusel:<br>250 g Butter, geschmolzen<br>150 g Zucker<br>und Mehl nach Augenmaß',
		options: rezepte_backen_options
		}
		,
		chat.QmFja2VuX01hbWFzIFppdHJvbmVua3VjaGVuLnR4dA = {
			text: 'Mamas Zitronenkuchen<br><br>Zutaten:<br>400 g Mehl<br>400 g Butter oder Margarine<br>8 Eier<br>160 g Zucker<br>1 Päckchen Backpulver<br>2 Päckchen Vanillezucker<br>3 Esslöffel Zitronensaft<br>1 Päckchen Zitronenaroma<br><br>Zubereitung:<br>Alles verrühren, aufs Blech streichen und bei 180 °C ca, 45 Minuten auf  Ober/Unterhitze backen.',
		options: rezepte_backen_options
		}
		,
		chat.RWludG9wZl9EZXIgU2llYmVuLUxpdGVyLUVpbnRvcGYudHh0 = {
			text: 'Der Sieben-Liter-Eintopf<br><br>Zutaten:<br>2.5 kg Kartoffeln<br>1 kleiner Weißkohl<br>1 kg Möhren<br>1 Bund Möhren mit Möhrengrün<br>2 Stangen Lauch<br>1 Packung Suppengrün (Möhren, Lauch, Petersilie, Sellerie, )<br>7 Päckchen Knorr Bouillon Pur<br>2 EL Knoblauch<br>1 EL weißer Pfeffer<br>1 EL Bohnenkraut, fein gemahlen im Mörser<br>2 EL Margarine<br>Wasser<br><br>Zubereitung:<br>Die Möhren waschen.<br>Die Möhren in kleine Stücke schneiden.<br>Vom Weißkohl die äußeren Blätter entfernen. Den Weißkohl mit den Möhren und etwas Wasser bei geschlossenem Topfdeckel in einem großen Topf dünsten (im weiteren Text heißt dieser Topf nun Topf A).<br>Das Möhrengrün waschen.<br>Das Möhrengrün klein schneiden.<br>Den Lauch und den Sellerie waschen.<br>Den Lauch, den Sellerie und das Möhrengrün in einen separaten Topf (Topf B) geben und mit Wasser aufgießen. Sehr lange kochen lassen, so dass die Mischung weich wie gekochter Spinat ist.<br>Die Petersilie klein schneiden und mit unter die Möhren und den Kohl mischen.<br>Sobald das Lauch-Sellerie-Möhrengrün weich genug ist, mit zum Topf A geben.<br>Die Kartoffeln schälen.<br>Die Kartoffeln in kleine Stücke schneiden und noch einmal durchwaschen.<br>Die Kartoffeln in einen zweiten großen Topf (Topf C) geben. Vom Topf A eine Schüssel voll separieren; mit einer Schüssel voll Kartoffeln austauschen. Die Schüssel mit dem gekochten Grün zu den Kartoffeln in Topf C geben, so dass nun alles ungefähr gleich auf zwei Töpfe aufgeteilt ist.<br>Das Bohnenkraut in einem Mörser mahlen.<br>In einem Messbecher den Knoblauch, den Pfeffer, die Päckchen Bouillon, das Bohnenkraut und die Margarine mit warmen Wasser mit einem Schneebesen vermengen. Auf Topf A und Topf C verteilen.<br>Beide Töpfe (A & C) nun zwei Stunden lang ganz leicht köcheln lassen (Stufe 19). Immer mal wieder umrühren.<br>Auf den warmen Herdplatten stehen lassen und noch weitere Stunden herunterkühlen lassen.<br>Etliches vom Eintopf dann einfrieren.<br><br>Notizen:<br>Diesen Eintopf kann man auf verschiedene Arten variieren.<br>Wer es weniger scharf mag, der kann weniger Pfeffer und Knoblauch nehmen.<br>Man könnte auch frische Äpfel, in Stücken geschnitten, mitkochen.<br><br>Schmeckt am nächsten Tag, wenn alles schön durchgezogen ist, noch besser.<br><br>Eventuell muss die Würzung noch angepasst werden. Ich finde, der Eintopf könnte noch ein bisschen mehr Würze vertragen. Ansonsten aber sehr superlecker.',
		options: rezepte_eintopf_options
		}
		,
		chat.RWludG9wZl9TY2htYWNrb2ZhdHotRWludG9wZi50eHQ = {
			text: 'Schmackofatz-Eintopf<br><br>Zutaten:<br>1 Hand voll Cornflakes<br>2 Hand voll Haferflocken<br>1 Hand voll Kartoffeln<br>2 EL Margarine<br>1 Hand voll Röstzwiebeln<br>1 Packung Suppengrün (Sellerie-Möhren-Porree-Petersilie-Mix)<br>1 EL Zucker<br>Wasser nach Bedarf<br>1 »Knorr Bouillon Pur« (oder andere Brühe)<br><br>Zubereitung:<br>Braune Stellen vom Sellerie schneiden. Den Sellerie in Scheiben, dann in feine Würfel schneiden. 1 EL Margarine im Topf zerlassen. Den Sellerie hinzugeben, den Zucker hinzugeben und den Topf deckeln. Die Hitze auf 6 Stellen. Die Möhren schälen, jeweils beide Enden kappen. Die Möhren in der waagerechten Hälfte durchschneiden, senkrecht hinstellen und von oben mit dem Messer einschneiden. Dann das Messer hinunter drücken, um die Möhren dadurch sehr einfach zu halbieren. Die Möhren in grobe Stücke schneiden. Die Möhren zum Sellerie dazu geben, den Topf wieder deckeln.<br><br>Die Kartoffeln schälen, in kleine Stücke schneiden. In einem kleinen Topf oder in einer Pfanne 1 EL Margarine zerlassen. Die Kartoffeln leicht anrösten. Eine Hand voll Cornflakes dazugeben. Die Cornflakes mit den Kartoffeln anrösten, falls sie anbrennen, schnell mit Wasser ablöschen. Die Mischung in den großen Topf geben. Den Porree längs in Streifen schneiden und dann quer in kleine Stücke schneiden. Mit in den großen Topf geben.<br>Den kleinen Topf ausspülen, trockenwischen. Die zwei Hand voll Haferflocken in den Topf geben und unter kontinuierlichem Rühren auf Stufe 8 oder 9 anbraten. Sobald sie angeröstet sind, in den Topf schütten. Die Hitze auf 2 reduzieren. Die Bouillon in den großen Topf geben. Die Petersilie klein Hacken und mit dazu geben. Die Röstzwiebeln hinzu geben. Das Essen mit einem Schneebesen kräftig durchrühren. Noch ein Weilchen weiterköcheln. Fertig.<br><br>Notizen:<br>Schmeckt am darauffolgenden Tag, wenn alles schön durchgezogen ist, noch besser.',
		options: rezepte_eintopf_options
		}
		,
		chat.RWlzX0JhbmFuZW5laXMudHh0 = {
			text: 'Bananeneis<br><br>Zutaten:<br>2 Bananen<br><br>Zubereitung:<br>Sehr reife Bananen schälen, in Stücke schneiden und einfrieren.<br>Die Bananen aus dem Eisfach nehmen, die Stücke in einen Mixer geben. Mit Kakao, Zimt und Vanille verfeinern und klein Mixen.<br><br>Notizen:<br>Auch lecker in Verbindung mit Kokosdrink als Bananenshake.',
		options: rezepte_eis_options
		}
		,
		chat.R2V3w7xyemVfUG9tbWVzc2FseiBJLnR4dA = {
			text: 'Pommessalz I<br><br>Zutaten:<br>4 EL Salz<br>2 EL Paprikapulver<br>2 EL Knoblauchpulver<br>1 TL Kreuzkümmel<br>1 TL Raucharoma<br><br>Zubereitung:<br>Alles gut zusammen vermengen.',
		options: rezepte_gewürze_options
		}
		,
		chat.R2V3w7xyemVfUG9tbWVzc2FseiBJSS50eHQ = {
			text: 'Pommessalz II<br><br>Zutaten:<br>4 TL Salz<br>3 TL süßes Paprikapulver<br>2 TL Knoblauch<br>1 TL Zucker<br>1 TL Hähnchengewürzsalz<br>½ TL Pfeffer<br><br>Zubereitung:<br>Alles zusammen vermengen und in dunklen Gläsern aufbewahren.<br>',
		options: rezepte_gewürze_options
		}
		,
		chat.SGFsdGJhcmVzX1NhdWVya3JhdXQudHh0 = {
			text: 'Sauerkraut<br><br>Zutaten:<br>Weißkohl<br>pro 1 kg Kohl 15 g Salz (am besten Steinsalz, kein Jodsalz)<br><br>Zubereitung:<br>Also. Du brauchst einen oder mehrere Weißkohl. Entferne alle schlaffen oder braunen Stellen der äußeren Blätter. Sind die äußeren Blätter überhaupt nicht zu gebrauchen, schmeiß sie weg. Nimm auf jeden Fall 1 oder 2 Blätter Weißkohl vom Weißkohl ab und leg sie zur Seite. Die brauchen wir später noch. Den Weißkohl schneidest du in vier Stücke. Lass den Strunk dran, denn so kannst du den Kohl besser reiben. Du brauchst eine Küchenreibe oder einen speziellen Sauerkrauthobel. Eine Küchenreibe, wie in dem Video, reicht aber völlig aus.<br>Hobel den Weißkohl. Hobel aber nicht die Strünke mit, sonst gibt es zu harte Stücke im Sauerkraut.<br>Wiege den Weißkohl. Pro 1 kg Weißkohl brauchst du 15 g Salz. Nimm gutes Salz. Kein Jodsalz. Wenn du es bekommen kannst, nimm Steinsalz, Meersalz ist auch ok. Ich nehme immer Steinsalz.<br><br>Wieg also den Kohl mit einer Küchenwaage. Als Beispiel Hast du 1350 g Weißkohl, dann brauchst du (15/1000*1350 = 20,25 g = 20,25 g) Salz. Ich bin ein Freak Ich wieg das mit einer Feinwaage (die man für Kräuter oder auch Briefmarken nimmt) auf das kleinste Gramm genau aus -D ... Meine Oma hat das immer nach Augenmaß gemacht. Aber ich wieg das lieber genau aus. Als ich letztens Sauerkraut gemacht habe, habe ich mit 15 g Salz pro 1 kg Weißkohl und 20 g Salz pro 1 kg Weißkohl experimentiert. Das »15 g Salz pro 1 kg Weißkohl« hat am besten geschmeckt und war schön weich. Je mehr Salz du nimmst, desto schlechter die Fermentierung, desto härter auch das Sauerkraut. Also nimm 15 g Salz pro 1000 g Weißkohl.<br><br>Mische das Salz mit dem Weißkohl. Knete mit deinen Händen den Weißkohl durch. Kneten, kneten, kneten. Mach das einige Minuten lang (das gibt Muskeln! -D). Das Salz wird die Zellen des Sauerkrauts aufbrechen und Saft wird austreten. Mach das so lang, bis da ein bisschen Saft-Suppe von dem Sauerkraut-Saft in deinem Topf oder deiner Schüssel vorhanden ist.<br><br>Fülle das Sauerkraut in ein Bügelglas. Drücke das Sauerkraut mit der Hand kräftig in das Glas. Es muss schön eng gestopft sein. Sollte etwas Lake fehlen, gieße etwas aus deiner Schüssel hinzu.<br>Fülle das Glas bis zur »Schulter« des Glases. Also nicht ganz voll, sondern oben bleibt etwas Platz. Nimm ein Weißkohlblatt, dass du zur Seite gelegt hast und stopfe das Blatt schön auf den Weißkohl. Es wird den Weißkohl unten halten. Du solltest nun auch, automatisch durch das Stopfen, soviel Lake im Glas haben, dass das oberste große Blatt mit Lake bedeckt ist.<br><br>Denk immer daran »Under the brine is fine!«<br><br>Schließe das Glas. Achte darauf, dass nirgendwo mehr ein Stückchen Sauerkraut auf dem Rand liegt. Das Glas muss perfekt schließen.<br><br>Stell die Sauerkrautgläser 3 Tage lang warm (zum Beispiel im Wohnzimmer), so dass die Gärung beginnt. Stell die Gläser dann für 6 Wochen lang kühl (am besten ~ 10 °C bis 15 °C). Da ich keinen Keller besitze, habe ich die Gläser in einen Karton gestellt und den Karton im Bad deponiert. Die Gläser kann man in Gefrierbeutel stellen, falls mal während des Gärvorgangs Lake überlaufen sollte. Das kann passieren; in den allermeisten Fällen geht die Fermentierung dann trotzdem gut voran.<br><br>Nach 6 Wochen ist das Sauerkraut fertig.<br><br>Notizen:<br>Anmerkung Hast du kein Bügelglas, geht auch ein Schraubdeckelglas. Nur muss das Glas wirklich dicht schließen. Ich habe bei Schraubdeckelgläsern zur Vorsicht noch Küchenfolie zwischen Glas und Deckel gelegt und den Deckel dann wirklich sehr kräftig aufgeschraubt.',
		options: rezepte_haltbares_options
		}
		,
		chat.S2FydG9mZmVsbl9Sw7ZzdGkgbmFjaCBCZXJuZXIgQXJ0LnR4dA = {
			text: 'Rösti nach Berner Art<br><br>Zutaten:<br>750 g mit Schale gekochte Kartoffeln vom Tag zuvor<br>2 EL Zwiebelwürfel<br>60 g Bratfett<br>Salz<br>5 EL Wasser<br>2 EL tiefgefrorene Petersilie<br><br>Zubereitung:<br>Die Kartoffeln abziehen und grob reiben.<br>Die Zwiebelwürfel in einer Pfanne in dem heißen Fett kurz dünsten.<br>Die Kartoffeln zufügen, vermischen und salzen.<br>Zu einem dicken Kuchen flachdrücken.<br>Mit Wasser bespritzen, braten und, sobald sich eine leichte Kruste bildet, mit einem flachen Topfdeckel bedecken und stürzen.<br>Zurück in die Pfanne schieben.<br>Weiterbraten, bis sich wieder auf dem Boden eine Kruste bildet.<br>Mit Petersilie bestreut anrichten.<br><br>Notizen:<br>Dazu passt Gemüse, sehr gut Sauerkraut und alle Rohkostsalate.<br><br>Rösti-Variationen<br>50 g geriebenen Kräuter oder anderen Käse, auch etwas Majoran darunter mengen.<br><br>Etwa 200 g angebratenes und mit Sojasauce und Pfeffer und Brühe gewürztes Sojagranulat unter die Kartoffeln mischen. Mit Muskat würzen.<br><br>Kleingeschnittene Paprikaschoten, gedünstete Maiskörner, Erbsen oder Champignons untermengen und mitbraten.',
		options: rezepte_kartoffeln_options
		}
		,
		chat.TmFjaHRpc2NoX0hhZmVyZmxvY2tlbiBtaXQgQmFja2tha2FvIHVuZCBadWNrZXIudHh0 = {
			text: 'Haferflocken mit Backkakao und Zucker<br><br>Zutaten:<br>1 Tasse Haferflocken<br>Kokos-Reis-Drink<br>Zucker<br>Backkakao<br><br>Zubereitung:<br>Die Haferflocken in eine Schüssel geben. Mit Zucker und Backkakao vermengen. Mit Kokos-Reis-Drink auffüllen und mischen.<br><br>Notizen:<br>Es kann auch ein anderer Pflanzendrink genommen werden. Ich liebe den Kokos-Reis-Drink nur am meisten.',
		options: rezepte_nachtisch_options
		}
		,
		chat.TmFjaHRpc2NoX0tyYWZ0a3VnZWxuIElJLnR4dA = {
			text: 'Kraftkugeln II<br><br>Zutaten:<br>100 g Studentenfutter<br>200 g Früchtemüsli<br>3 EL Agavendicksaft<br><br>Zubereitung:<br>Das Studentenfutter mahlen. Das Früchtemüsli mahlen. Ein bisschen davon zur Seite stellen.<br><br>Beides mit dem Agavendicksaft vermengen. Würste formen, daraus Kugeln formen. Die Kügelchen in dem restlichen gemahlenen Früchtemüsli wälzen.<br><br>Notizen:<br>Kann auch mit Haferflocken gemacht werden. Alternativ noch getrocknete Früchte hinzufügen.',
		options: rezepte_nachtisch_options
		}
		,
		chat.TmFjaHRpc2NoX0tyYWZ0a3VnZWxuIMK7SGFmZXJrcmFmdMKrLnR4dA = {
			text: 'Kraftkugeln »Haferkraft«<br><br>Zutaten:<br>200 g Haferflocken<br>1 Studentenfutter<br>Agavendicksaft nach belieben<br><br>Zubereitung:<br>Das Studentenfutter in die Küchenmaschine geben, auf Stufe 10 ca. 20 Sekunden lang schreddern (sich die Ohren am besten dabei zuhalten). 200 g Haferflocken dazugeben, auf Stufe 6 20 Sekunden lang schreddern. Die Küchenmaschine angeschaltet lassen. Agavendicksaft nach belieben langsam hinzufügen, bis die Maschine ächzt. Die Küchenmaschine ausschalten, die Masse herausnehmen und zu Würsten formen. Die Würste in Stücke so lang wie das erste Fingerglied vom Zeigefinger schneiden und dann aus den Stücken Kugeln formen.',
		options: rezepte_nachtisch_options
		}
		,
		chat.TmFjaHRpc2NoX01pbGNocmVpcy50eHQ = {
			text: 'Milchreis<br><br>Zutaten:<br>1 Tasse Milchreis (Rundkornreis)<br>1 Packung Vanillepuddingpulver <br>2 Päckchen Vanillezucker<br>1 Liter Kokos-Reis-Drink<br><br>Zubereitung:<br>Das Vanillepuddingpulver mit dem Vanillezucker und etwas Kokos-Reis-Drink vermengen. Wenn es sich aufgelöst hat, den restlichen Kokos-Reis-Drink hinzugeben. Den Pudding aufkochen und den Milchreis hinzufügen. Sobald es heftig kocht, die Hitze herunterschalten und ca. 40 Minuten leicht köcheln.<br><br>',
		options: rezepte_nachtisch_options
		}
		,
		chat.TmFjaHRpc2NoX1NjaG5lbGxlIENyw6pwZXMudHh0 = {
			text: 'Schnelle Crêpes<br><br>Zutaten:<br>5 EL Mehl<br>Wasser<br>2 Tütchen Vanillezucker<br><br>Zubereitung:<br>Alles vermengen.<br>In einer beschichteten Pfanne auf Stufe 7 von 9 von beiden Seiten backen.',
		options: rezepte_nachtisch_options
		}
		,
		chat.TmFjaHRpc2NoX1dvYmJseS1QZmFubmt1Y2hlbi50eHQ = {
			text: 'Wobbly-Pfannkuchen<br><br>Zutaten:<br>3 Eier<br>300 g Mehl<br>3 Päckchen Vanillezucker<br>600 ml Wasser<br><br>Zubereitung:<br>Die Zutaten miteinander vermengen. Im Sandwichmaker 3 Minuten backen.<br><br>Notizen:<br>Alternativ kann man sie auch in eine Pfanne gießen und dort ausbacken.',
		options: rezepte_nachtisch_options
		}
		,
		chat.TnVkZWxuX0dlYnJhdGVuZSBOdWRlbG4gbWl0IEVpLnR4dA = {
			text: 'Gebratene Nudeln mit Ei<br><br>Zutaten:<br>500 g Nudeln<br>5 Eier 1<br>Knoblauch<br>Pfeffer<br>Salz<br>1 EL Margarine<br><br>Zubereitung:<br>Die Nudeln in 2 Liter Wasser kochen.<br>Die Eier mit der Bouillon, Knoblauch, Salz und Pfeffer verquirlen.<br>1 EL Margarine in einer Pfanne schmelzen. Die Nudeln abgießen, in die Pfanne geben und anbraten.<br>Das Ei-Gemisch über die Nudeln geben und anbraten.<br><br>Notizen:<br>In das Ei-Gemisch kann man auch wunderbar noch Frühlingszwiebeln hinein schnippeln.',
		options: rezepte_nudeln_options
		}
		,
		chat.TnVkZWxuX09uZS1Qb3QgVG9tYXRlbm51ZGVsbi50eHQ = {
			text: 'One-Pot Tomatennudeln<br><br>Zutaten:<br>1 EL Margarine<br>250 g Nudeln (z.B. Fussili oder Penne)<br>1 Päckchen passierte Tomaten (à 500 ml)<br><br>Zubereitung:<br>Die Margarine im Topf auf Stufe 7 erhitzen.<br>Die Nudeln dazugeben, anbraten, öfters mal durchrühren.<br>In der Zwischenzeit die passierten Tomaten öffnen und bereit stellen.<br>Wenn die Nudeln schön goldbraun angebraten sind, die Nudeln mit den passierten Tomaten ablöschen. Den Tetrapack noch einmal mit Wasser befüllen, also noch einmal 500 ml Wasser dazu geben.<br>Den Topf mit einem Deckel abdecken, das Gericht kurz zum köcheln bringen und dann den Herd abschalten (funktioniert nur bei herkömmlichen Kochplatten, nicht gut bei Ceran und vermutlich gar nicht bei Induktion).<br><br>Notizen:<br>Nach gut 15-20 Minuten sind die Nudeln in der Tomatensauce fertig und man hat nur einen Topf verwendet; daher der Name.',
		options: rezepte_nudeln_options
		}
		,
		chat.UmVpc19SZWlzIG1pdCBHZW3DvHNlLnR4dA = {
			text: 'Reis mit Gemüse<br><br>Zutaten:<br>1 Glas Reis<br>3 Glas Wasser<br>½ Beutel Pfannengemüse (TK)<br>Sojasauce<br>Brühe<br>Knoblauchpulver<br>Currypulver<br>Pfeffer<br><br>Zubereitung:<br>1 Glas Reis mit 3 Glas Wasser in einen Topf geben. Das gefrorene Gemüse mit dazu geben. Die Gewürze hinzufügen. Alles zusammen aufkochen. Den Herd ausschalten und auf dem heißen Herd für ca. 20-30 Minuten stehen lassen. Servieren.',
		options: rezepte_reis_options
		}
		,
		chat.U2FsYXRfTnVkZWxzYWxhdC50eHQ = {
			text: 'Nudelsalat<br><br>Zutaten:<br>500 g Nudeln (Fussili)<br>500 g Nudeln (Penne)<br>1 Dose Erbsen<br>1 Glas Gurkensticks<br>2 Päckchen Räuchertofu<br>1 Tube Salatcreme<br>1.5 EL Salz<br>0.5 TL Knoblauch<br>0.5 TL Pfeffer<br>1 EL Margarine<br><br>Zubereitung:<br>In einer Pfanne die Margarine schmelzen.<br>Den Räuchertofu zerbröseln und in die Pfanne geben und knusprig braten.<br>Die Erbsen abtropfen lassen. Die Gurkensticks abtropfen, den Sud aufbewahren.<br>Die Nudeln in 4 Liter kochendes Wasser geben und fertig kochen.<br>Danach die Nudeln unter fließendem, kalten Wasser abschrecken und abtropfen.<br>Räuchertofu, Erbsen, Gurkensticks und Salatcreme zu den Nudeln geben.<br>2 EL Gurkensud in die Salatcremetube geben.<br>1.5 EL Kräutersalz, 0.5 TL Knoblauch, 0.5 TL Pfeffer in die Salatcremetube hinzufügen.<br>Die Tube gut schütteln und alles über den Nudelsalat geben.<br>Den Nudelsalat sehr gut durchrühren.<br><br>Notizen:<br>Der Nudesalat schmeckt am nächsten Tag noch besser. Dazu passt wunderbar Kräuterbaguette.',
		options: rezepte_salat_options
		}
		,
		chat.U2F1Y2VfQm9sb2duZXNlc2F1Y2UudHh0 = {
			text: 'Bolognesesauce<br><br>Zutaten:<br>2 Päckchen passierte Tomaten (à 250 ml)<br>1 EL Margarine<br>1 TL Salz<br>0,5 TL Knoblauch<br>0,5 TL Pfeffer<br>2 Hand voll Sojagranulat<br><br>Zubereitung:<br>Das Sojahack kochen.Sojahack auswaschen. Sojahack auspressen. Sojahack anbraten. Mit passierten Tomaten ablöschen. Würzen.',
		options: rezepte_sauce_options
		}
		,
		chat.U2F1Y2VfQ2hpbGlzYXVjZS50eHQ = {
			text: 'Chilisauce<br><br>Zutaten:<br>1 Flasche Billig-Ketchup<br>1 Glas Piri-Piri<br>2 TL Salz<br>2 EL Knoblauchpulver<br>2 EL Olivenöl<br>4 EL Zitronensaft<br><br>Zubereitung:<br>Die Chilis mörsern, die Kerne dabei gut zerdrücken (Handschuhe dabei tragen!). Alle Zutaten miteinander vermengen.',
		options: rezepte_sauce_options
		}
		,
		chat.U2F1Y2VfS8Okc2XDpGhubGljaGUgU2F1Y2UgKHZlZ2FuKS50eHQ = {
			text: 'Käseähnliche Sauce (vegan)<br><br>Zutaten:<br>2 Möhren<br>1 Zwiebel<br>2 Kartoffeln<br>1 TL Margarine<br>1 TL Senf<br>1 EL Zitronensaft<br>1 TL Knoblauchpulver<br>½ TL Salz<br>1 Hand voll Cashewnüsse<br>2 TL Hackfleischgewürzmischung<br><br>Zubereitung:<br>Die Cashewnüsse mahlen und zur Seite stellen. Die Möhren waschen und klein schneiden. Die Zwiebel schälen und klein Schneiden. Die Kartoffel schälen, klein schneiden und abwaschen. Das Gemüse im Foodprozessor kochen (alternativ hilft eventuell auch ein Pürierstab).<br><br>Das gekochte durch ein Sieb geben, etwas von der Flüssigkeit zur Seite stellen. Die gemahlenen Cashewnüsse mit dem gekochten vermengen und im Foodprozessor noch einmal aufkochen. Die Margarine, den Senf, den ZHitronensaft, das Knoblauchpulver, das Salz und die Hackfleischgewürzmischung dazu geben. Eventuell etwas von der aufbewahrten Flüssigkeit dazugeben, falls es zu sämig geworden ist.<br><br>Die käseähnliche Sauce durch ein Sieb geben, um die restlichen kleinen Cashew-Krümel abzufiltrieren.<br><br>Durch gekochte Nudeln (zum Beispiel Penne) vermengen, servieren..',
		options: rezepte_sauce_options
		}
		,
		chat.U29uc3RpZ2VzX0VpZXIgKHBlcmZla3QpLnR4dA = {
			text: 'Eier (perfekt)<br><br>Zutaten:<br>Wasser<br>4 Eier<br><br>Zubereitung:<br>Wasser in einem Topf zum Kochen bringen.<br>Mit einer Nadel oder einer Pinnwandnadel in die Unterseite der Eier hinein piken.<br>Die Eier mit einem Löffel vorsichtig und langsam in das Wasser geben.<br>Einen Timer auf 7:30 Minuten stellen.<br>Nach Ablauf der Zeit vorsichtig den Topf mit den Eiern mit kaltem Wasser füllen und die Eier abschrecken.<br><br>Notizen:<br>Perfekte Eier, wie wir sie mögen.',
		options: rezepte_sonstiges_options
		}
		,
		chat.U29uc3RpZ2VzX0dlYmFja2VuZXIgQ2FtZW1iZXJ0LnR4dA = {
			text: 'Gebackener Camembert<br><br>Zutaten:<br>4 Ecken Camembert (nicht zu reif), gut gekühlt<br>2 EL Mehl<br>1 Ei<br>4 EL Semmelbrösel<br>2 EL Öl<br><br>Zubereitung:<br>Die gut gekühlten Camembertecken zuerst in dem Mehl, dann in dem verquirlten Ei und zuletzt in den Semmelbröseln wenden.<br>Die Käse-Ecken noch etwa 10 Minuten in den Kühlschrank stellen.<br>Dann im heißen Öl zu schöner Farbe backen. Dies muss rasch geschehen, der Käse darf nicht zerlaufen.<br><br>Notizen:<br>Die Käse-Ecken können auf einem Salatblatt angerichtet werden. Dazu kann Weißbrot oder Vollkornbrot gereicht werden.',
		options: rezepte_sonstiges_options
		}
		,
		chat.U29uc3RpZ2VzX0dlbcO8c2VicsO8aGUudHh0 = {
			text: 'Gemüsebrühe<br><br>Zutaten:<br>60 g Steinsalz<br>40 g Suppengemüse<br>Knoblauchpulver<br>Chilipulver<br><br>Zubereitung:<br>Das Steinsalz und das getrocknetes Suppengemüse in einem leistungsfähigen Mixer fein mahlen. Etwas Knoblauchpulver und etwas Chilipulver dazu geben. In dunkle, verschließbare Gefäße füllen und aufbewahren.',
		options: rezepte_sonstiges_options
		}
		,
		chat.U29uc3RpZ2VzX1Nvbm5lbmJsdW1lbmtlcm5lIGtlaW1lbiwgc3Byb3NzZW4gbGFzc2VuLnR4dA = {
			text: 'Sonnenblumenkerne keimen, sprossen lassen<br><br>Zutaten:<br>Sonnenblumenkerne<br>Wasser<br>Kaffeefilter<br><br>Zubereitung:<br>Sonnenblumenkerne 24 Stunden in Wasser einweichen. Gut durchspülen, die Spelzen und gebrochenen Kerne dabei abgießen. Das Wasser muss danach klar sein. Die Sonnenblumenkerne portionsweise in Kaffeefilter füllen. Die Kaffeefilter oben einmal falzen. Am besten in einem leeren Kartoffelnetz oder Gemüsenetz aufbewahren und zweimal täglich (Morgens und Abends) mit kaltem Wasser durchspülen. Täglich neue Sprossen ansetzen. Am ca. 5. Tag können die Sprossen gegessen werden. Reife Sprossen lassen die Kaffeefilter leicht bersten; die Wurzeln schieben sich durch und die Blätter beginnen sich grün zu färben.',
		options: rezepte_sonstiges_options
		}
		,
		chat.VHJpbmtlbl9BcGZlbC1Jbmd3ZXItWml0cm9uZS1TaG90LnR4dA = {
			text: 'Apfel-Ingwer-Zitrone-Shot<br><br>Zutaten:<br>65 % Apfelsaft<br>25 % Ingwersaft<br>10 % Zitronensaft<br><br>Zubereitung:<br>Den Ingwer waschen.<br>Den Ingwer im Foodprozessor klein mahlen.<br>Nun den Ingwer durch ein Sieb geben, den Saft in einem Gefäß auffangen. Schön durchpressen, damit möglichst viel Saft herauskommt.<br>Mit dem Apfelsaft und dem Zitronensaft vermengen.<br>In eine saubere Flasche füllen und innerhalb von drei Tagen verbrauchen.<br><br>Notizen:<br>Die Serviermenge pro Portion ist ein Pinnchen (Schnapsglas) = 2 dl.<br><br>Die benötigte Menge Apfel- und Zitronensaft lässt sich ganz einfach errechnen<br><br>Die Menge an Ingwersaft abmessen.<br><br>Menge an Ingwersaft  2,6 = Apfelsaft<br>Menge an Ingwersaft  0,4 = Zitronensaft<br><br>Als Beispiel 50 ml Ingwersaft<br><br>50 ml Ingwersaft  2,6 = 130 ml Apfelsaft<br>50 ml Ingwersaft  0,4 = 20 ml Zitronensaft<br><br>= 200 ml Getränk  2 dl [20 ml] = 10 Shots (Getränke-Klein-Portionen).',
		options: rezepte_trinken_options
		}
		,
		chat.VHJpbmtlbl9FaXN0ZWUudHh0 = {
			text: 'Eistee<br><br>Zutaten:<br>1 l Wasser<br>4 Beutel Tee<br><br>Zubereitung:<br>Den Tee mit kaltem Wasser übergießen. Mehrere Stunden in den Kühlschrank stellen.<br>Kann auf Wunsch noch gezuckert werden.',
		options: rezepte_trinken_options
		}
		,
		chat.VHJpbmtlbl9SaWNvbGEgSGVpw59nZXRyw6Ruay50eHQ = {
			text: 'Ricola Heißgetränk<br><br>Zutaten:<br>2 Ricola-Bonbons<br>Wasser<br><br>Zubereitung:<br>Zwei Ricola-Bonbons in eine Tasse geben. Mit kochendem Wasser übergießen. 5 Minuten ziehen lassen. Durchrühren, fertig.<br><br>Die Bonbons lösen sich auf und geben einen süßen, dem Hals wohltuenden Tee.',
		options: rezepte_trinken_options
		}
		,
		chat.VHJpbmtlbl9XYXNzZXIgbWl0IE9yYW5nZW5zYWZ0LnR4dA = {
			text: 'Wasser mit Orangensaft<br><br>Zutaten:<br>100 ml Orangensaft<br>1 L Wasser<br><br>Zubereitung:<br>Beides miteinander vermengen. Das ergibt eine sehr sanfte Schorle.',
		options: rezepte_trinken_options
		}
		,
		chat.VHJpbmtlbl9XYXNzZXIgbWl0IFppdHJvbmVuc2FmdC50eHQ = {
			text: 'Wasser mit Zitronensaft<br><br>Zutaten:<br>Zitronensaft (aus dem Plastikspritzer)<br>Wasser<br><br>Zubereitung:<br>Vier Spritzer Zitronensaft pro 1 L Wasser. Schmeckt laff, aber gut genug.',
		options: rezepte_trinken_options
		}
		,
		chat.Wndpc2NoZW5kdXJjaF9Bcm1lciBSaXR0ZXIudHh0 = {
			text: 'Armer Ritter<br><br>Zutaten:<br>4 Scheiben Weißbrot, Toast oder halbe Brötchen<br>0,5 Liter Milch<br>1 Ei<br>0,5 EL Zucker nach belieben<br>0,5 Prisen Salz<br><br>Zubereitung:<br>Milch, Eier, Zucker und Salz in einer Schüssel verrühren.<br>Brot in eine flache Schale geben, Eiermilch darüber gießen, durchziehen lassen.<br>Fett in einer Pfanne erhitzen.<br>Brotscheiben von beiden Seiten goldbraun braten.',
		options: rezepte_zwischendurch_options
		}
 chat.rezepte = {
        text: 'Aus welcher Kategorie möchtest du ein Rezept haben?',
		options: rezepte_categories, rezepte_abort
    }