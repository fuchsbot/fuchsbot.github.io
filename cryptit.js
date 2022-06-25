chat.crypt_pre = {
	text: 'Jetzt folgt: Alphacrypt2 von <a href="" target="_blank">Joseph Myers</a><br>Die Umwandlung findet auf deinem Gerät statt; es werden keine Daten an den Server gesendet. Falls du zweifelst, schau in den Quellcode dieser Webseite.<br><br><i>»Alpha Crypt uses MD5 cryptographic signatures on top of an XOR text encryption algorithm to form a practically unbreakable hybrid.«</i> — Joseph Myers',
	next: 'crypt_pre2'
  
}

chat.crypt_pre2 = {
	text: '🤫🤐<h4>»Je stiller du wirst, desto mehr kannst du hören.«  — Rumi</h4>',
	next: 'crypt_pre3'
  
}

chat.crypt_pre3= {
	text: 'Beispieltext:<br><b>d7nY iKXX 7Pte /CVn H4lX0ESl j3qWß, pUDJx cYE7 TW/6SkBWP/dB+nkH OLWqß.</b><br>Passwort: <b>einszweidreivier</b>',
	next: 'crypt'
  
}

chat.crypt = {
	text: '<h2>Verschlüsseln / Entschlüsseln</h2><form action="?" name="fe" onsubmit="process(window.a=!window.a); return false"><div align="center"><textarea name="re" style="width:100%;min-width:100%;max-width:100%;height:10em;padding:1em;" placeholder="Schreib deinen Text hier."></textarea><p>Passwort: <input type="text" name="key" size="24" /><p style="display:none;">Time: <input type="text" name="time" size="24" /></p><br /><input type="button" value="Verschl&uuml;sseln" onclick="process(1)" /><input type="button" value="Entschl&uuml;sseln" onclick="process(0)" /><input type="reset" value="Reset" /> </p></div></form>',
    next: 'frage_beenden'
}

