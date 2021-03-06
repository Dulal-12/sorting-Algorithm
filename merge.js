const merge = (array) =>{

    const half = Math.floor(array.length / 2);

    if(array.length  < 2){
        return array;
    }


       const left = array.splice( 0 , half);

    return merging(merge(left) , merge(array));
}


const merging = (left , right)=>{

    let arr = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }

    return [...arr , ...left , ...right];
}

console.log(merge([5,4,3,2]));