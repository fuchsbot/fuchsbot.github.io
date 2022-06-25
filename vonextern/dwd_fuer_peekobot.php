<?php
session_start();
//session_destroy();exit;
/*
vhdl13_dwog = Deutschlandweit
dweh	Nordrhein-Westfalen
dwhg	Niedersachsen und Bremen
dwhh	Schleswig-Holstein und Hamburg
dwlg	Sachsen
dwlh		Sachsen-Anhalt
dwli		Thüringen
dwmg	Bayern
dwsg	Baden-Württemberg
dwoh	Hessen
dwoi	Rheinland-Pfalz und Saarland
dwpg	Brandenburg und Berlin
dwph	Mecklenburg-Vorpommern

*/
if(!isset($_GET['bundesland']))
{
	header("Location: ?bundesland=deutschlandweit");
} 

else {
	$bundeslaender = array('nw','ni','hb','sh','hh','st','sn','th','by','bw','he','rp','bb','be','mv','sl');
	$bundesland = trim($_GET['bundesland']);
	$dwd_html = "dwog";
	if(in_array($bundesland,$bundeslaender))
	{
		
		if($bundesland == "nw"){$dwd_html  = "dweh";}
		elseif($bundesland == "ni"){$dwd_html  = "dwhg";}
		elseif($bundesland == "hb"){$dwd_html  = "dwhg";}
		elseif($bundesland == "sh"){$dwd_html  = "dwhh";}
		elseif($bundesland == "hh"){$dwd_html  = "dwhh";}
		elseif($bundesland == "st"){$dwd_html  = "dwlh";}
		elseif($bundesland == "sn"){$dwd_html  = "dwlg";}
		elseif($bundesland == "th"){$dwd_html  = "dwli";}
		elseif($bundesland == "by"){$dwd_html  = "dwmg";}
		elseif($bundesland == "bw"){$dwd_html  = "dwsg";}
		elseif($bundesland == "he"){$dwd_html  = "dwoh";}
		elseif($bundesland == "rp"){$dwd_html  = "dwoi";}
		elseif($bundesland == "sl"){$dwd_html  = "dwoi";}
		elseif($bundesland == "bb"){$dwd_html  = "dwpg";}
		elseif($bundesland == "be"){$dwd_html  = "dwpg";}
		elseif($bundesland == "mv"){$dwd_html  = "dwph";}
		else{$dwd_html  = "dwog";} // deutschlandweit
		
		$bundesland = trim($_GET['bundesland']);
	
} else {
	$bundesland  = "deutschlandweit";
	$dwd_html = "dwog";
}


}

if(!isset($_SESSION['bundesland']))
	{
		$_SESSION['bundesland'] = $bundesland;
		//echo "neu";
	} 
else 
{
	
	if($_SESSION['bundesland'] !== $bundesland){
			$_SESSION['bundesland'] = $bundesland;
			fetch_wetter($dwd_html);
			$_SESSION['starttime'] = time();
	}
}


if(!isset($_SESSION['starttime'])){
	$_SESSION['starttime'] = time();
	//	echo $dwd_html;
	//+fetch
	fetch_wetter($dwd_html);
	echo $_SESSION['abgerufen_am'];
	echo $_SESSION['wetter'];
	} else 
	{
		if(time()-$_SESSION['starttime']>(30*60))
		{
			//+fetch
			fetch_wetter($dwd_html);
			echo $_SESSION['abgerufen_am'];
			echo $_SESSION['wetter'];
			$_SESSION['starttime'] = time();
		}
		else 
		{
			//echo "Altes.";
			//echo time()-$_SESSION['starttime'];
			echo $_SESSION['abgerufen_am'];
			echo $_SESSION['wetter'];
			//echo time()-$_SESSION['starttime'];
		}
		
	}



function fetch_wetter($dwd_html)

	{
	//$url = "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/text/vhdl13_dwhg.html";
	$url = "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/text/vhdl13_".$dwd_html.".html";
	//echo $url;exit;
	

// create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, $url);

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);

        // close curl resource to free up system resources
        curl_close($ch);  

$output = str_replace('<pre style="font-family: sans-serif">','',$output);
$output = str_replace('</pre>','',$output);


//$_SESSION['starttime']  = time();
$now = time();
$_SESSION['abgerufen_am'] = "Abgerufen am: ".date("d.m.Y",$now)." um ".date("H:i:s",$now)." Uhr<hr>";
$_SESSION['wetter'] = utf8_encode($output);

file_put_contents("check.txt", $_SESSION['bundesland']."|".$_SESSION['abgerufen_am']."\n", FILE_APPEND | LOCK_EX);



//file_put_contents("wetter.html",utf8_encode($output));

} 

exit;
REFRESH:
session_start();
if(!isset($_SESSION['bundesland']))
	{
		$_SESSION['bundesland'] = $bundesland;
	} 
else 
{
	//var_dump($_SESSION['bundesland']);
	if($_SESSION['bundesland'] !== $bundesland){
			$_SESSION['bundesland'] = $bundesland;
		fetch_wetter($dwd_html);
	
	}
	
	
}

//session_destroy();exit;
$now = time();


function fetch_wetter2($dwd_html)

	{
	//$url = "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/text/vhdl13_dwhg.html";
	$url = "https://www.dwd.de/DWD/wetter/wv_allg/deutschland/text/vhdl13_".$dwd_html.".html";
	//echo $url;
	

// create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, $url);

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);

        // close curl resource to free up system resources
        curl_close($ch);  

$output = str_replace('<pre style="font-family: sans-serif">','',$output);
$output = str_replace('</pre>','',$output);


$_SESSION['starttime']  = time();
$_SESSION['abgerufen_am'] = "Abgerufen am: ".date("d.m.Y",$now)." um ".date("H:i:s",$now)." Uhr<hr>";
$_SESSION['wetter'] = utf8_encode($output);

//file_put_contents("wetter.html",utf8_encode($output));

} 


if(!isset($_SESSION['wetter']))
{
	fetch_wetter($dwd_html);
	
}

if($now-$_SESSION['starttime'] > (30*60)){
		session_destroy();
		GOTO REFRESH;
}
echo $_SESSION['abgerufen_am'];
echo $_SESSION['wetter'];




?>