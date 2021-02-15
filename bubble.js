const bubble = (array) =>{

    const len = array.length ;
    
    //this two loop working well
    for(let i = 0 ; i < len ;i++){
        for(let j  = 0 ; j < len - 1 - i; j++){
            if(array[j+1] < array[j]){
                [array[j] , array[j+1]] = [array[j+1] , array[j] ];
            }
        }
    }

    console.log(array);
}


bubble([2,1,4,1,3,3,2,1,])