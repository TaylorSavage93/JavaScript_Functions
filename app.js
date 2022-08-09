console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0){
    for( let i = 1; i >= count; i--){
        if (i % 2 !=0){
            console.log(i);
            }
        }
    }else{
        for (let i = 1; i <= count; i++){
            if (i % 2 !=0){
                console.log(i);
            }
        }
    }
}
printOdds(10);
printOdds(100)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    let oldEnoughMsg = `Congrats ${name} you can drive!`;
    let tooYoungMsg = `Sorry ${name} you are not old enough to drive`;    

    if (age < 16){
        consolg.log(tooYoungMsg);
    }else{
        console.log(oldEnoughMsg);
    }
}

checkAge("Ben", 12);
checkAge("Taylor",24);
checkAge("Kyle", 29);

//Exercise 3
console.log("Exercise 3 \n==========\n");
function checkQuadrant(x,y){
    switch (true){
        case x > 0 && y > 0:
            return "Qaudrant 1";
        case x < 0 && y > 0:
            return "Qaudrant 2";
        case x < 0 && y < 0:
            return "Qaudrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x == 0 && y != 0:
            return "X axis";
        case x != 0 && y == 0:
            return "Y axis";
        default:
            return "origin";
    }
}
console.log(checkQuadrant(11,1))
console.log(checkQuadrant(20,4))
console.log(checkQuadrant(0,5))
console.log(checkQuadrant(25,6))
console.log(checkQuadrant(6,30))

//Exercise 4
console.log("Exercise 4 \n============\n");
function whatTypeOfTriangle(a,b,c){
    let isValid= isValidTriangle(a,b,c);
    if(isValid){
        if(a == b && b == c){
            return `Equilateral`;
        }else if (a == b || b == c || a == c){
            return `Isosceles`;
        }else{
            return `Scalene`;
        }
    }else{
        return `Not a valid triangle`;

    }
}

console.log(whatTypeOfTriangle(3,4,5));
console.log(whatTypeOfTriangle(3,3,3));
console.log(whatTypeOfTriangle(1,2,2));
console.log(whatTypeOfTriangle(1,1,2));

//Exercise 5
console.log("Exercise 5 \n=============\n");
function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING";
    }else if (currentAvg < projectedAvg){
        statusMsg = "UNDER";
    }else{
        statusMsg = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your avgerage daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you will end up using ${planLimit - (usage + projectedUsage)} GB from your data limit. 
    to stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day`);
}
dataUsageFeedback(50,10,25);