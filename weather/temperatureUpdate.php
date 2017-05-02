#!/usr/bin/php

<?php
	exec('sudo ./tempTMP36.out', $output);
	//echo($output[0]);
	
	// Write a new value with file_put_contents()
	$value = date("Y-m-d H:i:s")." ".$output[0];
	file_put_contents("temperatureTimeline.txt", PHP_EOL.$value, FILE_APPEND);

?>