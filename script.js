//api key = AIzaSyCVK6lhMU68gQYKAFaibfp3PfI7VhbHZBs

var yo = new Object();

$(document).ready(function(){
	
	$("#search").on('click',function(event){
		var q = $('#query').val();
		yo.ajaxCall(q);
	});
});


yo.ajaxCall = function(query){
	$.get(
			"https://www.googleapis.com/youtube/v3/search",
			{
				part : 'snippet, id',
				q: query,
				type: 'video',
				key: 'AIzaSyCVK6lhMU68gQYKAFaibfp3PfI7VhbHZBs'
			},
			function(data){
				console.log(data);
				$("#itembar").html(" ");
				yo.createThumbnail(data.items);
			}
			
	);
}
/*<div class="thumbnail" id="videoId" onClick="enqueue(this)"> 
		<div class="thumnail-object"><img src = 'https://i.ytimg.com/vi/2p_8gx-XHJo/default.jpg'/></div>
		<div class="thumnail-object">How to go to space?</div>*/

yo.createThumbnail= function(items) {
	$.each(items,function(index,value){
	
		//console.log(value.id.videoId + " " + value.snippet.title + " " + value.snippet.thumbnails.default.url);
		var tString = "<div class='thumbnail row' id='"+ value.id.videoId +"' onclick='enqueue(this.id,\""+value.snippet.title+"\",\""+
		value.snippet.thumbnails.default.url+"\")'>" +
				"<div class='col-md-4'><img src='"+value.snippet.thumbnails.default.url+"'/></div>" +
						"<div class='col-md-8'>"+value.snippet.title+"</div></div>";
		console.log(tString);
		$("#itembar").append(tString);
	});
}


