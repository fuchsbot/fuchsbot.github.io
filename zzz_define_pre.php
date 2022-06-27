<pre><?php 
$inhalt = file_get_contents("zzz_define_pre.txt");
$inhalt = explode("\n
",$inhalt);

for($a=0;$a<count($inhalt);$a++)
{
	$inhalt[$a] = explode("\n",$inhalt[$a]);
}

$output[] = "define('station_sunshine_live', array(
";

foreach($inhalt as $inhalt_output)
{
$output[] = '
		"'.trim($inhalt_output[0]).'" => 
		"'.trim($inhalt_output[1]).'",';


}

$output[] ="));";

$output = implode("\n",$output);

//print_r($inhalt);
print_r($output);
?>