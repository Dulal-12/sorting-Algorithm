const insertion = (array) =>{

    const len = array.length;

    for(let i = 1 ; i < len ;i++){

        let item = array[i];
        let j = i-1;

        while(j >=0 && array[j] > item){
            array[j+1] = array[j];
            j = j - 1;
            array[j + 1] = item;
        }
    }

    console.log(array);
}

insertion([2,4,6,1,2,90,1]);