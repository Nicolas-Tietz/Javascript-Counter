window.onload = function(){

    const counter = document.querySelector('.counter');
    console.log(counter)

    function newDomElement(tag,classes,content){
        let elem = document.createElement(tag);
        classes.forEach(c => elem.classList.add(c));
        elem.innerHTML=content;
        return elem;
        
    }

    let count = 0;

    addonButtons = document.querySelector('.other-buttons')

    //-100 -10 +10 +100 Buttons
    const minusHundredButton = newDomElement('button',['operatorBtn'],'-100');
    addonButtons.append(minusHundredButton);

    const minusTenButton = newDomElement('button',['operatorBtn'],'-10');
    addonButtons.append(minusTenButton);

    const plusTenButton = newDomElement('button',['operatorBtn'],'+10');
    addonButtons.append(plusTenButton);

    const plusHundredButton = newDomElement('button',['operatorBtn'],'+100');
    addonButtons.append(plusHundredButton);

    const minusButton = newDomElement('button',['operatorBtn'],'-');
    counter.append(minusButton);
    
    
    minusHundredButton.addEventListener('click',()=>{
        count-=100;
        updateCount();
    })
    minusTenButton.addEventListener('click',()=>{
        count-=10;
        updateCount();
    })
    plusTenButton.addEventListener('click',()=>{
        count+=10;
        updateCount();
    })
    plusHundredButton.addEventListener('click',()=>{
        count+=100;
        updateCount();
    })



    const countTextElement = newDomElement('div',['number'],'0');
    
    counter.append(countTextElement);

    const plusButton = newDomElement('button',['operatorBtn'],'+');
    counter.append(plusButton);

    

    const resetButton = newDomElement('button',['resetBtn'],'Reset');
    addonButtons.insertAdjacentElement('afterend',resetButton);

    

    /*minusButton.addEventListener('click', ()=>{
        if (count == 0){
            return;
        }
        count = count-1;
        countTextElement.innerHTML=count;

    })*/

     /*plusButton.addEventListener('click', ()=>{
        count = count+1;
        countTextElement.innerHTML=count;

    }) */
    let holdLoop;
    let HoldSpeed = 100;
    
    function clearTwo(timeoutOne,timeoutTwo){
        clearTimeout(timeoutOne);
        clearTimeout(timeoutTwo);
    }

    
    function minusHold(){
        
        

        count--;
        updateCount(count);
        HoldSpeed-=1;
        holdLoop = setTimeout(minusHold,HoldSpeed);
        
    }
    

    function startTimer(operator){
        switch(operator){

            case '+':
                timerStart = setTimeout(plusHold,600);
                break;
            case '-':
                timerStart = setTimeout(minusHold,600);
                break;

            default:
                break;
        }
    }


    function plusHold(){
        
        

        count++;
        updateCount(count);
        HoldSpeed-=1;
        holdLoop = setTimeout(plusHold,HoldSpeed);
        
    }

    function updateCount(){
        countFormatted = count.toLocaleString();

        countTextElement.innerHTML = countFormatted;


    }


    //Plus Button Events
    plusButton.addEventListener('pointerdown',()=>{
        startTimer('+');
    })

    plusButton.addEventListener('pointerup',()=>{
        clearTwo(timerStart,holdLoop);
        HoldSpeed=100;
        count++;
        updateCount(count);
    })

    plusButton.addEventListener('pointerout',()=>{
        clearTwo(timerStart,holdLoop);
        HoldSpeed = 100;
    })

    //Minus Button Events

    minusButton.addEventListener('pointerdown',()=>{
        startTimer('-')
    })


    minusButton.addEventListener('pointerup',()=>{
        clearTwo(timerStart,holdLoop);
        HoldSpeed = 100;
        count--;
        updateCount(count);
    })

    minusButton.addEventListener('pointerout',()=>{
        clearTwo(timerStart,holdLoop)
        HoldSpeed = 100;

        
    })

    //Reset Button Event

    resetButton.addEventListener('click', ()=>{
        count = 0
        countTextElement.innerHTML=count;

    })
    

    

   

   



}