const quick = (array , start , end)=>{
    
    if(start >= end){
           return ;
    }

    //Here partion function call
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

    //SWAP
    [array[pivoteIndex] , array[end]] = [array[end] , array[pivoteIndex]];
    return pivoteIndex;
}



//Here Input section
let str = 'AIUB';

//If all the letter upperCase than that is Valid
if( str === str.toUpperCase()){

    str = str.split('');
    //Here find ascii value for per char
    let  array = str.map(char => char.charCodeAt(0));
    //than call the function quick
    quick(array , 0 , array.length -1);
    //got new array ascending order than reverse for descending order
    array = array.reverse();
   //Here convert number => char and join
   const sortString = array.map(ascii => String.fromCharCode(ascii)).join('');
   console.log(sortString)

    //output => UIBA
      

  }
  //else that shown invalid

 else{
     console.log( 'Input unValid Input . You should input only Capital Letter')
  }
 