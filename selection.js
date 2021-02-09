const selection = (arr) =>{

    const len = arr.length;

    for(let i = 0 ; i < len ; i++){

                      let minValueIndex = i ; 

                        for(let j  = i+1 ; j < len ; j++){

                                    if(arr[j] < arr[minValueIndex]){
                                        minValueIndex = j;
                                    }
        }

        [arr[i] , arr[minValueIndex]] = [arr[minValueIndex] , arr[i]];

    }

    return arr;
}

const result = selection([45,43,2,1,1]);
console.log(result);