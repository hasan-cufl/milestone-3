// Feet to Mile converter.

function feetToMile(feet){
    const mile = feet / 5280;
    return mile;
}
const mile = feetToMile(15840);
console.log(mile);


// Wood calculator.

function woodCalculator(chair, table, cot){
    const tableWood = table * 3;
    const cotWood = cot * 5;
    const total = chair + tableWood + cotWood;
    return total;
}

const totalWood = woodCalculator(5, 2, 2);
console.log(totalWood);


// Brick calculator.

function brickCalculator(floor){
    if(floor <= 10){
        floor = floor * 15 * 1000;
        result = floor;
    }
    if(floor <= 20){
        const tenToTwenty = floor - 10;
        totalBrick = tenToTwenty * 12 * 1000 + 150000;
        result = totalBrick;
    }
    if(floor > 20){
        const twentyToUp = floor - 20;
        totalBrick = twentyToUp * 10 * 1000 + 270000;
        result = totalBrick;
    }
    return result;
}
const total = brickCalculator(18);
console.log(total);


// Tiny friend.

function tinyFriend(friendsName){
    let tinyName = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];
        if(element.length < tinyName.length){
            tinyName = element;
        }
    }
    return  tinyName;
}
const littleName = tinyFriend(['abir', 'saif', 'salman', 'mou', 'hasan', 'nazmul']);
console.log(littleName);