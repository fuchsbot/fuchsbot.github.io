chat.station_ffn = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
			{
					text: text_stationclick+'http://player.ffn.de/radioffn.mp3\');">FFN Radio</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffnhits.mp3\');">FFN Hits</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffnrockt.mp3\');">FFN Rockt</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffngold.mp3\');">FFN Gold</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffn80er.mp3\');">FFN 80er</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffn90er.mp3\');">FFN 90er</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffncomedy.mp3\');">FFN Comedy</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/ffntannenbaum.mp3\');">FFN Tannenbaum</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/radiobollerwagen.mp3\');">FFN Radio Bollerwagen</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://player.ffn.de/peppermintfm.mp3\');">FFN Peppermint</span>',
					next: 'station_ffn_after'
					},
					
			]
}

chat.station_ffn_after = {
	text: text_playpausebutton,
	options: 	([{
					text: anderen_kanal_auswaehlen,
					next: 'station_ffn'
					}]).concat(radio_after)
}