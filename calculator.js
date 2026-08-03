let choice = 4;
let a = 30;
let b =  0;
switch(choice){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        if(b!=0){
            console.log(a/b);
            break;
        }
        else{
            console.log('undefined');
            break;
        }
    default:
        console.log("Invalid");
}