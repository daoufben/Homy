<!DOCTYPE html>

<?php include("../head.php"); ?>

<head >

<link href="../common/default.css" rel="stylesheet" type="text/css" media="all" />
<link href="../common/fonts.css" rel="stylesheet" type="text/css" media="all" />
<script src="Chart.js"></script>
<style>
.topright {
    position: absolute;
    font-size: 18px;
    top: 108px;
    right: 16px;
}
</style>

</head>
  
<div id="header-wrapper">
	<div id="header" class="container">
		<div id="logo">
			<h1><a href="../index.php">Home Control</a></h1>
			<span>By <a href="../index.php">Fouad Benhaida</a></span> </div>
		<div id="menu">
			<ul>
				<li><a href="../index.php" accesskey="1" title="">Homepage</a></li>
				<li><a href="../relay/relay.php" accesskey="2" title="">Relay</a></li>
				<li class="current_page_item"><a href="weather.php" accesskey="3" title="">Weather</a></li>
				<li><a href="#" accesskey="4" title="">Security Cam</a></li>
				<li><a href="#" accesskey="5" title="">Contact Us</a></li>
			</ul>
		</div>
	</div>
</div>

<body>
	<form name="SelectDuration">
		<input type="radio" name="duration" value="oneHour" checked> Last hour<br>
		<input type="radio" name="duration" value="twentyFourHour"> Last 24 Hours<br>
		<input type="radio" name="duration" value="all"> All  
	</form>
	<center>
		<div style="width:70%">
			<div>
				<canvas id="canvas" height="720" width="1080"></canvas>
			</div>
		</div>
		<div class="topright">		
			<aside>
				<?php
					echo file_get_contents ("meteoWidget.html");
				?>
			</aside>
		</div>	
	</center>


	<script>
			
		//var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var separators = [' ', '\n', '\r\n', '\r'];
        var fileData = new Array();
        
        var request = new XMLHttpRequest();
        request.open("GET", 'temperatureTimeline.txt', false);
        request.send(null);
        var returnValue = request.responseText;        
        
        fileData = returnValue.split(new RegExp(separators.join('|'), 'g'));
        
        //console.log(fileData);
        var numberData = fileData.length;
		
		var duration = document.getElementsByName('duration');
		var numberSampling = numberData/3;
		var prev = null;
		for(var i = 0; i < duration.length; i++) {
			duration[i].onclick = function(numberSampling) {
				// (prev)? console.log(prev.value):null;
				// if(this !== prev) {
					// prev = this;
				// }
				//console.log(this.value)				
				if (this.value == "oneHour")
				{
					numberSampling = 4;
				}
				else if (this.value == "twentyFourHour")
				{
					numberSampling = 96;
				}
			};
		}		
		console.log(numberSampling);
		numberSampling = Math.min(numberSampling,numberData/3);
        var valueData = new Array();
        var labelData = new Array();
        for (var i = (numberData/3)-numberSampling; i < (numberData/3); i++)
        {
            valueData[i] = parseFloat(fileData[3*i+2]);
            labelData[i] = fileData[3*i] + " " + fileData[3*i+1];
        }
        console.log(valueData);
		console.log(labelData);
		console.log(numberSampling);
        var lineChartData = {
            labels : labelData,
            datasets : [
                {
                    label: "Temperature °C",
                    fillColor : "rgba(220,220,220,0.2)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : valueData
                }
            ]

        }

        window.onload = function(){
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
                responsive: true
            });
		}
	</script>

</body>
