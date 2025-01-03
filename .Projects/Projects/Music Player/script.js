console.log("Welcome to Music player");

let songIndex = 0;
let audioElement = new Audio('src/songs/1.mp3');
let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
 
let songs = [
    {songName:"Choo lo - The Local Train", filePath :"src/songs/1.mp3", coverPath:"src/covers/1.png"},
    {songName:"Teri Yaadon mein - Shreyas Ghosal", filePath :"src/songs/2.mp3", coverPath:"src/covers/2.png"},
    {songName:"Pehele bhi mein...", filePath :"src/songs/3.mp3", coverPath:"src/covers/3.png"},
    {songName:"Teri Deewani - Kailash Kher", filePath :"src/songs/4.mp3", coverPath:"src/covers/4.png"},
    {songName:"I only beleive on Jassi Bhai", filePath :"src/songs/5.mp3", coverPath:"src/covers/5.png"},
    {songName:"somewhere only we know", filePath :"src/songs/6.mp3", coverPath:"src/covers/6.png"},
    {songName:"Naadan Parinde Ghar aaja", filePath :"src/songs/7.mp3", coverPath:"src/covers/7.png"},
    {songName:"Har kisi ko...", filePath :"src/songs/8.mp3", coverPath:"src/covers/8.png"},
    {songName:"Aaoge tum Kabhi - Local Train", filePath :"src/songs/9.mp3", coverPath:"src/covers/9.png"},
];

songItems.forEach( (element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    let filePath = songs[i].filePath;
    let tempAudioElement = new Audio(filePath);

    tempAudioElement.addEventListener('loadedmetadata', () => {
        let duration = formatTime(tempAudioElement.duration);
        
        element.getElementsByClassName("timeStampp")[0].innerText = duration;
    });

})

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// listen to event

masterPlay.addEventListener("click" , ()=>{
    if(audioElement.paused || audioElement.currentTime == 0){
        // audio is stopped
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
    let currTime = audioElement.currentTime,  duration = audioElement.duration;
    progress = parseInt((currTime /duration)*100 );
    
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    let val = myProgressBar.value;
    let duration = audioElement.duration;

    audioElement.currentTime = val * duration/100;

})

let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

const makeAllPlay = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        let target = e.target;
        let songIndex = parseInt(target.id);

        audioElement.currTime = 0 ;

        if (target.classList.contains('fa-play-circle')) {
            makeAllPlay();
            target.classList.remove('fa-play-circle');
            target.classList.add('fa-pause-circle');
            audioElement.src = `src/songs/${songIndex+1}.mp3`;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
        } else {
            target.classList.remove('fa-pause-circle');
            target.classList.add('fa-play-circle');
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }

        
    });
});


document.getElementById("next").addEventListener('click' , ()=>{
    if(songIndex>9) songIndex = 0;
    else songIndex+=1;

    audioElement.src = `src/songs/${songIndex+1}.mp3`;
    audioElement.play();
    makeAllPlay();
    masterSongName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})
document.getElementById("previous").addEventListener('click' , ()=>{
    if(songIndex<=0) songIndex = 8;
    else songIndex-=1;

    audioElement.src = `src/songs/${songIndex+1}.mp3`;
    audioElement.play();
    makeAllPlay();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        if (masterPlay.classList.contains('fa-play-circle')) {
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            audioElement.play();  
        } 
        
        else if (masterPlay.classList.contains('fa-pause-circle')) {
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();  
        }
    }
});