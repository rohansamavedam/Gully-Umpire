$(document).ready(function(){
	$('#teamone-score').text(0);
	$('#teamone-wickets').text(0);
	$('#teamtwo-score').text(0);
	$('#teamtwo-wickets').text(0);
	var team = 'teamone'
	var balls = 0;
	$('#teamchange').click(function(){
		team = 'teamtwo'
		alert('Team Two')
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "black";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "TC";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls = 0;
		$('#ballspld').text(balls);
	})
	$('#wicket').click(function(){
		var temp = $('#'+team+'-wickets').text()
		var score = parseInt(temp) + 1;
		$('#'+team+'-wickets').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "red";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "W";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#zero').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 0;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "grey";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "0";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#one').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 1;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "grey";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "1";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#two').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 2;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "grey";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "2";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#three').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 3;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "grey";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "3";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#four').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 4;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "green";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "4";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#six').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 6;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "green";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "6";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
		balls++;
		$('#ballspld').text(balls);
	})
	$('#wide').click(function(){
		var temp = $('#'+team+'-score').text()
		var score = parseInt(temp) + 1;
		$('#'+team+'-score').text(score);
		//for individual balls
		var att = document.createAttribute("id"); 
		att.value = "pink";  
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "WD";
		btn.setAttributeNode(att)
		document.getElementById("balltoball").appendChild(btn);
	})


	
});