import {Status } from "./game-status";

export class GameLogic {
    gameField :Array<number> =[];
    currentTurn! :number;
    gameStatus!:Status;
    winArrayOne :Array<Array<Number>>=[
        [1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1],
        [1,0,0,1,0,0,1,0,0],
        [0,1,0,0,1,0,0,1,0],
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [0,0,1,0,1,0,1,0,0]
    ];
    winArrayTwo :Array<Array<Number>>=[
        [2,2,2,0,0,0,0,0,0],
        [0,0,0,2,2,2,0,0,0],
        [0,0,0,0,0,0,2,2,2],
        [2,0,0,2,0,0,2,0,0],
        [0,2,0,0,2,0,0,2,0],
        [0,0,2,0,0,2,0,0,2],
        [2,0,0,0,2,0,0,0,2],
        [0,0,2,0,2,0,2,0,0]
    ];

    public constructor(){
        this.gameStatus=Status.STOP;
        this.gameField =[0,0,0,0,0,0,0,0,0];

    }
gameStart(){
    this.gameField =[0,0,0,0,0,0,0,0,0];
    this.currentTurn=this.randomPlayerStart();
    
    
    this.gameStatus=Status.START;
}
randomPlayerStart():number{
const startPlayer = (Math.floor(Math.random()*2)+1);
return startPlayer;
}
setField(position:number, value:number):void{
this.gameField[position]=value;


}
getPlayerColorClass():string{
const colorClass = (this.currentTurn===2)? 'player-two' : 'player-one';
return colorClass;
}
changePlayer():void{
    this.currentTurn=(this.currentTurn===2)? 1 : 2;
}
arrayEquals(a:Array<any>,b:Array<any>):boolean{
    return Array.isArray(a) && Array.isArray(b) && a.length==b.length &&
    a.every((value,index)=>value===b[index]);
}


async checkGameEndWinner():Promise<boolean>{
    let isWinner = false;
    const checkArray =(this.currentTurn ===1)? this.winArrayOne :this.winArrayTwo;
    const currentArray:any =[];
    this.gameField.forEach((subField,index)=>{
        if(subField !==this.currentTurn){
            currentArray[index]=0;
        }
        else{
            currentArray[index]=subField;
        }
    });
    checkArray.forEach((checkField,checkIndex)=>{
        if(this.arrayEquals(checkField,currentArray)){
isWinner = true;
        }
    })
    console.log(currentArray);
    
    if(isWinner){
        
        
        this.gameEnd();
        return true;
    }
    else{
        return false;
    }
}
async checkGameEndFull():Promise<boolean>{
    let isFull = true;
    if(this.gameField.includes(0)){
        isFull = false
    }
    if(isFull){
        console.log("full");
        
        this.gameEnd();
        return true;
    }
    else{
        return false;
    }
}
gameEnd():void{
this.gameStatus=Status.STOP;
}

}
