/**
 * 
 */
//script file for youtube project
//BBSE4dA4aLg,IZ0IhkGSXN0,BBSE4dA4aLg
var videoBoxArray = ['DhDzYg0i1HY'];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var i;
var player;
function onYouTubeIframeAPIReady(){
	i =0;
	console.log('API fired');
	player = new YT.Player('player',{
		height : '390',
		width : '640',
		videoId : videoBoxArray[0],
		events :{
			'onReady' : onPlayerReady,
			'onStateChange' : 'onPlayerStateChange'
		}
	});
}

function onPlayerReady(event){
	console.log('onReady function fired!');
	//videoBoxArray.shift();
	console.log(videoBoxArray);
	event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event){
	if(event.data == YT.PlayerState.ENDED ){
		i++;
		console.log("video ended!");
		//cleanQueue(videoBoxArray[0]);
		console.log(event);

		//videoBoxArray.shift();
		var id = videoBoxArray[i];
		event.target.loadVideoById(id,5,"large");

	}
}

function stopVideo(){
	player.stopVideo();
}

function playThis(id){
	console.log(id);
}


/* <div class='playlist-item'>
<img src="https://i.ytimg.com/vi/5LFdcZe7WW4/default.jpg" alt="not-found"/>
</div> */
function enqueue(id,title,url){
	console.log(id+" "+title+" "+url);
	var playListString = "<div class='playlist-item' id ='"+id+"' onclick=playThis('"+id+"')><img src='"+url+"' alt='Thumb Not Found'/></div>"
	$("#playList").append(playListString);
	postEnqueueAction(id);
}

function postEnqueueAction(id){
	console.log("Pushing video to array!");
	videoBoxArray.push(id);
}

function playThis(id){
	console.log(id);
	i = videoBoxArray.indexOf(id);
	player.loadVideoById(id,5,'large');
}


//not required
function cleanQueue(id){
	//TODO: clean the queue
}













