let son1 = +prompt("son 1ni kiriting");
let son2 = +prompt("son 2ni kiriting");
let son3 = +prompt("son 3ni kiriting");

if(son1 > son2 && son1 < son3 || son1 > son3 && son1 < son2){
    alert(son1 + " o`rta son")
}else if(son2 > son1 && son2 < son3 || son2 < son1 && son2 > son3){
    alert(son2 + " o`rta son")
}else if(son3 > son1 && son3 < son2 || son3 < son1 && son3 > son2){
    alert(son3 + " o`rta son")
} 
