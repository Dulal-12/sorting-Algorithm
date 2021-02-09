const bubble = (arr) =>{

    const len = arr.length;

    for(let i = 0 ; i < len ; i++){

                       for(let j = 0 ; j < len - 1 - i ; j++){

                                          if(arr[j+1] < arr[j]){
                                                       
                                                      [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
                                          }
                       }

  }

  return arr;
}

const result = bubble([7,5,4,3,2,2]);
console.log(result);