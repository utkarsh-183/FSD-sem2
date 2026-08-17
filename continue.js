// for(let i=0; i<5; i++){
//     if(i==2) continue;
//     else{
//         console.log(i);
//     }
// }

let x = 4 , y = 0, z;
while(x>=0){
    x--;
    y++;
    if(x==y){
        continue;
    }
    else{
        console.log(x,y);
    }
}