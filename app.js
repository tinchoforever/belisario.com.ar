var u_time = 0;
var plano01_ent;
var plano02_ent;
var plano03_ent;

var fotos;
var fotos_ent = [];

document.addEventListener("DOMContentLoaded", function() {
    var fotos = document.getElementsByClassName("foto");
    // console.log(fotos);
    // console.log(fotos.length);

    for (var i = 0; i < fotos.length; i++) {
        fotos_ent.push(fotos[i]);
    }
    render();
});

var radio = 2.1;
var scene_opacity = 0;
var moving = false;

function render(){
    requestAnimationFrame(render);
    u_time++;
    //----------------------------------------------------------//
    if(u_time>3500 && u_time<6000){

        for (var i = 0; i < fotos_ent.length; i++) {

            moving=true;
            fotos_ent[i].setAttribute('visible', true);



            if(u_time>4300 && u_time<4700){
                scene_opacity = scene_opacity + 0.0025;
                fotos_ent[i].setAttribute('opacity', scene_opacity);
            }

            if(u_time>5300 && u_time<5700){
                scene_opacity = scene_opacity - 0.0025;
                fotos_ent[i].setAttribute('opacity', scene_opacity);
            }

        }



    }else{
        moving=false;
        for (var i = 0; i < fotos_ent.length; i++) {
            fotos_ent[i].setAttribute('visible', false);
        }
    }



    if (moving===true) {

        for (var i = 0; i < fotos_ent.length; i++) {
            fotos_ent[i].setAttribute('position', {
                x: Math.sin(u_time*0.001+i*10)*radio,
                // y: 1.60,
                y: 1.60+Math.sin(u_time*0.01+i+10)*0.4,
                z: Math.cos(u_time*0.001+i*10)*radio + Math.sin(u_time*0.01+i*10)*0.4
            });
            fotos_ent[i].setAttribute('look-at', {x:0,y:1.6,z:0});
        }

    }
}

var createPlayerFor = function(selector){
    var playSelector = selector + 'Play';
    var audioToPlay = document.querySelector('#' + selector);
    var playerAnimationTrigger = document.querySelector('#' + playSelector);
    var mainEventPlay = function(){
        audioToPlay.emit('play' + selector);

    };
    playerAnimationTrigger.addEventListener('animationend',mainEventPlay);
};



var players = ['first'];
for (var i = 0; i < players.length; i++) {
    createPlayerFor(players[i]);
}

