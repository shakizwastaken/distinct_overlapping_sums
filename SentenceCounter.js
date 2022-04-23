
let set1 = [0,1,3];
let set2= [0,2,3,5];

function overlappingSum(set1 ,set2){

    
    let overlappingElements = [];
    for(let i = 0; i<set1.length; i++){

        if(set2.includes(set1[i])){
            overlappingElements.push(set1[i]);
        }
    }

    for(let i = 0; i<set2.length; i++){
    
        if(set1.includes(set2[i])){
            overlappingElements.push(set2[i]);
        }

    }

    return overlappingElements.reduce((partialSum, a) => partialSum + a, 0);
}


console.log(overlappingSum(set1,set2));







