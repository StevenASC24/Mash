//Step 2
function mash() {
    return "You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries" + " and have a pet " + getPet() + " and go to " + getcollege() + " also your job is" + getjob();
}


let result = mash()
console.log(result);

//Step 3
function randNumGenerator(num) {
    let randDecimal = Math.random();
    let randNum = randDecimal * num;
    let randInt = Math.floor(randNum);
    return randInt
}

let randNum = randNumGenerator(10);
console.log(randNum);

//Step 4

function getHome() {
    let UserGuess = process.argv[2];
    let getHome = ['Mansion', 'Castle', 'Shack', 'House'];
    getHome.push(UserGuess);
    let randNum = randNumGenerator(getHome.length);
    if (getHome.push == null) {
    getHome.push('basement');
        }
    return getHome[randNum];
}

//Step 5
function getTravelCount() {
    let randDecimal = Math.random();
    let randNum = randDecimal * 101;
    let randInt = Math.floor(randNum);
    return randInt
}

let randNum2 = randNumGenerator(10);
console.log(randNum2);

//STUPID Step 6
function getPet() {
    let UserGuess = process.argv[3];
    let randomPets = ['dog', 'cat', 'bird', 'lion'];
    let randNum = randNumGenerator(randomPets.length);
    let randNum2 = randNumGenerator(2);
    if (randNum2 == 0) {
        return randomPets[randNum];
    }
    else {
    if (getPet == null) {
    getPet('Monkey');
    }
        return UserGuess;
    }
    
}

function getcollege() {
    let randcolleges = ['MIT', 'Harvard', 'CUNY', 'no college cause you broke'];
    let randNum = randNumGenerator(randcolleges.length);
    return randcolleges[randNum];
}

function getjob() {
    let randjobs = [' an ASC instructor', ' a streamer', ' no job'];
    let randNum = randNumGenerator(randjobs.length);
    return randjobs[randNum];
}