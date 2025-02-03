console.log(" Welcome to spotify clone")
let SongIndex=0;
let audioElement=new Audio('music/music1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
songItems= Array.from(document.getElementsByClassName('songitem'));
let sname=document.getElementById('sname');
let d=document.getElementById('dura');
let index=0;
let songdur=document.getElementsByClassName('dur')
let songs =[
    {songname:"Pehli Dafa", filepath: "music/music1.mp3", coverpath:"posters/poster1.png", duration:"04:58 "},
    {songname:"Taajdaar-e-Haram", filepath: "music/music2.mp3", coverpath:"posters/poster2.jpg", duration:"10:16"},
    {songname:"Tu Cahiye", filepath: "music/music3.mp3", coverpath:"posters/poster3.jpg", duration:"04:32"},
    {songname:"Jeena Jeena", filepath: "music/music4.mp3", coverpath:"posters/poster4.jpg", duration:"03:38"},
    {songname:"Pehli Nazzr me", filepath: "music/music5.mp3", coverpath:"posters/poster5.jpg", duration:"04:13"},
    {songname:"Bakhuda Tumhi ho", filepath: "music/music6.mp3", coverpath:"posters/poster6.jpg", duration:"04:52"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    element.getElementsByClassName("duration")[0].innerText=songs[i].duration;

}
)

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    
    }
}
    
)
    

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    progressBar.value=progress;
  
    
    })
    
    progressBar.addEventListener('change',()=>{
        audioElement.currentTime=progressBar.value*audioElement.duration/100;
    })

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`music/music${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      sname.innerText=songs[index].songname;
      d.innerText=songs[index].duration;


    })
}

)
document.getElementById('next').addEventListener('click',()=>{
if(index>5){
    index=0;
}
else{
    index+=1;
}
audioElement.src=`music/music${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      sname.innerText=songs[index].songname;
      d.innerText=songs[index].duration;
}
)

document.getElementById('prev').addEventListener('click',()=>{
    if(index<0){
        index=5;
    }
    else{
        index-=1;
    }
    audioElement.src=`music/music${index+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
          sname.innerText=songs[index].songname;
          d.innerText=songs[index].duration;
    }
    )