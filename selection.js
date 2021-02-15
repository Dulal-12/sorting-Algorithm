const selectionSort = (array)=>{
    //find array length
    const len = array.length;
    

    for(let i = 0; i < len ; i++){

        //take minValue
        let minValueIndex = i;

        for(let j = i+1 ; j < len ;j++){
            if(array[j] < array[minValueIndex]){
                minValueIndex = j;
            }
        }

        [array[i] , array[minValueIndex]] = [array[minValueIndex] , array[i]];
    }

    console.log(array);

}

selectionSort([1,2,3,6,74,3,2,0,1,-1])