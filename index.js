console.log("welcome to spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songName:"Bhul Bhulaiyaa- Title Track" , filePath:"songs/1.mp3",coverPath:"images/cover1.png"},
    {songName:"De Taali" , filePath:"songs/2.mp3",coverPath:"images/cover2.png"},
    {songName:"Aashiq Hai Ye Chor Nahi Hai" , filePath:"songs/3.mp3",coverPath:"images/cover3.png"},
    {songName:"Tu Ta Meri Jaan Ae" , filePath:"songs/4.mp3",coverPath:"images/cover4.png"},
    {songName:"Parindey Yaar Mere Jigri" , filePath:"songs/5.mp3",coverPath:"images/cover5.png"},
    {songName:"Sajaunga Lutkar Bhi" , filePath:"songs/6.mp3",coverPath:"images/cover6.png"},
    {songName:"Apna Har Din Aise Jiyo" , filePath:"songs/7.mp3",coverPath:"images/cover7.png"},
    {songName:"Mera Bhai Tu" , filePath:"songs/8.mp3",coverPath:"images/cover8.png"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

});
// audioElement.play();
//Handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
   
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressbar.value * audioElement.duration)/100;
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
            
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex = e.target.id;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/'+songIndex+'.mp3';
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex >= 8){
       songIndex = 1;
   }else{
       songIndex += 1;
   }
   audioElement.src='songs/'+songIndex+'.mp3';
   masterSongName.innerText = songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 1){
        songIndex = 8;
    }else{
        songIndex -= 1;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
