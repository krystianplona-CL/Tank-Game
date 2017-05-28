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
    [LAND,LAND,LAND,LAND,LAND,BLOCK,LAND,BLOCK,LAND,LAND,LAND,BRICK,EAGLE],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,LAND,BRICK,BRICK],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND],
    [LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND,BRICK,BRICK,BRICK,BRICK,BRICK,LAND],
    [LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND,LAND]
  ];

  function showMap(){
    let position = 0;
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 13; j++) {
        position = i+""+j;
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
      let div = document.getElementById(x+""+y);
      div.removeChild(div.childNodes[0]);
      landMap[x][y] = LAND;
    }
  }

  class Brick extends Block{
    constructor(x,y){
      super(x,y)
    }
    createBlock=()=>{
      var brick = document.createElement('div');
      brick.className = "brick";
      brick.style.position = "absolute";
      brick.style.width = this.width+"px";
      brick.style.height = this.height+"px";
      brick.style.left = (this.x) * this.width +"px";
      brick.style.top = (this.y) * this.height + "px";

      document.getElementById(this.x+""+this.y).appendChild(brick);
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
      document.getElementById(this.x+""+this.y).appendChild(land);
    }
  }

  class Eagle extends Block{
    constructor(x,y){
      super(x,y)
    }
    createBlock=()=>{
      let eagle = document.createElement('div');
      eagle.className = "eagle";
      eagle.style.position = "absolute";
      eagle.style.width = this.width+"px";
      eagle.style.height = this.height+"px";
      eagle.style.left = (this.x) * this.width +"px";
      eagle.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+""+this.y).appendChild(eagle);
    }
  }
  class HardBlock extends Block{
    constructor(x,y){
      super(x,y)
    }
    createBlock=()=>{
      let harblock = document.createElement('div');
      harblock.className = "block";
      harblock.style.position = "absolute";
      harblock.style.width = this.width+"px";
      harblock.style.height = this.height+"px";
      harblock.style.left = (this.x) * this.width +"px";
      harblock.style.top = (this.y) * this.height + "px";
      document.getElementById(this.x+""+this.y).appendChild(harblock);
    }
  }

  class Player extends Block{
    constructor(){
      super();
      this.x = 4;
      this.y = 12;
      this.positionX = 200;
      this.positionY = 600;
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
      var blockType = map[x][y];
      if(blockType == BRICK || blockType == BLOCK || blockType == WATER){
        return false
      }
      else{
        return true
      }
    }
    /////////////////////////
    moveUp = () => {
      var show = document.getElementById(this.x+""+(this.y-1));
      if(this.checkCollision(this.x,this.y-1) && this.y > 0){
        let up = document.getElementById("player").children[0];
        up.style.top = (this.positionY - 50)+ "px";
        this.positionY -=50;
        this.y-=1;
      }
    }
    //////////
    moveDown=() => {
      var show = document.getElementById(this.x+""+(this.y+1));
      if(this.checkCollision(this.x,this.y+1) && this.y < 12){
        let down = document.getElementById("player").children[0];
        down.style.top = (this.positionY + 50)+ "px";
        this.positionY +=50;
        this.y+=1;
      }
    }
    ////////
    moveLeft = () => {
      var show = document.getElementById((this.x-1)+""+this.y);
      if(this.checkCollision(this.x-1,this.y) && this.x > 0){
        let left = document.getElementById("player").children[0];
        left.style.left = (this.positionX - 50)+ "px";
        this.positionX -=50;
        this.x-=1;
      }
    }
    ////////
    moveRight=()=>{
      var show = document.getElementById((this.x+1)+""+this.y);
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
      }
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
          default:
            break;
        }
      }
    }
  }

  var myTank = new Player();
  myTank.createPlayer();


  loadMap();
  $(document).on("keydown", (event)=>{
    myTank.moveTank(event);
  })
})
