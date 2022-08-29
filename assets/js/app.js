


let probe = 10;
 
    let n = Math.random();
    n = Math.floor(n * 100);
    n = n + 1;
    


console.log(n)



function play(){
    if(probe == 0){
        return;
    }

    let num = +numOption.value;
     if(num > n){
    
        balBet.innerHTML = 'Больше моего';
        probe--;
        tabl.innerHTML = probe;
     }
        if(num < n){
            balBet.innerHTML = 'Меньше моего';
            probe--;
            tabl.innerHTML = probe;
        }
        if(probe == 0){
            
            
            tabl.innerHTML = probe;
            balBet.innerHTML = (`Вы проиграли , моё число (${n})`);
            
            return;
            
        }
        

        
         if(num == n){
            
            tabl.innerHTML = probe;
        balBet.innerHTML = 'Вы выйграли';

        
        
        
        
    }
    
    
    
}

    
