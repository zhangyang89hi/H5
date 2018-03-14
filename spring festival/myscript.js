
console.log("" + document.body.clientWidth);
console.log("" + document.body.clientHeight);
console.log("" + document.body.offsetWidth);
console.log("" + document.body.offsetHeight);
console.log("" + document.body.scrollWidth);
console.log("" + document.body.scrollHeight);
console.log("" + document.body.scrollTop);
console.log("" + document.body.scrollLeft);
console.log("" + window.screen.width);
console.log("" + window.screen.height);
console.log("" + window.screen.availWidth);
console.log("" + window.screen.availHeight);
console.log("" + window.screenTop);
console.log("" + window.screenLeft);

var music = document.getElementById('music');
var el = document.getElementById('audio_mp3');

el.addEventListener('ended',function(event){
    music.setAttribute('class', '');
})
music.addEventListener('click',function(event){

    var music_disc = document.getElementById('music_disc');
    if(el.paused){
        el.play();
        music_disc.setAttribute('class', 'play');

        // music_disc.style.animationPlayState = 'running';
    }
    else{
        el.pause();
        music_disc.setAttribute('class', '');
    }
    
    
    
})

document.getElementById('p1_lantern').addEventListener('click',function(){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    setTimeout(function(){
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    },10000);
})

