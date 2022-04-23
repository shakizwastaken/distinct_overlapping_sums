let set1 = [0,1,3];
let set2= [0,2,3,5];

function distinctSum(set1 ,set2){

    
    let distinctElements = [];
    for(let i = 0; i<set1.length; i++){

        if(!set2.includes(set1[i])){
            distinctElements.push(set1[i]);
        }
    }

    for(let i = 0; i<set2.length; i++){
    
        if(!set1.includes(set2[i])){
            distinctElements.push(set2[i]);
        }

    }

    return distinctElements.reduce((partialSum, a) => partialSum + a, 0);
}


console.log(distinctSum(set1,set2));
