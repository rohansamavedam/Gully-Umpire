$(document).ready(function(){
	$('#teamone-score').text(0);
	$('#teamone-wickets').text(0);
	$('#teamtwo-score').text(0);
	$('#teamtwo-wickets').text(0);
	var team = 'teamone'
	$('#teamchange').click(function(){
		team = 'teamtwo'
		alert('Team Two')
	})
	$('#wicket').click(function(){
		var temp = $('#'+team+'-wickets').text()
		var score = parseInt(temp) + 1;
		$('#'+team+'-wickets').text(score);
	})
	$('#zero').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 0;
		$('#'+team+'-score').text(score);
	})
	$('#one').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 1;
		$('#'+team+'-score').text(score);
	})
	$('#two').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 2;
		$('#'+team+'-score').text(score);
	})
	$('#three').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 3;
		$('#'+team+'-score').text(score);
	})
	$('#four').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 4;
		$('#'+team+'-score').text(score);
	})
	$('#six').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 6;
		$('#'+team+'-score').text(score);
	})


	
});