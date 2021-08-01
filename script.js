
let input = document.querySelector('input');
let playBtn = document.querySelector('.play');
let pass = document.querySelector('.pass');
let raiseBtn = document.querySelector('.raise');
let call=document.querySelector('.call');
let nn=document.querySelector('.nn');

let help = document.querySelector('.help');
let text=document.querySelector('.text')
let randomCardRobot;
let randomCardHuman;

let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let cash = document.querySelector('.cash');
let moneyHumen=document.querySelector('.moneyHuman');
let moneyRobot = document.querySelector('.moneyRobot');
let valSpan=document.querySelector('.valSpan');
let cashRobot=10000;
let cashHuman=10000;   
let cashBoard=0;
let NumberGame=0;
let raiseRobot=0;
let dataNN=[
    
]
//вывод суммы ставки
input.oninput = onc
function onc(){
valSpan.textContent=input.value
}
input.disabled = true;
document.querySelectorAll('button').forEach((e,i)=>{
    if(i>0){
        e.disabled=true
    }
})
// function random card
function randomCard(){
    randomCardRobot=Math.floor(Math.random()*11);
    randomCardHuman=Math.floor(Math.random()*11);
    num2.textContent=randomCardHuman;
    startRobotFirst(randomCardRobot);
    return randomCardHuman,randomCardRobot;
}
call.addEventListener('click',()=>{
    cashHuman=cashHuman-cashBoard
    cashBoard+=cashBoard;
    cash.textContent=cashBoard;
    moneyHumen.textContent=cashHuman;
    callHuman(randomCardRobot,randomCardHuman);
    game();
});
raiseBtn.addEventListener('click',()=>{
    raiseHuman(randomCardRobot,randomCardHuman);
    game()
})
playBtn.addEventListener('click',()=>{
   play()
})
pass.addEventListener('click',()=>{
    cashRobot+= cashBoard;
    moneyRobot.textContent=cashRobot
    cashBoard=0;
    cash.textContent = cashBoard;
    play()
})
function play(){
    NumberGame++;
    document.querySelector('.span').textContent=NumberGame;
    document.querySelector('.robot').classList.remove('open')
    num1.textContent='';
    randomCard();
    document.querySelectorAll('button').forEach((e,i)=>{
        if(i>0){
            e.disabled=false;
        }
    })
    input.disabled = false;
    playBtn.disabled=true;
}
//first robot step
function startRobotFirst(card){
    switch (card){
        case 0:
           text.textContent='я сдаюсь';
            play();
            break;
        case 1:
            let a =[50,50,50,50,50,50,100,100,200,200,300,300,50,50,50,500,50,50,50];
            let a1 = a[Math.floor(Math.random()*a.length)];
            cashRobot-=a1;
            cashBoard+=a1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${a1}`
            raiseRobot=a1;
            break;   
        case 2 :
            let b =[50,50,50,50,50,50,100,100,200,200,300,300,50,50,50,500,50,50,50];
            let b1 = b[Math.floor(Math.random()*b.length)];
             cashRobot-=b1;
            cashBoard+=b1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${b1}`;
            raiseRobot=b1;
                break; 
        case 3:
            let s =[50,100,50,50,50,50,100,100,200,200,300,300,50,50,50,500,50,50,50];
            let s1 = s[Math.floor(Math.random()*s.length)];
            cashRobot-=s1;
            cashBoard+=s1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${s1}`
            raiseRobot=s1;
            break; 
        case 4:
            let d =[50,500,50,50,50,50,100,100,200,200,300,300,50,50,50,500,50,50,50];
            let d1 = d[Math.floor(Math.random()*d.length)];
            cashRobot-=d1;
            cashBoard+=d1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${d1}`;
            raiseRobot=d1;
            break; 
        case 5:
            let f =[100,100,100,100,100,100,50,100,200,200,300,300,50,100,100,500,100,200,200];
            let f1 = f[Math.floor(Math.random()*f.length)];
            cashRobot-=f1;
            cashBoard+=f1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${f1}`;
            raiseRobot=f1;
            break; 
        case 6:
            let q =[100,100,100,100,100,100,50,100,200,200,300,300,50,100,100,500,100,200,200];
            let q1 = q[Math.floor(Math.random()*q.length)];
            cashRobot-=q1;
            cashBoard+=q1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${q1}`
            raiseRobot=q1
        break; 
        case 7:
            let w =[100,100,100,100,100,100,50,100,200,200,300,300,50,100,100,500,100,200,200];
            let w1 = w[Math.floor(Math.random()*w.length)];
            cashRobot-=w1;
            cashBoard+=w1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${w1}`;
            raiseRobot=w1
            break; 
        case 8:
            let t =[200,200,200,200,200,200,300,100,200,200,300,300,200,200,50,500,100,100,50];
            let t1 = t[Math.floor(Math.random()*t.length)];
            cashRobot-=t1;
            cashBoard+=t1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${t1}`
            raiseRobot=t1
            break; 
        case 9:
            let y =[300,300,300,300,300,300,300,300,300,300,500,100,200,200,300,500,100,100,50];
            let y1 = y[Math.floor(Math.random()*y.length)];
            cashRobot-=y1;
            cashBoard+=y1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${y1}`
            raiseRobot=y1
            break; 
        case 10:
            let m =[500,500,500,500,500,500,500,300,300,300,300,300,500,500,500,500,500,500,50];
            let m1 = m[Math.floor(Math.random()*m.length)];
            cashRobot-=m1;
            cashBoard+=m1;
            moneyRobot.textContent=cashRobot;
            cash.textContent=cashBoard;
            text.textContent=`raise ${m1}`
            raiseRobot=m1;
            break; 
    }
    input.setAttribute('max',cashHuman);
    input.setAttribute('min',cashBoard+50);
    valSpan.textContent=input.value
}
//call function

function callHuman(robot,humen){
   
    
    input.disabled = true;
    document.querySelectorAll('button').forEach((e,i)=>{
    if(i>0){
        e.disabled=true
    }
})
    playBtn.disabled=false;
    if(robot>humen){
        cashRobot+=cashBoard;
        moneyRobot.textContent=cashRobot;
        cashBoard=0
        cash.textContent=cashBoard;
        let arrData={myCard:randomCardHuman,cashBoard:raiseRobot,rezult:'lose'};
        dataNN.push(arrData);
        
    } else if(robot<humen){
        cashHuman+=cashBoard;
        moneyHumen.textContent=cashHuman;
        cashBoard=0
        cash.textContent=cashBoard;
        let arrData={myCard:randomCardHuman,cashBoard:raiseRobot,rezult:'win'};
        dataNN.push(arrData);
    } else if(robot == humen){
        cashRobot+=cashBoard/2;
        moneyRobot.textContent=cashRobot;
        cashHuman+=cashBoard/2;
        moneyHumen.textContent=cashHuman;
        cashBoard=0
        cash.textContent=cashBoard;
    }
    document.querySelector('.robot').classList.add('open')
    num1.textContent=randomCardRobot;
}
//raise function 
function raiseHuman(robot,human){
    stepSecondRobot(robot,human,input.value)
    cashHuman-=+input.value;
    moneyHumen.textContent=cashHuman;
    cashBoard+=+input.value;
    cash.textContent=cashBoard;
    input.disabled = true;
    document.querySelectorAll('button').forEach((e,i)=>{
    if(i>0){
        e.disabled=true
    }
    callHuman(randomCardRobot,randomCardHuman)
    
})
}
//function step second
function stepSecondRobot(robot,human,response){
    if( ((robot>0) && (robot<=3) && (+response<101)) || ((robot>3) && (robot<=5) && (+response<201))
    || ((robot>5) && (robot<=8) && (+response<301)) || ((robot>8) && (robot<=10))){
        text.textContent='call';
        let a =  +response - cashBoard
        cashRobot-=a;
        moneyRobot.textContent=cashRobot;
        cashBoard+=a; 
    }
}
function game(){
    if(cashRobot<0){
    cashRobot=0;
    moneyRobot.textContent=cashRobot;
    cashBoard=0;
    cash.textContent=cashBoard;
    cashHuman=2000;
    moneyHumen.textContent=cashHuman
    alert('Winnn')
}
else if(cashHuman<0){
    cashHuman=0
    moneyHumen.textContent=cashHuman;
    cashBoard=0;
    cash.textContent=cashBoard;
    cashRobot=2000;
    moneyRobot.textContent=cashRobot
    alert('lose')
}
}


//function pass
nn.addEventListener('click',()=>{
    console.log(dataNN)
    if((NumberGame>10)&&(dataNN.length>10)){
         const nn = ml5.neuralNetwork({
        task: 'classification',
        debug: true});
        dataNN.forEach(item => {
            const inputs = {
              myCard: item.myCard, 
              cashBoard: item.cashBoard, 
            };
            const output = {
              rezult: item.rezult
            };
        nn.addData(inputs, output);
        })
        nn.normalizeData();
        const trainingOptions = {
            epochs: 10,
            batchSize: 5
          }

          nn.train(trainingOptions, finishedTraining);

          function finishedTraining(){
            classify();
          }
          function classify(){
            const input = {
              myCard: randomCardHuman, 
              cashBoard: cashBoard, 
            }
            nn.classify(input, handleResults);
          }
          function handleResults(error, result) {
            if(error){
              console.error(error);
              return;
            }
            help.textContent=result[0].label + ' ' + Math.floor((result[0].confidence*100)) +'%'
        }
    }
   else{

        help.textContent='вы сыграли слишком мало раздач,для коректной работы робота.'
    
   }

})
