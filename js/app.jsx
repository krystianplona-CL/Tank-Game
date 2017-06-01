$(document).ready(()=>{

  let LAND = "land";
  let BRICK = "brick";
  let BLOCK = "block";
  let WATER = "water";
  let GREEN = "green";
  let EAGLE = "eagle";

  let game = document.querySelector(".game");

  var map = [
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,LAND,BRICK,BRICK],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,BRICK,EAGLE],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,LAND,BRICK,BRICK],
    [LAND,LAND,LAND,LAND,LAND,GREEN,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND]
  ];


  function showMap(){
    let position = 0;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        position = i+","+j;
        let div = document.createElement("div");
        div.id = position;
        game.appendChild(div);
      }
    }
  }
  showMap();

  class Block{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.id = 0;
    }
    createBlock=()=>{

    }
    delBlock=()=>{
      let div = document.getElementById(x+","+y);
      div.removeChild(div.childNodes[0]);
      landMap[x][y] = LAND;
    }
  }

  class Brick extends Block{
    constructor(x,y){
      super(x,y);
      this.hp = 1;
    }
    createBlock=()=>{
      var brick = document.createElement('div');
      brick.className = "brick";
      brick.style.position = "absolute";
      brick.style.width = this.width+"px";
      brick.style.height = this.height+"px";
      brick.style.left = (this.x) * this.width +"px";
      brick.style.top = (this.y) * this.height + "px";
      brick.dataset.hp = this.hp;

      document.getElementById(this.x+","+this.y).appendChild(brick);
    }
  }

  class Land extends Block{
    constructor(x,y){
      super(x,y)
    }
    createBlock=()=>{
      let land = document.createElement('div');
      land.className = "land";
      land.style.position = "absolute";
      land.style.width = this.width+"px";
      land.style.height = this.height+"px";
      land.style.left = (this.x) * this.width +"px";
      land.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+","+this.y).appendChild(land);
    }
  }

  class Eagle extends Block{
    constructor(x,y){
      super(x,y);
      this.hp = 1;
    }
    createBlock=()=>{
      let eagle = document.createElement('div');
      eagle.className = "eagle";
      eagle.style.position = "absolute";
      eagle.style.width = this.width+"px";
      eagle.style.height = this.height+"px";
      eagle.style.left = (this.x) * this.width +"px";
      eagle.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+","+this.y).appendChild(eagle);
    }
  }

  class HardBlock extends Block{
    constructor(x,y){
      super(x,y);
      this.hp = 100;
    }
    createBlock=()=>{
      let harblock = document.createElement('div');
      harblock.className = "block";
      harblock.style.position = "absolute";
      harblock.style.width = this.width+"px";
      harblock.style.height = this.height+"px";
      harblock.style.left = (this.x) * this.width +"px";
      harblock.style.top = (this.y) * this.height + "px";
      harblock.dataset.hp = this.hp;
      document.getElementById(this.x+","+this.y).appendChild(harblock);
    }
  }

  class Water extends Block{
    constructor(x,y){
      super(x,y);
    }
    createBlock=()=>{
      let water = document.createElement('div');
      water.className = "water";
      water.style.position = "absolute";
      water.style.width = this.width+"px";
      water.style.height = this.height+"px";
      water.style.left = (this.x) * this.width +"px";
      water.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+","+this.y).appendChild(water);
    }
  }

  class Green extends Block{
    constructor(x,y){
      super(x,y);
    }
    createBlock=()=>{
      let grass = document.createElement('div');
      grass.className = "green";
      grass.style.position = "absolute";
      grass.style.width = this.width+"px";
      grass.style.height = this.height+"px";
      grass.style.left = (this.x) * this.width +"px";
      grass.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+","+this.y).appendChild(grass);
    }
  }

  class Bullet extends Block{
    constructor(x,y){
      super(x,y);
    }
    createBullet=()=>{
      let bullet = document.createElement('div');
      bullet.className = "boom";
      bullet.style.position = "absolute";
      bullet.style.width = this.width+"px";
      bullet.style.height = this.height+"px";
      bullet.style.left = (this.x) * this.width +"px";
      bullet.style.top = (this.y) * this.height + "px";
      document.getElementById("bullet").appendChild(bullet);
    }

  }

  class Player extends Block{
    constructor(){
      super();
      this.x = 4;
      this.y = 12;
      this.positionX = 200;
      this.positionY = 600;
      this.direction = "up";
      this.dmg = 1;
      this.fireBool = true;
      this.respawn = 0;
      this.points = 0;
    }
    createPlayer=()=>{
      let player = document.createElement('div');
      player.className = "myTank";
      player.style.position = "absolute";
      player.style.width = this.width+"px";
      player.style.height = this.height+"px";
      player.style.left = 200+"px";
      player.style.top = 600+"px";
      player.style.zIndex = 1;
      document.getElementById("player").appendChild(player);
    }
    checkCollision = (x,y) =>{
      var blockType = document.getElementById(x+","+y).children[0].className;
      if(blockType == "brick" || blockType == "block" || blockType == "eagle" || blockType == "water"){
        return false
      }
      else{
        return true
      }
    }
    fireCheckCollision = (x,y) =>{
      var blockType = document.getElementById(x+","+y).children[0].className;
      var data = Number(document.getElementById(x+","+y).children[0].dataset.hp);
      if(blockType == "brick" || blockType == "eagle" || blockType == "block"){
        if(blockType == "eagle"){
          this.gameOver();
        }
        return true;
      }
      else{
        return false
      }
    }
    /////////////////////////
    gameOver = () =>{
      var over = document.createElement("div");
      over.className = "gameOver";
      over.innerText = "GAME OVER"
      game.innerHTML = "";
      game.appendChild(over);
    }
    /////////////////////////
    moveUp = () => {
      this.direction = "up";
      var show = document.getElementById(this.x+","+(this.y-1));
      let up = document.getElementById("player").children[0];
      up.style.transform  = 'rotate('+0+'deg)';
      if(this.checkCollision(this.x,this.y-1) && this.y > 0){
        let up = document.getElementById("player").children[0];
        up.style.top = (this.positionY - 50)+ "px";
        this.positionY -=50;
        this.y-=1;
      }
    }
    //////////
    moveDown=() => {
      this.direction = "down";
      let up = document.getElementById("player").children[0];
      up.style.transform  = 'rotate('+180+'deg)';
      var show = document.getElementById(this.x+","+(this.y+1));
      if(this.checkCollision(this.x,this.y+1) && this.y < 12){
        let down = document.getElementById("player").children[0];
        down.style.top = (this.positionY + 50)+ "px";
        this.positionY +=50;
        this.y+=1;
      }
    }
    ////////
    moveLeft = () => {
      this.direction = "left";
      var show = document.getElementById((this.x-1)+","+this.y);
      let up = document.getElementById("player").children[0];
      up.style.transform  = 'rotate('+270+'deg)';
      if(this.checkCollision(this.x-1,this.y) && this.x > 0){
        let left = document.getElementById("player").children[0];
        left.style.left = (this.positionX - 50)+ "px";
        this.positionX -=50;
        this.x-=1;
      }
    }
    ////////
    moveRight=()=>{
      this.direction = "right";
      var show = document.getElementById((this.x+1)+","+this.y);
      let up = document.getElementById("player").children[0];
      up.style.transform  = 'rotate('+90+'deg)';
      if(this.checkCollision(this.x+1,this.y) && this.x < 12){
        let right = document.getElementById("player").children[0];
        right.style.left = (this.positionX + 50)+ "px";
        this.positionX +=50;
        this.x+=1;
      }
    }
    ///////
    moveTank = (event) => {
      switch(event.which){
        case 37:
          this.moveLeft();
          break;
        case 38:
          this.moveUp();
          break;
        case 39:
          this.moveRight();
          break;
        case 40:
          this.moveDown();
          break;
        case 65:
          this.fireTank();
          break;
      }
    }
    ///////
    fireTank=()=>{
      if(this.direction == "up"){
        let dir = String((this.x)+","+(this.y-1));
        var fire = document.getElementById(dir);
        if(this.fireCheckCollision((this.x),this.y-1)){
          var checkdmg = fire.children[0].className;
          if(checkdmg == "block"){
            bullet.children[0].innerHTML = "";
            this.fireBool = true;
            clearInterval(this.interval);
          }
          else{
            fire.children[0].className = "land";
          }
        }
        else {
          if(this.fireBool){
            this.fireBool = false;
            let bul = new Bullet((this.x),this.y-1);
            bul.createBullet();
            let bullet = document.getElementById("bullet").children[0];
            this.interval = setInterval(()=>{
              var destroy = ($(".boom").collision(".enemy"));
              var parent = destroy.parent();
              if (parent[0] !== undefined) {
                if(parent[0].id == "enemy0"){
                  document.getElementById("enemy0").innerHTML = "";
                  bullet.parentNode.innerHTML = "";
                  this.points = this.points+1;
                  this.nextRound();
                }
                else if (parent[0].id == "enemy1"){
                  document.getElementById("enemy1").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
                else if (parent[0].id == "enemy2"){
                  document.getElementById("enemy2").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
              }
              bullet.style.left = (bul.x) * 50 +"px";
              bullet.style.top = (bul.y-1) * 50 + "px";
              bul.y = bul.y - 1;
              if(bul.y >=0){
                let div = document.getElementById(bul.x+","+bul.y)
                if(this.fireCheckCollision(bul.x, bul.y)){
                  var checkdmg = document.getElementById(bul.x+","+bul.y).children[0].className;
                  if(checkdmg == "block"){
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                  else{
                    document.getElementById(bul.x+","+bul.y).children[0].className = "land";
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                }
              }
              else{
                clearInterval(this.interval);
                this.fireBool = true;
              }
            },250)
          }
        }
      }
      else if(this.direction == "down"){
        let dir = String((this.x)+","+(this.y+1));
        var fire = document.getElementById(dir);
        if(this.fireCheckCollision((this.x),this.y+1)){
          var checkdmg = fire.children[0].className;
          if(checkdmg == "block"){
            bullet.children[0].innerHTML = "";
            this.fireBool = true;
            clearInterval(this.interval);
          }
          else{
            fire.children[0].className = "land";
          }
        }
        else {
          if(this.fireBool){
            this.fireBool = false;
            let bul = new Bullet((this.x),this.y+1);
            bul.createBullet();
            let bullet = document.getElementById("bullet").children[0];
            this.interval = setInterval(()=>{
              var destroy = ($(".boom").collision(".enemy"));
              var parent = destroy.parent();
              if (parent[0] !== undefined) {
                if(parent[0].id == "enemy0"){
                  document.getElementById("enemy0").innerHTML = "";
                  bullet.parentNode.innerHTML = "";
                  this.points = this.points+1;
                  this.nextRound();
                }
                else if (parent[0].id == "enemy1"){
                  document.getElementById("enemy1").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
                else if (parent[0].id == "enemy2"){
                  document.getElementById("enemy2").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
              }
              bullet.style.left = (bul.x) * 50 +"px";
              bullet.style.top = (bul.y+1) * 50 + "px";
              bullet.style.transform = 'rotate('+180+'deg)';
              bul.y = bul.y + 1;
              if(bul.y < 12){
                if(this.fireCheckCollision(bul.x, bul.y)){
                  var checkdmg = document.getElementById(bul.x+","+bul.y).children[0].className;
                  if(checkdmg == "block"){
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                  else{
                    document.getElementById(bul.x+","+bul.y).children[0].className = "land";
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                }
              }
              else if(bul.y = 12){
                if(document.getElementById(bul.x+","+bul.y).children[0].className == "eagle"){
                  this.gameOver();
                  clearInterval(this.interval);
                }
                document.getElementById(bul.x+","+bul.y).children[0].className = "land";
                bullet.parentNode.innerHTML = "";
                this.fireBool = true;
                clearInterval(this.interval)
              }
              else{
                clearInterval(this.interval);
                this.fireBool = true;
              }
            },250)
          }
        }
      }
      else if(this.direction == "left"){
        let dir = String((this.x-1)+","+(this.y));
        var fire = document.getElementById(dir);
        if(this.fireCheckCollision((this.x-1),this.y)){
          var checkdmg = fire.children[0].className;
          if(checkdmg == "block"){
            bullet.children[0].innerHTML = "";
            this.fireBool = true;
            clearInterval(this.interval);
          }
          else{
            fire.children[0].className = "land";
          }
        }
        else {
          if(this.fireBool){
            this.fireBool = false;
            let bul = new Bullet((this.x-1),this.y);
            bul.createBullet();
            let bullet = document.getElementById("bullet").children[0];
            bullet.style.transform = 'rotate('+270+'deg)';
            this.interval = setInterval(()=>{
              var destroy = ($(".boom").collision(".enemy"));
              var parent = destroy.parent();
              if (parent[0] !== undefined) {
                if(parent[0].id == "enemy0"){
                  document.getElementById("enemy0").innerHTML = "";
                  bullet.parentNode.innerHTML = "";
                  this.points = this.points+1;
                  this.nextRound();
                }
                else if (parent[0].id == "enemy1"){
                  document.getElementById("enemy1").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
                else if (parent[0].id == "enemy2"){
                  document.getElementById("enemy2").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
              }
              bullet.style.left = (bul.x-1) * 50 +"px";
              bullet.style.top = (bul.y) * 50 + "px";
              bul.x = bul.x - 1;
              if(bul.x >= 0){
                if(this.fireCheckCollision(bul.x, bul.y)){
                  var checkdmg = document.getElementById(bul.x+","+bul.y).children[0].className;
                  if(checkdmg == "block"){
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                  else{
                    document.getElementById(bul.x+","+bul.y).children[0].className = "land";
                    bullet.parentNode.innerHTML = "";
                    this.fireBool = true;
                    clearInterval(this.interval);
                  }
                }
              }

              else{
                clearInterval(this.interval);
                this.fireBool = true;
              }
            },250)
          }
        }
      }
      else if(this.direction == "right"){
        let dir = String((this.x+1)+","+(this.y));
        var fire = document.getElementById(dir);
        if(this.fireCheckCollision((this.x+1),this.y)){
          var checkdmg = fire.children[0].className;
          if(checkdmg == "block"){
            bullet.children[0].innerHTML = "";
            this.fireBool = true;
            clearInterval(this.interval);
          }
          else{
            fire.children[0].className = "land";
          }
        }
        else {
          if(this.fireBool){
            this.fireBool = false;
            let bul = new Bullet((this.x+1),this.y);
            bul.createBullet();
            let bullet = document.getElementById("bullet").children[0];
            bullet.style.transform = 'rotate('+90+'deg)';
            this.interval = setInterval(()=>{
              var destroy = ($(".boom").collision(".enemy"));
              var parent = destroy.parent();
              if (parent[0] !== undefined) {
                if(parent[0].id == "enemy0"){
                  document.getElementById("enemy0").innerHTML = "";
                  bullet.parentNode.innerHTML = "";
                  this.points = this.points+1;
                  this.nextRound();
                }
                else if (parent[0].id == "enemy1"){
                  document.getElementById("enemy1").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
                else if (parent[0].id == "enemy2"){
                  document.getElementById("enemy2").innerHTML = "";
                  this.points = this.points+1;
                  bullet.parentNode.innerHTML = "";
                  this.nextRound();
                }
              }
              else{
                bullet.style.left = (bul.x+1) * 50 +"px";
                bullet.style.top = (bul.y) * 50 + "px";
                bul.x = bul.x + 1;
                if(bul.x < 12){
                  if(this.fireCheckCollision(bul.x, bul.y)){
                    var checkdmg = document.getElementById(bul.x+","+bul.y).children[0].className;
                    if(checkdmg == "block"){
                      bullet.parentNode.innerHTML = "";
                      this.fireBool = true;
                      clearInterval(this.interval);
                    }
                    else{
                      document.getElementById(bul.x+","+bul.y).children[0].className = "land";
                      bullet.parentNode.innerHTML = "";
                      this.fireBool = true;
                      clearInterval(this.interval);
                    }
                  }
                }
                else{
                  clearInterval(this.interval);
                  this.fireBool = true;
                }
              }

            },250)
          }
        }
      }
    }
    win = () =>{
      for (var i = 1; i < 99999; i++){
        window.clearInterval(i);
      }
      // var win = document.querySelector("#game")
      // win.innerHTML = "";
      // win.className="win"
      // var youwin = document.createElement("iframe");
      // youwin.style.width = "100vw";
      // youwin.style.height = "100vh";
      // youwin.src = "http://disco.fleo.se/YouWin";
      // win.appendChild(youwin);
      var win = document.querySelector("#game")
      win.innerHTML = "";
      win.innerText = "YOU WIN"
    }
    nextRound=() =>{
      this.fireBool = true;
      let points = this.points % 3;
      if(points == 0){
        for (var i = 1; i < 99999; i++){
          window.clearInterval(i);
        }
        this.respawn = this.respawn+1;
        var enemy0 = new Enemy(0,this.respawn,0);
        enemy0.createEnemy();
        var enemy1 = new Enemy(6,this.respawn,1);
        enemy1.createEnemy();
        var enemy2 = new Enemy(12,this.respawn,2);
        enemy2.createEnemy();
        if(this.respawn == 1){
          this.win();
        }
        enemy0.moveTank();
        enemy1.moveTank();
        enemy2.moveTank();
      }
    }
  }

  class Enemy extends Block {
    constructor(x,y,z){
      super();
      this.x = x;
      this.y = y;
      this.z = z;
      this.direction = 1;
    }
    createEnemy=()=>{
      let enemy = document.createElement('div');
      enemy.className = "enemy";
      enemy.style.position = "absolute";
      enemy.style.width = this.width+"px";
      enemy.style.height = this.height+"px";
      enemy.style.left = this.x * 50+"px";
      enemy.style.top = this.y * 50+"px";
      enemy.style.zIndex = 1;
      var name = "enemy"+this.z;
      document.getElementById(name).appendChild(enemy);
    }
    checkCollision = (x,y) =>{
      var blockType = document.getElementById(x+","+y).children[0].className;
      if(blockType == "brick" || blockType == "block" || blockType == "eagle" || blockType == "water"){
        return false
      }
      else{
        return true
      }
    }
    fireCheckCollision = (x,y) =>{
      var blockType = document.getElementById(x+","+y).children[0].className;
      var data = Number(document.getElementById(x+","+y).children[0].dataset.hp);
      if(blockType == "brick" || blockType == "eagle" || blockType == "block"){
        if(blockType == "eagle"){
          this.gameOver();
        }
        return true;
      }
      else{
        return false
      }
    }
    gameOver = () =>{
      var over = document.createElement("div");
      over.className = "gameOver";
      over.innerText = "GAME OVER"
      game.innerHTML = "";
      game.appendChild(over);
    }
    moveDown=() => {
      let down = document.getElementById("enemy"+this.z).children[0];
      down.style.transform  = 'rotate('+180+'deg)';
      var show = document.getElementById(this.x+","+(this.y+1));
      if(this.checkCollision(this.x,this.y+1) && this.y < 12){
        down.style.top = (this.y*50 + 50)+ "px";
        this.y+=1;
      }
      if (show.children[0].className == "brick"){
        show.children[0].className = "land";
      }
      if (show.children[0].className == "eagle"){
        this.gameOver();
      }
      var destroy = ($(".enemy").collision(".myTank"));
      if(destroy[0].className == "myTank"){
        this.gameOver();
      }
    }
    moveUp = () => {
      var show = document.getElementById(this.x+","+(this.y-1));
      let up = document.getElementById("enemy"+this.z).children[0];
      up.style.transform  = 'rotate('+0+'deg)';
      if(this.checkCollision(this.x,this.y-1) && this.y > 0){
        up.style.top = (this.y*50 - 50)+ "px";
        this.y-=1;
      }
      if (show.children[0].className == "brick"){
        show.children[0].className = "land";
      }
      if (show.children[0].className == "eagle"){
        this.gameOver();
      }
      var destroy = ($(".enemy").collision(".myTank"));
      if(destroy[0].className == "myTank"){
        this.gameOver();
      }
    }
    moveLeft = () => {
      var show = document.getElementById((this.x-1)+","+this.y);
      let left = document.getElementById("enemy"+this.z).children[0];
      left.style.transform  = 'rotate('+270+'deg)';
      if(this.checkCollision(this.x-1,this.y) && this.x > 0){
        left.style.left = (this.x*50 - 50)+ "px";
        this.x-=1;
        show.className.children[0] = "land";
      }
      if (show.children[0].className == "brick"){
        show.children[0].className = "land";
      }
      if (show.children[0].className == "eagle"){
        this.gameOver();
      }
      var destroy = ($(".enemy").collision(".myTank"));
      if(destroy[0].className == "myTank"){
        this.gameOver();
      }
    }
    moveRight = () => {
      var show = document.getElementById((this.x+1)+","+this.y);
      let right = document.getElementById("enemy"+this.z).children[0];
      right.style.transform  = 'rotate('+90+'deg)';
      if(this.checkCollision(this.x+1,this.y) && this.x < 12){
        right.style.left = (this.x*50 + 50)+ "px";
        this.x+=1;
        show.className.children[0] = "land";
      }
      if (show.children[0].className == "brick"){
        show.children[0].className = "land";
      }
      if (show.children[0].className == "eagle"){
        this.gameOver();
      }
      var destroy = ($(".enemy").collision(".myTank"));
      if(destroy[0].className == "myTank"){
        this.gameOver();
      }
    }
    moveTank=()=>{
      this.enemyInterval = setInterval(()=>{
        var rand = Math.round(Math.random() * 5) + 1;
        if (rand == 1 || rand == 5){
          this.moveDown();
        }
        else if (rand == 2){
          this.moveUp();
        }
        else if(rand == 3){
          this.moveLeft();
        }
        else if(rand == 4){
          this.moveRight();
        }
        else{
          return false;
        }
      },1000)
    }
  }
  function loadMap(){
    var block;
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 13; j++) {
        var blocktype = map[i][j];
        switch (blocktype){
          case LAND:
            block = new Land(i,j);
            block.createBlock();
            break;
          case BRICK:
            block = new Brick(i,j);
            block.createBlock();
            break;
          case EAGLE:
            block = new Eagle(i,j);
            block.createBlock();
            break;
          case BLOCK:
            block = new HardBlock(i,j);
            block.createBlock();
            break;
          case WATER:
            block = new Water(i,j);
            block.createBlock();
            break;
          case GREEN:
            block = new Green(i,j);
            block.createBlock();
            break;
          default:
            break;
        }
      }
    }
  }

  loadMap();

  var myTank = new Player();
  myTank.createPlayer();


  var enemy0 = new Enemy(0,0,0);
  enemy0.createEnemy();
  var enemy1 = new Enemy(6,0,1);
  enemy1.createEnemy();
  var enemy2 = new Enemy(12,0,2);
  enemy2.createEnemy();

  $(document).on("keydown", (event)=>{
    myTank.moveTank(event);
  })

  enemy0.moveTank();
  enemy1.moveTank();
  enemy2.moveTank();

})
