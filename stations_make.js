chat.station_ffn = {
	text: 'Okidoki und welchen Kanal möchtest du? 🙃',
	options: [
			{
					text: text_stationclick+'http://stream.ffn.de/ffn/mp3-192/\');">FFN Radio</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'https://ffn-de-hz-fal-stream09-cluster01.radiohost.de/ffn-hits_mp3-192\');">FFN Hits</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'https://ffn-stream26.radiohost.de/ffn-rockt_mp3-192\');">FFN Rockt</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'https://ffn-stream22.radiohost.de/ffn-gold_mp3-192\');">FFN Gold</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'https://ffn-stream27.radiohost.de/ffn-80er_mp3-192\');">FFN 80er</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://stream.ffn.de/neunziger/mp3-192/\');">FFN 90er</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://stream.ffn.de/ffn-comedy/mp3-192/\');">FFN Comedy</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://stream.ffn.de/tannenbaum/mp3-192/\');">FFN Tannenbaum</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://stream.ffn.de/radiobollerwagen/mp3-192/\');">FFN Radio Bollerwagen</span>',
					next: 'station_ffn_after'
					},
					
			{
					text: text_stationclick+'http://stream.ffn.de/peppermintfm/mp3-192/\');">FFN Peppermint</span>',
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