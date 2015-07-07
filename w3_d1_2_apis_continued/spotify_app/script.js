$(function() {

  // your code here
  var $searchForm = $('#spotify-search');
  var $track = $('#track');
  var $resultList = $('#results');
  


  $searchForm.on('submit', function() {
  	event.preventDefault();
  	$.get (
  	'https://api.spotify.com/v1/search?type=track&q=' + $track.val(),
  	function (data) {
  		var songName = data.tracks.items[0].artists[0].name;
  		var album = data.tracks.items[0].album.name;
  		var artist = data.tracks.items[0].name;
  		var artWork = data.tracks.items[0].album.images[0].url;
  		/*var preview = 
  		var play = $.get (
  			'https://api.spotify.com/v1/tracks/' + 
  			)

  		var preview = data.tracks.items.[0].album.preview_url;*/
  		

  		console.log(songName);
  		console.log(artist);	
  		console.log(album);
  		

  		var songTemplate = _.template($('#songTemp').html())
  		var newSong = new NewTrax(songName, artist, album, artWork); 

  		
  		function NewTrax(songName, artist, album, artWork) {
  			this.songName = songName;
  			this.artist = artist;
  			this.album = album;
  			this.artWork = artWork;
  		}

  		NewTrax.all = [];

  		NewTrax.prototype.save = function () {
  			NewTrax.all.push(this);
  		}

  		NewTrax.prototype.render= function () {
  			var $newTrack = $(songTemplate(this));
  			this.index = NewTrax.all.indexOf(this);
  			$newTrack.attr('data-index', this.index);
  			$resultList.prepend($newTrack);
  		}


  		newSong.save();
  		newSong.render();

  		

  		
  		})});

/*
  		console.log(data.tracks.items[0].artists[0].name);
  		console.log(data.tracks.items[0].album.name);
  		console.log(data.tracks.items[0].name);


  	/*	console.log(data.tracks.items)*/
  	

  /*var songTemplate = _.template($('#songTemp').html)
  var newSong = new NewTrax(); 

  function NewTrax(songName, artist, album) {
  	this.songName = songName;
  	this.artist = artist;
  	this.album = album;
  }

  NewTrax.all = [];

  NewTrax.prototype.save = function () {
  	NewTrax.all.push.(this);
  }

  NewTrax.prototype.render= function () {
  	var $newTrack = $(songTemplate(this));
  	this.index = NewTrax.all.indexOf(this);
  	$newTrack.attr('data-index', this.index);
  	$resultList.prepend($newTrack);
  }
*/





});