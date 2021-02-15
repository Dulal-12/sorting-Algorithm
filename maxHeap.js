 const maxHeap = (arr) =>{

    const newArr = [];
    let index = 0 ; 

    while(index !== -1){

        index = Math.floor((arr.length/2) - 1);

        for(let i = index ; i >= 0 ; i--){

            let  j = 2 ; 

         while (j !=0){
            if((arr[i] < arr[2*i+j]) && (arr[2*i + j] !== undefined)){

                [arr[i], arr[2*i + j]] = [arr[2*i + j] , arr[i]];
                j--;
   }

   else{
       j--;
            }
         }


        }

        [arr[0] , arr[arr.length - 1]] = [arr[arr.length-1] , arr[0]];

        newArr.unshift(arr.pop());
    }
    return newArr;
 }

 const arr = [12,16,7,8,9,6];
 console.log(maxHeap(arr));