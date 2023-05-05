import { Component, OnInit } from '@angular/core';
import { GameLogic } from 'src/app/class/game-logic';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers:[GameLogic]
})
export class GameComponent implements OnInit {
  constructor(public game :GameLogic){}
  ngOnInit() {
   
  }
  startGame():void{
this.game.gameStart();
const currentPlayer = "current turn player : " +this.game.currentTurn;
const information = document.querySelector(".current-status");
information!.innerHTML = currentPlayer;

  }
 async clickSubField(subField :any):Promise<void>{
if(this.game.gameStatus===1){
  const position = subField.currentTarget.getAttribute('position');
  const information = document.querySelector(".current-status");
  this.game.setField(position, this.game.currentTurn);
const color = this.game.getPlayerColorClass();
subField.currentTarget.classList.add(color);

await this.game.checkGameEndWinner().then((end:boolean)=>{
  if(this.game.gameStatus === 0 && end){
    information!.innerHTML = "The Winner is Player No. " +this.game.currentTurn ;
  }
});

await this.game.checkGameEndFull().then((end:boolean)=>{
  if(this.game.gameStatus === 0 && end){
    information!.innerHTML = "No Winner,draw" ;
  }
});

  
this.game.changePlayer();
if(this.game.gameStatus ===1){
  const currentPlayer = "current turn player : " +this.game.currentTurn;
 information!.innerHTML = currentPlayer;
  }
}
}
}
