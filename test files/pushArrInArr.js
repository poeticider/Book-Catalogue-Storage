//testing pushing one arr into another
let parentArr = [];

let childArr = [1, 2, 3];
let childArr2 = {
    one: 1,
    two: 2,
    three: 3

};

childArr2.three = "halloooo"
console.log(childArr2)

parentArr.push(childArr);
parentArr.push(childArr2);

let lastChildArr = parentArr[parentArr.length -1];
//console.log(parentArr[1].one)
console.log(lastChildArr.one)

//console.log(parentArr);
