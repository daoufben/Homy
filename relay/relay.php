<!DOCTYPE html>

<?php include("../head.php"); ?>

<head >

<link href="../common/default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../common/fonts.css" rel="stylesheet" type="text/css" media="all" />
<link href="../common/css-toggle-switch-source/css/style.css" rel="stylesheet">

</head>
  
<div id="header-wrapper">
	<div id="header" class="container">
		<div id="logo">
			<h1><a href="../index.php">Home Control</a></h1>
			<span>By <a href="../index.php">Fouad Benhaida</a></span> </div>
		<div id="menu">
			<ul>
				<li><a href="../index.php" accesskey="1" title="">Homepage</a></li>
				<li class="current_page_item"><a href="relay.php" accesskey="2" title="">Relay</a></li>
				<li><a href="../weather/weather.php" accesskey="3" title="">Weather</a></li>
				<li><a href="#" accesskey="4" title="">Security Cam</a></li>
				<li><a href="#" accesskey="5" title="">Contact Us</a></li>
			</ul>
		</div>
	</div>
</div>

<body>

	 <?php
	 //this php script generate the first page in function of the gpio's status
	 $status = array (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
	 $pins = array(4, 5, 6, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27);
	 for ($i = 0; $i < count($status); $i++) 
	 {
		//set the pin's mode to output and read them
		system("gpio -g mode ".$pins[$i]." out");
		exec ("gpio -g read ".$pins[$i], $status[$i], $return );
		echo ("<div id='main'>
					<div class='container'>
					  <div class='settings'>
						<div class='row'>
						  <div class='question'>
							switch ".$i." Pin ".$pins[$i]."
						  </div>
						  <div class='switch'>");
		if ($status[$i][0] == 0)
		{							  
			echo ("<input id='button_".$i."' class='cmn-toggle cmn-toggle-round' type='checkbox' name='switch ".$i."' checked='checked'>");
		}
		else
		{
			echo("<input id='button_".$i."' class='cmn-toggle cmn-toggle-round' type='checkbox' name='switch ".$i."'>");
		}
		echo("<label for='button_".$i."'></label>
							  </div>
							</div>
						  </div>
						</div>
				  </div>");
		
	 
	 }
	 ?>
	 <!-- javascript -->
	 <script src="script.js"></script>


</body>
