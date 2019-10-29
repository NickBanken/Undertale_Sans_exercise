let theme = document.getElementById("themeSong");
let mute = true;

document.getElementById("music").onclick = function () {

    let musicBut= document.getElementById('music');
    
    if (mute === true) {
      theme.play();
      musicBut.innerHTML = 'music:on'
      mute = false;
    } else {
      theme.pause();
      musicBut.innerHTML = 'music:off'
      mute = true;
    }
  };


//**********objects************ */

let sans = {
    race: "Monster",
    type: "Skelleton",
    moves:["heal","attack"],
    health: 1000,
    selectMove: function(){
        let move = this.moves[Math.floor(Math.random()*this.moves.length)];
        console.log(`He just selected ${move}.`)
        switch (move){
            case "heal":
                this.heal();
                break;
            case "attack":
                this.attack();
                break;

        }
        
    },
    attack: function () {

        let crit = Math.floor(Math.random() * 5);
        let audio = new Audio('sound/taking-hit.mp3');
        audio.play();
    
        if(crit ==1){
            let damage = 2*Math.floor(Math.random() * 10) + 15;
            console.log(`Sans flexed a crit-bone! He hits a total of ${damage}`);
            me.health -= damage;
            console.log(`%cYour health: `+me.health,"color:red;");
        }else{
            let damage = Math.floor(Math.random() * 10) + 15;
            console.log(`Sans used a normal attack and did a total of ${damage}`);
            me.health -=  damage;
            console.log(`%cYour health: `+me.health,"color:red;");
        }

      },
    heal: function () {
        this.health+=50;
        console.log(this.health);
    }
}


let me = {
    race: "Human",
    type: "Moody",
    moves:["heal","attack"],
    health:100
}

//***************Functions********************* */

function myAttack(){

    let audio = new Audio('sound/attack.mp3');
    audio.play();
    randomPun(puns);
    let crit = Math.floor(Math.random() * 5);
    
    if(crit ==1){
        let damage = 2*Math.floor(Math.random() * 20) + 120;
        console.log(`CRIT! You hit a total of ${damage}`);
        sans.health -= damage;
        sansMove();
        return `sans health: `+sans.health;
    }else{
        let damage = Math.floor(Math.random() * 20) + 120;
        console.log(`You did a total of ${damage}`);
        sans.health -=  damage;
        
        setTimeout(function(){
        sansMove();
       
        }, 500);
        return `sans health: `+sans.health;
    }
}

function heal(){
    
    let audio = new Audio('sound/heal.mp3');
    audio.play();
    if(me.health < 100){
        setTimeout(function(){
            randomPun(puns);
          }, 500);

        let healing = Math.floor(Math.random() * 20) + 8;
        me.health += healing;

        console.log(`You healed ${healing}`);
        if(me.health <= 100){
            sans.selectMove();
            return me.health;
        }else{
            sans.selectMove();
            console.log('haha')
            return me.health = 100;
        }
       
        
    }else{
        setTimeout(function(){
            randomPun(overHealReaction);
          }, 500)
        
        return `Your current health is already at max: `+me.health
    }

    
}



//**********SANS********** */

function sansMove(){
    console.log('sans is making a move...')
    setTimeout(function(){
        sans.selectMove();
      }, 2000);
       
    }



