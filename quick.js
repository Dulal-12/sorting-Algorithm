const quick = (array , start , end)=>{
    
    if(start >= end){
        return ;
    }

    let index =  partion(array , start ,end);
    quick(array , 0 , index-1);
    quick(array , index+1 , end);
}


const partion = (array , start ,end) =>{

    let pivoteValue = array[end];
    let pivoteIndex = start ;

    for(let i = start ; i < end ; i++){

        if(array[i] < pivoteValue){

            [array[i] , array[pivoteIndex]] = [array[pivoteIndex] , array[i]];
            pivoteIndex++;
        }
    }

    [array[pivoteIndex] , array[end]] = [array[end] , array[pivoteIndex]];
    return pivoteIndex;
}

const array = [4,3,2,21];
quick(array , 0 , array.length -1);
console.log(array);