
 const gedichte_abort =    {
                text: 'Nee, lieber doch kein Rezept..',
                next: 'gedichte_abort',
            }
			
 chat.gedichte_abort = {
        text: 'Ok, gerne. Bald kommen noch viel mehr Rezepte hinzu. Frag mich demnächst gerne wieder nach Rezepten 😊',
		next: 'frage_beenden'
    }
const gedichte_abort_enough =    {
                text: 'Och, an Rezepten genügt mir das fürs Erste.',
                next: 'gedichte_abort',
            }
			chat.gedichte_intro = {
        text: 'Ich liebe es zu kochen 😊 Ich habe sicherlich ein paar interessante Rezepte für dich. Ein paar Rezepte sind vegetarisch, ein paar Rezepte sind vegan. Aber alle sind supereasy zu machen und superlecker.',
		next: 'gedichte'
    }
	
	const gedichte_categories = [
	{
		text: 'Mörike',
		next: 'gedichte_category_mörike'
    },
	{
		text: 'Parisius',
		next: 'gedichte_category_parisius'
    }
]

		chat.gedichte_category_mörike = {
        text: 'Kategorie Mörike. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'E. Mörike — Er ist&apos;s',
                next: 'TcO2cmlrZV9Fcl9pc3RzLnR4dA'
            }
	]
		}
		
		chat.gedichte_category_parisius = {
        text: 'Kategorie Parisius. Welches Rezept möchtest du gerne haben?',
		options: [
		
	            {
                text: 'C. Parisius',
                next: 'UGFyaXNpdXNfRnLDvGhsaW5nLnR4dA'
            }
	]}
			const gedichte_mörike_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Mörike-Rezepte-Übersicht</b>.',
                next: 'gedichte_category_mörike',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'gedichte',
        },
			gedichte_abort_enough
		
		
			]
		
			
			const gedichte_parisius_options = [
		{
                text: 'Gib mir bitte nochmal die <b>Parisius-Rezepte-Übersicht</b>.',
                next: 'gedichte_category_parisius',
		},
		{
                text: 'Gib mir bitte nochmal die <b>Gesamt-Übersicht</b> über die Rezepte.',
                next: 'gedichte',
        },
			gedichte_abort_enough
		
			]
	chat.TcO2cmlrZV9Fcl9pc3RzLnR4dA = {
			text: 'E. Mörike — Er ist&apos;s<br><br>Frühling lässt sein blaues Band<br>Wieder flattern durch die Lüfte;<br>Süße, wohl bekannte Düfte<br>Streifen ahnungsvoll das Land.<br>Veilchen träumen schon,<br>Wollen balde kommen.<br>- Horch, von fern ein leiser Harfenton!',
		options: gedichte_mörike_options
		}
		,
		chat.UGFyaXNpdXNfRnLDvGhsaW5nLnR4dA = {
			text: 'C. Parisius<br>Frühling<br><br>Es grünt mit freudiger Macht,<br>Ein warmer Strahl der Sonne lacht.<br>Ich freu&apos; mich an dem warmen Stamm,<br>Der mein Herz fast fühlen kann,<br>Worüber ich mich herzlich freu,<br>Denn Frühling macht mein Leben neu.',
		options: gedichte_parisius_options
		}
 chat.gedichte = {
        text: 'Aus welcher Kategorie möchtest du ein Rezept haben?',
		options: gedichte_categories, gedichte_abort
    }