// feetToMile part start here
function feetToMile(inputFeetValue) {

    // 1 mile = 5280 feet
    if(inputFeetValue>=0){
        var mileValue = inputFeetValue/5280;
        return console.log("Mile value is: " + mileValue);
    }
    else{
        return console.log("Distance value can't be negative");
    }
}
// feetToMile part ends here


// woodCalculator part start here
function woodCalculator(chair,table,bed) {

    if(chair>=0 || table>=0 || bed>=0){
        //each chair=1, each table=3, each bed=5;
        var totalChairWood = chair*1;
        var totalTableWood = table*3;
        var totalBedWood = bed*5;
        var totalWoodNeeded = totalChairWood+totalTableWood+totalBedWood;
        return console.log("Total wood needed: " + totalWoodNeeded);
    }
    else{
        return console.log("Item quantity can't be negative")
    }
}
// woodCalculator part ends here


// brickCalculator part start here
function brickCalculator(floorNumber) {

    var totalBrickCount = 0;
    if (floorNumber>0){
        if (floorNumber<=10){
            var lowerFloorBrickCount = floorNumber*15*1000;
            var totalBrickCount = lowerFloorBrickCount;
            return console.log("Total brick needed: " + totalBrickCount);
        } else if(floorNumber>10 && floorNumber<=20) {
            var lowerFloorBrickCount = 10*15*1000;
            var midFloorBrickCount = (floorNumber-10)*12*1000;
            var totalBrickCount = lowerFloorBrickCount + midFloorBrickCount;
            return console.log("Total brick needed: " + totalBrickCount);
        } else{
            var lowerFloorBrickCount = 10*15*1000;
            var midFloorBrickCount = 10*12*1000;
            var upperFloorBrickCount = (floorNumber-20)*10*1000;
            var totalBrickCount = lowerFloorBrickCount + midFloorBrickCount + upperFloorBrickCount;
            return console.log("Total brick needed: " + totalBrickCount);
        }
    }
    else {
        return console.log("Floor number can't be zero or negative");
    }
}
// brickCalculator part ends here


// tinyFriend part start here
function tinyFriend(friendList) {
    
    if (friendList.length!=0) {
        var tinyName = friendList[0];
        for(var x=1; x<friendList.length; x++){
            var checkCurrentName = friendList[i];
            if (checkCurrentName.length<tinyName) {
                tinyName = checkCurrentName;
            }
        }
        return console.log(tinyName + "is the most tiny name in friendlist");
    } else {
        return console.log("Empty list. Please add your friends name.");
    }
}
// tinyFriend part ends here